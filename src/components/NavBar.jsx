import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavBar = ({ theme, setTheme }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full fixed top-3 left-0 z-50" aria-label="Main Navigation">
      <div className="w-4/12 dark:bg-white/10 bg-black/10 lg:flex flex-row justify-between items-center mx-auto p-2 px-5 rounded-lg hidden backdrop-blur-md border-2 dark:border-white/10 border-black/10 text-black dark:text-white">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.toLowerCase());
              }}
              className="hover:scale-110 cursor-pointer bg-transparent border-none outline-none font-medium text-sm transition-transform"
            >
              {item}
            </a>
          )
        )}
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="absolute right-5 top-0 p-3 z-50 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white backdrop-blur-md cursor-pointer hover:scale-110 transition border border-black/10 dark:border-white/10"
      >
        {theme === "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
      </button>
    </nav>
  );
};

export default NavBar;
