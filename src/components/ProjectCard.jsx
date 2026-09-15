import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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
  "hover:border-blue-500/30",
  "hover:border-red-500/30",
  "hover:border-green-500/30",
  "hover:border-yellow-500/30",
];

export default function ProjectCard({ item, onOpen, big }) {
  if (big) {
    // ---- Featured card: image left, content right ----
    return (
      <motion.div
        onClick={() => onOpen(item)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`group flex flex-row rounded-2xl overflow-hidden border-2 dark:border-white/30 border-black/10 dark:bg-[#0d0d0d] bg-white shadow-lg dark:shadow-black/40 shadow-black/10 hover:shadow-2xl hover:dark:shadow-black/60 transition-shadow duration-300 cursor-pointer col-span-2 row-span-2 ${varBorder[item.var] ?? varBorder[3]}`}
      >
        {/* Image — left half, full height */}
        <div className="w-2/5 shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.title} - ${item.type}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content — right half */}
        <div className="flex flex-col gap-2 flex-1 min-w-0 p-5">
          <div className="flex items-center justify-between gap-2">
            <span
              className={`font-bold rounded-full truncate text-[10px] px-2 py-1 ${varColors[item.var] ?? varColors[3]} ${varBg[item.var] ?? varBg[3]}`}
            >
              {item.type}
            </span>
            <span className="text-xs dark:text-gray-600 text-gray-400 shrink-0">
              {item.date}
            </span>
          </div>

          <h3 className="font-bold mont dark:text-white text-black text-xl leading-tight">
            {item.title}
          </h3>

          <p className="dark:text-gray-400 text-gray-600 text-sm leading-6 line-clamp-8">
            {item.description}
          </p>

          {item.live && (
            <p className="text-xs dark:text-gray-500 text-gray-400 truncate">
              🌐{" "}
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-cyan-400 text-cyan-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {item.live}
              </a>
            </p>
          )}

          <div className="flex items-center gap-3 mt-auto pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(item);
              }}
              className="text-sm px-4 py-2 rounded-full dark:bg-white dark:text-black bg-black text-white hover:opacity-80 transition-opacity cursor-pointer font-semibold"
            >
              View Details →
            </button>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors"
              >
                <FaGithub size={16} /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // ---- Compact card: full-bleed image, caption overlay at bottom ----
  return (
    <motion.div
      onClick={() => onOpen(item)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative rounded-2xl overflow-hidden border-2 dark:border-white/30 border-black/10 shadow-lg dark:shadow-black/40 shadow-black/10 hover:shadow-2xl hover:dark:shadow-black/60 transition-shadow duration-300 cursor-pointer col-span-1 row-span-1 ${varBorder[item.var] ?? varBorder[3]}`}
    >
      <img
        src={item.image}
        alt={`${item.title} - ${item.type}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      <div
        className={`absolute w-full bottom-0 flex flex-col justify-end px-4 py-2 bg-black/80 border-t-2 ${varBorder[item.var] ?? varBorder[3]}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 ">
          <h3 className="font-bold mont text-white text-sm leading-tight lg:truncate">
            {item.title}
          </h3>
          <div className="flex flex-col items-center gap-0.5 shrink-0">
            <span
              className={`font-bold rounded-full truncate text-[8px] px-1.5 py-0.5 ${varColors[item.var] ?? varColors[3]} ${varBg[item.var] ?? varBg[3]}`}
            >
              {item.type}
            </span>
            <span className="text-[10px] text-gray-300">{item.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
