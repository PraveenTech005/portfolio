import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-3 left-0">
      <div className="w-4/12 bg-white/10 lg:flex flex-row justify-between items-center mx-auto p-2 px-5 rounded-lg hidden backdrop-blur-xs border-2 border-white/10">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className="hover:scale-110 cursor-pointer "
            >
              <h3>{item}</h3>
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default NavBar;
