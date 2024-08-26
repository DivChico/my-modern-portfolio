import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary rounded-lg shadow mt-4 ">
      <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            DivChico
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 gap-5 dark:text-gray-400 sm:mt-0">
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
    </footer>
  );
};

export default Footer;
