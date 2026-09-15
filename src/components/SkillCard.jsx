import { AiOutlineSwapRight } from "react-icons/ai";

const SkillCard = ({ content }) => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-11/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {content.map((item, index) => {
          const bgGradients = [
            "dark:from-[#00ffff]/10 from-[#00ffff]/20",
            "dark:from-[#6B26D9]/10 from-[#6B26D9]/20",
            "dark:from-[#ff00ff]/10 from-[#ff00ff]/20",
            "dark:from-[#EF233C]/10 from-[#EF233C]/20",
            "dark:from-[#E7BB41]/10 from-[#E7BB41]/20",
            "dark:from-[#296EB4]/10 from-[#296EB4]/20",
          ];
          const textColors = [
            "text-[#00ffff]",
            "text-[#6B26D9]",
            "text-[#ff00ff]",
            "text-[#EF233C]",
            "text-[#E7BB41]",
            "text-[#296EB4]",
          ];
          const borderHov = [
            "group-hover:border-[#00ffff]",
            "group-hover:border-[#6B26D9]",
            "group-hover:border-[#ff00ff]",
            "group-hover:border-[#EF233C]",
            "group-hover:border-[#E7BB41]",
            "group-hover:border-[#296EB4]",
          ];

          return (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-3xl p-[1px] bg-gradient-to-b dark:from-white/10 dark:to-white/5 from-black/10 to-black/5 hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              {/* Decorative background glow behind the card content */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[item.color]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0`}></div>
              
              <div className={`relative h-full w-full bg-white dark:bg-[#0d0d0d] rounded-3xl p-8 z-10 flex flex-col space-y-6 border border-transparent transition-colors duration-300 ${borderHov[item.color]}`}>
                <div className="space-y-2">
                  <h1 className={`text-3xl font-bold mont ${textColors[item.color]} tracking-wide`}>
                    {item.title}
                  </h1>
                </div>
                
                <div className="flex flex-col space-y-4 flex-grow">
                  {item.skills.map((ele, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 group/item cursor-pointer"
                    >
                      <span className={`${textColors[item.color]} transform group-hover/item:translate-x-2 transition-transform duration-300`}>
                        <AiOutlineSwapRight size={20} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-300">
                        {ele}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
