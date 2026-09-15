import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpo, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const about = [
    {
      title: "Name",
      ans: "Praveen. M",
    },
    {
      title: "Role",
      ans: "Full Stack Web Developer",
    },
    {
      title: "Location",
      ans: "Tuticorin, TamilNadu, India",
    },
    {
      title: "Email",
      ans: "PraveenTech005@gmail.com",
    },
    {
      title: "Phone",
      ans: "+91-97900 77037",
    },
  ];
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center py-24 px-6 lg:px-32 overflow-hidden"
      id="about"
    >
      {/* Ambient glow — matches hero */}
      <div className="absolute top-1/4 right-0 w-125 h-125 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <h2 className="mont text-3xl lg:text-4xl mb-16 dark:text-white text-black relative z-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left — avatar with glow ring + quick facts */}
        <div className="flex flex-col items-center gap-6 w-full md:w-1/4 shrink-0">
          <div className="relative w-full">
            <div className="absolute -inset-2 rounded-2xl bg-linear-to-br from-blue-500/30 via-cyan-400/10 to-transparent blur-xl" />
            <img
              src="/Praveen.jpg"
              alt="Praveen M - Full Stack Web & Mobile App Developer"
              className="relative w-full md:w-8/12 h-full rounded-xl object-cover object-top border-2 dark:border-white/10 border-black/10 shadow-xl mx-auto"
            />
          </div>
          <div className="space-y-3 w-full md:w-8/12">
            {about.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-b dark:border-white/5 border-black/5 pb-2"
              >
                <span className="text-[10px] uppercase tracking-widest dark:text-gray-600 text-gray-400">
                  {item.title}
                </span>
                <span className="text-sm dark:text-gray-200 text-gray-800 mt-0.5">
                  {item.ans}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio */}
        <div className="flex flex-col gap-8 w-full lg:w-3/4 text-justify">
          <div className="space-y-4 leading-7 dark:text-gray-400 text-gray-600 text-sm lg:text-base">
            <p className="text-xl lg:text-2xl font-bold dark:text-white text-black mont">
              Hi, I'm{" "}
              <span className="dark:text-gray-300 text-gray-700">Praveen</span>{" "}
              — Full Stack Developer 👋
            </p>
            <p>
              I'm a{" "}
              <strong className="dark:text-gray-200 text-gray-800">
                Full-Stack Developer
              </strong>{" "}
              based in India 🇮🇳, working across the{" "}
              <strong className="dark:text-gray-200 text-gray-800">
                MERN stack
              </strong>{" "}
              — React, Node.js, Express, and MongoDB — to build fast, scalable
              web applications from the ground up.
            </p>
            <p>
              I also build mobile apps with{" "}
              <strong className="dark:text-gray-200 text-gray-800">
                React Native
              </strong>{" "}
              and{" "}
              <strong className="dark:text-gray-200 text-gray-800">Expo</strong>
              , carrying the same component-driven, JavaScript-first approach
              from web to mobile. My graduation project, MechCommerce, is a full
              ecosystem built this way — a customer app, an admin app, and the
              API powering both.
            </p>
            <p>
              I'm a self-learner and tech enthusiast — always exploring new
              tools and best practices to stay ahead in the ever-evolving dev
              world.
            </p>
          </div>

          {/* Stats — now as elevated cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Projects", value: "10+" },
              { label: "Client Projects", value: "3+" },
              { label: "Years Learning", value: "3+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-1 rounded-xl border dark:border-white/10 border-black/10 dark:bg-white/3 bg-black/2 p-4 hover:dark:border-blue-500/30 hover:border-blue-500/30 transition-colors"
              >
                <span className="text-2xl lg:text-3xl font-bold mont dark:text-white text-black">
                  {stat.value}
                </span>
                <span className="text-xs dark:text-gray-500 text-gray-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Core stack — icon-backed highlight cards instead of plain chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
              {
                name: "Node JS",
                icon: <FaNodeJs className="text-[#6cc24a]" />,
              },
              {
                name: "Express JS",
                icon: <span className="font-bold text-xs">ex</span>,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-[#4DB33D]" />,
              },
              {
                name: "React Native",
                icon: <FaReact className="text-[#61DAFB]" />,
              },
              {
                name: "Expo",
                icon: <SiExpo className="dark:text-white text-black" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs px-3 py-2 rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#0d0d0d] bg-white dark:text-gray-300 text-gray-700 hover:dark:border-blue-500/30 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm"
              >
                <span className="text-sm">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
