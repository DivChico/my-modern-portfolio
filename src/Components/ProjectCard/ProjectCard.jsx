import { motion } from "framer-motion";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({
  stackUsed,
  image,
  link,
  title,
  githubLink,
  projectLink,
}) => {
  return (
    <motion.div className="shadow-lg bg-secondary rounded-md p-4 w-full cursor-pointer hover:scale-105 transition-all duration-300 space-y-1">
      <img
        className="rounded-md"
        src={image}
        alt="Project screenshot"
        loading="lazy"
      />
      <div className="flex  gap-1 flex-col">
        <div>
          <p className="text-sm">{title}</p>
          <ul className="text-xs text-gray-400">
            <li>{stackUsed.join(", ")}</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => window.open(githubLink, "_blank")}
            className=" flex items-center gap-1 text-xs text-white bg-gray-800 px-5 py-1 rounded-md hover:bg-gray-700"
          >
            GitHub
            <GitHubIcon fontSize="small" />
          </button>
          <button
            onClick={() => window.open(projectLink, "_blank")}
            className="flex items-center gap-1 text-xs text-white hover:bg-tertiary px-5 py-1 rounded-md bg-blue-500"
          >
            Live
            <LanguageIcon fontSize="small" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
