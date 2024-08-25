import React from "react";

const Header = () => {
  return (
    <header className="p-4 h-10 text-sm shadow-lg bg-secondary rounded-lg  flex items-center justify-between py-2  text-text ">
      <div>logo</div>
      <div>
        <ul className=" flex items-center  gap-20">
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
