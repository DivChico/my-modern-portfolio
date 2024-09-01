// src/Components/Hero/Hero.js
import React from "react";
// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-8 md:py-12 mt-4 bg-secondary rounded-md shadow-lg">
      <div className="flex flex-col items-center text-center py-6">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2"
        >
          Web & Mobile
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
        >
          App Developer
        </motion.p>
      </div>
      <div className="flex flex-col items-center gap-4 px-4">
        <p className="text-sm md:text-base max-w-3xl text-center">
          👋 Hello there, I’m Abdullah – I design and build 🌐 web and 📱 mobile
          apps that are user-friendly, beautiful, and convert your target
          audience. Currently based in 📍 Gaza, Palestine.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mt-4">
          <div className="flex items-center gap-4">
            <p className="text-sm md:text-base">say hello 👋</p>
            <a
              href="https://github.com/DivChico"
              className="hover:text-blue-500 cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-alatawwa/"
              className="hover:text-blue-500 cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://www.facebook.com/abdullah.alatawwna/"
              className="hover:text-blue-500 cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon fontSize="small" />
            </a>
          </div>
          <div>
            <a
              href="/assets/abdullah-cv.pdf" // Replace with the correct path to your CV file
              download="Abdullah_Alatawwa_CV.pdf"
              className="flex items-center text-white  hover:bg-tertiary bg-blue-500 text-sm hover:bg-tertiary-400 font-bold py-2 px-4 rounded-lg transition-all duration-300"
              aria-label="Download CV"
            >
              Ruseme
              <FileDownloadOutlinedIcon fontSize="small" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
