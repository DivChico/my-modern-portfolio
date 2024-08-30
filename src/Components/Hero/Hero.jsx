import React from "react";
// icons
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex  items-center flex-col py-5  shadow-lg mt-4 bg-secondary rounded-md">
      <div className=" py-10">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className=" text-3xl md:text-6xl font-bold relative right-20"
        >
          Web & Mobile
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className=" text-3xl md:text-6xl font-bold relative left-20"
        >
          App Developer
        </motion.p>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <p className=" text-sm max-w-96">
            👋 Hello there, I’m Abdullah – I design and build 🌐 web and 📱
            mobile apps that are user-friendly, beautiful, and convert your
            target audience. Currently based in 📍 Gaza, Palestine.
          </p>
        </div>
        <div className="flex items-center  justify-between ">
          <div className="flex items-center gap-4">
            <p className="text-sm">say hello 👋</p>
            <a
              href="https://github.com/DivChico"
              className="  hover:text-tertiary cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-alatawwa/"
              className="hover:text-tertiary cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://www.facebook.com/abdullah.alatawwna/"
              className="hover:text-tertiary cursor-pointer hover:scale-110 transition-all duration-300"
              target="_blank"
            >
              <FacebookIcon fontSize="small" />
            </a>
          </div>
          <div>
            <a
              href="../../../public/assets/abdullah cv.png" // Replace with the actual path to your CV file
              download="Abdullah_Alatawwa_CV.pdf" // Optional: Specify a filename for the downloaded file
              className=" text-white bg-tertiary text-sm hover:bg-tertiary-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center cursor-pointer hover:scale-110 transition-all duration-300"
            >
              Ruseme
              <FileDownloadOutlinedIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
