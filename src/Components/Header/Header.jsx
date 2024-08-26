import React from "react";

const Header = () => {
  return (
    <header className="p-4 h-10 text-sm shadow-lg bg-secondary rounded-lg  flex items-center justify-between py-2  text-text ">
      <div className="hover:scale-110 transition-all duration-300 cursor-pointer">
        DivChico
      </div>
      <div>
        <ul className=" flex items-center  gap-5">
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Stack">Stack</a>
          </li>
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
