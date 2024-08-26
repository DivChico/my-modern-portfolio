import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <section className=" items-center gap-5 grid-cols-2 grid mt-1">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default ProjectsList;
