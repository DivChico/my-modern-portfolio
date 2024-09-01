import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 h-10 text-sm shadow-lg bg-secondary rounded-lg flex items-center justify-between py-2 text-text">
      <div className="flex items-center">
        <a
          href="https://github.com/DivChico"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all  font-bold tracking-widest duration-300 cursor-pointer"
        >
          Chico
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden p-2 rounded-lg hover:bg-blue-500 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menu Items */}
      <nav
        className={`lg:flex flex-col lg:flex-row items-center gap-5 absolute lg:relative top-12 right-4 lg:top-auto lg:right-auto bg-secondary lg:bg-transparent lg:p-0 p-4 rounded-lg lg:rounded-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
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
      </nav>
    </header>
  );
};

export default Header;
