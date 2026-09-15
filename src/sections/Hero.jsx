import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

const Hero = ({ theme }) => {
  const resumeRef = useRef();
  return (
    <section
      className="relative w-full h-svh dark:bg-black bg-gray-50 flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-30 space-y-20 lg:space-y-0 overflow-hidden"
      id="home"
      data-theme={theme}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Amber glow — matches the accent used in other sections */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-blue-500/20 dark:bg-blue-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-10/12 lg:w-5/12 text-center space-y-8 mt-30">
        <div>
          <p className="text-sm font-medium dark:text-gray-400 text-gray-500 mb-1">Hello 👋</p>
          <h1 className="text-xl">
            I'm <span className="mont text-4xl font-extrabold tracking-wide">PRAVEEN</span>
          </h1>
        </div>
        <h2 className="mont text-lg font-semibold dark:text-gray-300 text-gray-700">
          Full-Stack Web & App Developer
        </h2>
        <p className="dark:text-gray-400 text-gray-600">
          Passionate about creating beautiful, functional websites and
          applications that deliver exceptional user experiences.
        </p>
        <div className="flex flex-row w-5/12 justify-between items-center mx-auto">
          <a
            href="https://github.com/PraveenTech005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Praveen's GitHub Profile"
            title="GitHub - PraveenTech005"
            className="hover:scale-110 transition-transform dark:text-gray-300 text-gray-700 hover:text-black hover:dark:text-white"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://linkedin.com/in/Praveentech005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Praveen's LinkedIn Profile"
            title="LinkedIn - Praveen"
            className="hover:scale-110 transition-transform dark:text-gray-300 text-gray-700 hover:text-black hover:dark:text-white"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="mailto:PraveenTech005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Praveen"
            title="Email - Praveen"
            className="hover:scale-110 transition-transform dark:text-gray-300 text-gray-700 hover:text-black hover:dark:text-white"
          >
            <SiGmail size={25} />
          </a>
        </div>
        <div className="w-full flex justify-center mx-auto space-x-5">
          <a
            href="#projects"
            className="p-2 border-2 dark:border-white/30 border-black/30 rounded-lg cursor-pointer w-5/12 lg:w-3/12 flex items-center justify-center font-medium hover:dark:bg-white/10 hover:bg-black/5 transition"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </a>
          <a
            href="/Praveen.pdf"
            download
            className="hidden"
            ref={resumeRef}
            aria-label="Download Praveen Resume PDF"
          ></a>
          <button
            className="w-5/12 lg:w-3/12 p-2 border-2 dark:border-white/30 border-black/30 rounded-lg flex justify-evenly items-center cursor-pointer bg-white text-black mont hover:opacity-90 transition font-medium"
            onClick={() => {
              resumeRef.current.click();
            }}
            aria-label="Download Resume"
          >
            <LuDownload />
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
