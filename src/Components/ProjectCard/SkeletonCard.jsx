import React from "react";
import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div className="shadow-lg  bg-secondary rounded-md p-5 w-full space-y-3 animate-pulse">
      <div
        className="rounded-md h-40 w-full"
        style={{ backgroundColor: "#dae1e7" }}
      ></div>
      <div className="flex flex-col space-y-2">
        <div
          className="h-4 w-1/2 rounded"
          style={{ backgroundColor: "#dae1e7" }}
        ></div>
        <div
          className="h-4 w-3/4 rounded"
          style={{ backgroundColor: "#dae1e7" }}
        ></div>
      </div>
      <div className="flex space-x-2">
        <div className="h-6 w-20 rounded-md bg-main"></div>
        <div className="h-6 w-20 rounded-md bg-tertiary"></div>
      </div>
    </motion.div>
  );
};

export default SkeletonCard;
