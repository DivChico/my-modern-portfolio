// src/Components/Header/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="p-4 h-10 text-sm shadow-lg bg-secondary rounded-lg flex items-center justify-between py-2 text-text">
      <div className="hover:scale-110 transition-all duration-300 cursor-pointer">
        <a href="https://github.com/DivChico" target="_blank">
          DivChico
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Stack" className="text-text hover:text-tertiary">
              Stack
            </a>
          </li>
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Projects" className="text-text hover:text-tertiary">
              Projects
            </a>
          </li>
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Testimonials" className="text-text hover:text-tertiary">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
