import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const varColors = [
  "text-blue-500",
  "text-red-500",
  "text-green-500",
  "text-yellow-500",
];
const varBg = [
  "bg-blue-500/10",
  "bg-red-500/10",
  "bg-green-500/10",
  "bg-yellow-500/10",
];

const varBorder = [
  "border-blue-500/30",
  "border-red-500/30",
  "border-green-500/30",
  "border-yellow-500/30",
];

const ProjectModal = ({ item, onClose }) => {
  return (
    <div
      className={`relative z-60 w-11/12 lg:w-5/12 max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0d0d0d] shadow-2xl border-2 ${varBorder[item.var] ?? varBorder[3]} border-black/10 flex flex-col `}
    >
      {/* Image */}
      <div className="relative w-full h-56 shrink-0 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full px-5 py-2 flex items-end justify-between bg-black/90">
          <div>
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded-full ${varColors[item.var] ?? varColors[3]} ${varBg[item.var] ?? varBg[3]} bg-black/40`}
            >
              {item.type}
            </span>
            <h2 className="text-xl font-bold mont text-white mt-1">
              {item.title}
            </h2>
          </div>
          <span className="text-xs text-gray-300">{item.date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-5 flex-1">
        <p className="text-sm leading-7 dark:text-gray-400 text-gray-600">
          {item.description}
        </p>

        {item.live && (
          <div className="flex items-center gap-2 text-sm">
            <span className="dark:text-gray-500 text-gray-400">Live at</span>
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-cyan-400 text-cyan-600 hover:underline flex items-center gap-1"
            >
              {item.live} <FaExternalLinkAlt size={10} />
            </a>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 flex-wrap pt-2 border-t dark:border-white/5 border-black/5">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border dark:border-white/10 border-black/10 dark:text-gray-300 text-gray-700 hover:dark:border-white/30 hover:border-black/20 transition-colors"
            >
              <FaGithub size={15} /> GitHub Repo
            </a>
          )}
          {item.pdf && (
            <a
              href={item.pdf}
              download
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border dark:border-white/10 border-black/10 dark:text-gray-300 text-gray-700 hover:dark:border-white/30 hover:border-black/20 transition-colors"
            >
              <LuDownload size={15} /> Download PDF
            </a>
          )}
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full dark:bg-white dark:text-black bg-black text-white hover:opacity-80 transition-opacity"
            >
              <FaExternalLinkAlt size={12} /> Visit Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
