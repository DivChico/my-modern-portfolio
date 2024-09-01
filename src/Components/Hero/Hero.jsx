import React from "react";
import CountUp from "react-countup";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HowToRegIcon from "@mui/icons-material/HowToReg";
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
        >
          Web & Mobile
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold"
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

        <div className="flex gap-6 mt-4 flex-wrap flex-col items-center md:flex-row">
          <div className="flex items-center hover:scale-105 bg-secondary border p-4 rounded-lg shadow-md">
            <HowToRegIcon className="  mr-2" />
            <p className="text-sm md:text-base">
              <strong>Experience:</strong> +
              {<CountUp decimals={1} end={1.8} duration={3} />} years
            </p>
          </div>
          <div
            onClick={() => window.open("https://github.com/DivChico", "_blank")}
            className="flex items-center hover:scale-105 cursor-pointer border p-4 rounded-lg shadow-md"
          >
            <GitHubIcon className=" mr-2" />
            <p className="text-sm md:text-base">
              <strong>Repos:</strong> +{<CountUp end={22} duration={3} />}
            </p>
          </div>
        </div>

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
              href="/assets/abdullah-cv.pdf"
              download="Abdullah_Alatawwa_CV.pdf"
              className="flex items-center text-white hover:bg-tertiary bg-blue-500 text-sm hover:bg-tertiary-400 font-bold py-2 px-4 rounded-lg transition-all duration-300"
              aria-label="Download CV"
            >
              Resume
              <FileDownloadOutlinedIcon fontSize="small" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
