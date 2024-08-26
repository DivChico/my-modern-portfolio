import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";
const ProjectsList = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className=" items-center gap-5 grid-cols-2 grid mt-1"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </motion.section>
  );
};

export default ProjectsList;
