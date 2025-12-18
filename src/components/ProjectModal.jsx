import { AiOutlineSwapRight } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const ProjectModal = ({ item }) => {
  return (
    <div className="absolute bg-black p-5 w-10/12 lg:w-6/12 space-y-5 border rounded-2xl flex flex-col justify-evenly items-center lg:flex-row lg:space-x-5">
      <div className="space-y-2 lg:w-4/12 lg:space-y-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full lg:w-72 h-46 lg:h-56 rounded-md"
        />
        <div className="space-y-1 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <h1 className="text-lg mont">{item.title}</h1>
          <p className="text-[10px] text-[#aaa] font-bold">{item.date}</p>
        </div>
      </div>
      <div className="space-y-3 lg:w-5/12 flex-1 flex flex-col lg:justify-between lg:space-y-5">
        <p className="px-2 leading-5 text-xs text-justify">
          {item.description}
        </p>
        <div className="flex-1 flex flex-col justify-between space-y-3 ">
          <p
            className={`${
              item.var === 0
                ? "text-blue-600"
                : item.var === 1
                ? "text-red-700"
                : item.var === 2
                ? "text-green-700"
                : "text-yellow-700"
            } text-[10px] font-bold flex flex-row space-x-2 bg-white items-center border rounded-full p-0.5 px-2 mr-auto`}
          >
            <AiOutlineSwapRight size={15} />
            <span>{item.type}</span>
          </p>
          {item.live && (
            <p className="exc">
              Live at
              <a href={item.live} className="text-[#00ffff]" target="_blank">
                {item.live}
              </a>
            </p>
          )}
          {item.url && (
            <button className="border  lg:w-5/12 mx-auto">
              <a
                href={item.url}
                target="_blank"
                className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold p-2"
              >
                <FaGithub size={20} />
                <span>Github Repo</span>
              </a>
            </button>
          )}
        </div>
        {item.pdf && (
          <button className="border  lg:w-5/12 mx-auto">
            <a
              href={item.pdf}
              download
              className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold"
            >
              <LuDownload size={15} />
              <span>Download</span>
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
