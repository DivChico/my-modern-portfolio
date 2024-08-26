import { motion } from "framer-motion";
import React from "react";

const ProjectCard = () => {
  return (
    <motion.div
      className="shadow-lg bg-secondary rounded-md p-5 w-full cursor-pointer hover:scale-105 transition-all duration-300
     space-y-1"
    >
      <img
        className=" rounded-md"
        src="https://raw.githubusercontent.com/DivChico/social-media-app-frontend/master/screenshot3.png"
        alt=""
      />
      <div className=" flex items-center justify-between">
        <div>
          <p className=" text-sm ">Social media app</p>
          <ul className="text-xs flex gap-1 text-gray-400">
            <li>react,</li>
            <li>nodejs,</li>
            <li>mangodb</li>
          </ul>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
