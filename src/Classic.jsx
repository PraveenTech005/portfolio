import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Classic = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="w-full text-black dark:text-white text-sm bg-gray-50 dark:bg-black transition-colors duration-300">
      <ToastContainer />
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="w-full border-t dark:border-white/5 border-black/5 dark:bg-[#0a0a0a] bg-gray-50 px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <h2 className="mont text-xl font-bold dark:text-white text-black">
              Praveen.M
            </h2>
            <p className="text-xs dark:text-gray-500 text-gray-400 max-w-xs">
              Full Stack Web Developer crafting clean, fast, and scalable web
              experiences.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-6 flex-wrap">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/praveentech005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub - PraveenTech005"
              className="dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/Praveentech005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn - Praveen"
              className="dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:PraveenTech005@gmail.com"
              aria-label="Send Email"
              title="Email - Praveen"
              className="dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors"
            >
              <SiGmail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t dark:border-white/5 border-black/5 flex flex-col lg:flex-row justify-between items-center gap-2">
          <p className="text-xs dark:text-gray-600 text-gray-400">
            © {new Date().getFullYear()} Praveen M. All rights reserved.
          </p>
          <p className="text-xs dark:text-gray-600 text-gray-400">
            Designed & Developed by{" "}
            <a
              href="https://github.com/praveentech005"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-black transition-colors mont font-medium"
            >
              Praveen
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Classic;
