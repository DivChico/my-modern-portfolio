import React from "react";
// icons
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
const Hero = () => {
  return (
    <section className="flex  items-center flex-col py-5  shadow-lg mt-4 bg-secondary rounded-md">
      <div className=" py-10">
        <p className=" text-3xl md:text-6xl font-bold relative right-20">
          Web & Mobile
        </p>
        <p className=" text-3xl md:text-6xl font-bold relative left-20">
          App Developer
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <p className=" text-sm max-w-96">
            Hello there, I’m Abdullah – I design and build web and mobile apps
            that are user-friendly, beautiful & convert your target audience –
            Currently based in Gaza ,Palestine.
          </p>
        </div>
        <div className="flex items-center  justify-between ">
          <div className="flex items-center gap-4">
            <p className="text-sm">say hello</p>
            <InstagramIcon fontSize="small" />
            <GitHubIcon fontSize="small" />
            <LinkedInIcon fontSize="small" />
            <FacebookIcon fontSize="small" />
          </div>
          <div>
            <button className="bg-tertiary text-sm hover:bg-tertiary-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">
              Ruseme
              <FileDownloadOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
