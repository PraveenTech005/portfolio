import { AiOutlineSwapRight } from "react-icons/ai";

const SkillCard = ({ content }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-y-0 p-3 text-white">
      {content.map((item, index) => (
        <div
          key={index}
          className={`${
            item.color === 0
              ? `hover:border-[#00ffff] hover:shadow-[#00ffff]`
              : item.color === 1
              ? `hover:border-[#6B26D9] hover:shadow-[#6B26D9]`
              : item.color === 2
              ? `hover:border-[#ff00ff] hover:shadow-[#ff00ff]`
              : item.color === 3
              ? `hover:border-[#EF233C] hover:shadow-[#EF233C]`
              : item.color === 4
              ? `hover:border-[#E7BB41] hover:shadow-[#E7BB41]`
              : `hover:border-[#296EB4] hover:shadow-[#296EB4]`
          } border border-[#555555] bg-[#101010] w-10/12 lg:w-8/12 p-5 mx-auto space-y-3 rounded-2xl trans shadow-lg`}
        >
          <h1
            className={`${
              item.color === 0
                ? `text-[#00ffff]`
                : item.color === 1
                ? `text-[#6B26D9]`
                : item.color === 2
                ? `text-[#ff00ff]`
                : item.color === 3
                ? `text-[#EF233C]`
                : item.color === 4
                ? `text-[#E7BB41]`
                : `text-[#296EB4]`
            } text-xl mont`}
          >
            {item.title}
          </h1>
          <div className="space-y-2">
            {item.skills.map((ele, i) => (
              <h3
                key={i}
                className={`${
                  item.color === 0
                    ? `hover:text-[#00ffff]`
                    : item.color === 1
                    ? `hover:text-[#6B26D9]`
                    : item.color === 2
                    ? `hover:text-[#ff00ff]`
                    : item.color === 3
                    ? `hover:text-[#EF233C]`
                    : item.color === 4
                    ? `hover:text-[#E7BB41]`
                    : `hover:text-[#296EB4]`
                } flex flex-row items-center space-x-2 cursor-pointer text-xs trans-right trans`}
              >
                <span
                  className={`${
                    item.color === 0
                      ? `text-[#00ffff]`
                      : item.color === 1
                      ? `text-[#6B26D9]`
                      : item.color === 2
                      ? `text-[#ff00ff]`
                      : item.color === 3
                      ? `text-[#EF233C]`
                      : item.color === 4
                      ? `text-[#E7BB41]`
                      : `text-[#296EB4]`
                  }`}
                >
                  <AiOutlineSwapRight size={15} />
                </span>{" "}
                <span>{ele}</span>
              </h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
