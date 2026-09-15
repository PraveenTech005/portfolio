import React from "react";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { LuCpu } from "react-icons/lu";
import { MdBrush, MdVpnKey } from "react-icons/md";
import {
  SiArduino,
  SiAxios,
  SiDart,
  SiExpo,
  SiExpress,
  SiFlutter,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const mainSkills = [
    {
      name: "HTML",
      icon: <SiHtml5 size={28} className="text-[#E34F26]" />,
    },
    { name: "CSS", icon: <DiCss3 size={28} className="text-[#1572B6]" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={28} className="text-[#F7DF1E]" />,
    },
    {
      name: "React",
      icon: <FaReact size={28} className="text-[#61DAFB]" />,
    },
    { name: "Vite", icon: <SiVite size={28} className="text-[#646CFF]" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={28} className="text-[#38BDF8]" />,
    },
    {
      name: "Framer",
      icon: <SiFramer size={28} className="text-[#0055FF]" />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs size={28} className="text-[#6cc24a]" />,
    },
    {
      name: "Express JS",
      icon: <SiExpress size={28} className="text-gray-500" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={28} className="text-[#4DB33D]" />,
    },
    {
      name: "Mongoose",
      icon: <span className="font-bold text-sm text-[#880000]">M</span>,
    },
    {
      name: "JWT",
      icon: <MdVpnKey size={28} className="text-[#d63aff]" />,
    },
    {
      name: "Axios",
      icon: <SiAxios size={28} className="text-[#5A29E4]" />,
    },
    {
      name: "Expo",
      icon: <SiExpo size={28} className="dark:text-white text-black" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={28} className="text-[#F05032]" />,
    },
    { name: "GitHub", icon: <FaGithub size={28} /> },
    {
      name: "Postman",
      icon: <SiPostman size={28} className="text-[#FF6C37]" />,
    },
    {
      name: "VS Code",
      icon: <DiVisualstudio size={28} className="text-[#007ACC]" />,
    },
    {
      name: "Figma",
      icon: <FaFigma size={28} className="text-[#F24E1E]" />,
    },
    {
      name: "Illustrator",
      icon: <MdBrush size={28} className="text-[#FF9A00]" />,
    },
  ];

  const extraSkills = [
    {
      name: "C",
      icon: <span className="text-[#5C6BC0] font-bold text-sm">C</span>,
    },
    { name: "Java", icon: <FaJava size={20} className="text-[#e76f00]" /> },
    {
      name: "Python",
      icon: <FaPython size={20} className="text-[#3670A0]" />,
    },
    {
      name: "Embedded C",
      icon: <span className="text-gray-500 font-bold text-xs">C</span>,
    },
    {
      name: "MicroPython",
      icon: <FaPython size={20} className="text-gray-400" />,
    },
    { name: "Dart", icon: <SiDart size={20} className="text-[#0175C2]" /> },
    {
      name: "Arduino",
      icon: <SiArduino size={20} className="text-[#00979D]" />,
    },
    {
      name: "Raspberry Pi",
      icon: <LuCpu size={20} className="text-[#C51A4A]" />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter size={20} className="text-[#54C5F8]" />,
    },
    {
      name: "React Native",
      icon: <FaReact size={20} className="text-[#61DAFB]" />,
    },
  ];
  return (
    <section className="w-full flex flex-col pb-16" id="skills">
      <div className="px-6 lg:px-20 pt-20 pb-10 space-y-2">
        <h2 className="mont text-3xl lg:text-4xl dark:text-white text-black">
          Skills & Technologies
        </h2>
        <p className="dark:text-gray-400 text-gray-500">
          The tools and technologies I use to bring ideas to life
        </p>
      </div>
      <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5">
        {mainSkills.map((skill, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#0d0d0d] bg-white shadow-md hover:scale-105 transition-all duration-300 cursor-default hover:shadow-lg dark:hover:border-white/30 hover:border-black/20"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-xs font-semibold text-center dark:text-gray-200 text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <h3 className="p-10 pb-4 text-lg mont dark:text-gray-400 text-gray-500 font-semibold">
        I Also Know
      </h3>
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-wrap gap-3">
        {extraSkills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-gray-700 border-gray-300 dark:bg-[#1a1a1a] bg-gray-100 dark:text-gray-400 text-gray-600 text-xs"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
