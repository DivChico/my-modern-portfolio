import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SkeletonCard from "../ProjectCard/SkeletonCard";
import { motion } from "framer-motion";
import socialMediaAppImage from "../../../public/assets/social-media-app.jpg";
import Interactive from "../../../public/assets/project card image.jpg";
import Mntn from "../../../public/assets/project card image (1).jpg";

const ProjectsList = () => {
  // Define the projects array correctly
  const projects = [
    {
      stackUsed: ["React Js", "MUI", "Node JS", "Express", "mongodb"],
      image: socialMediaAppImage,
      title: "Social media App",
      githubLink: "https://github.com/DivChico/social-media-app-frontend",
      projectLink: "https://social-media-app-9fob.onrender.com",
    },
    {
      stackUsed: ["Html", "Css", "JavaScript"],
      image: Interactive,
      title: "Interactive card details form",
      githubLink: "https://github.com/DivChico/InteractiveCardDetailsForm",
      projectLink: "https://divchico.github.io/InteractiveCardDetailsForm/",
    },
    {
      stackUsed: ["React JS", "Tailwind", "Vite"],
      image: Mntn,
      title: "Mntn - landing page",
      githubLink: "https://github.com/DivChico/Mntn",
      projectLink: "https://mntn-landing-page.onrender.com/",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid items-center gap-5 grid-cols-2 mt-1"
    >
      {loading
        ? // Display multiple SkeletonCards if loading
          Array(2)
            .fill(null)
            .map((_, index) => <SkeletonCard key={index} />)
        : // Display ProjectCards once loaded
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              stackUsed={project.stackUsed}
              image={project.image}
              title={project.title}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
            />
          ))}
    </motion.section>
  );
};

export default ProjectsList;
