// src/Components/Loading/Loading.js
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-main bg-opacity-80 z-50">
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-t-4 border-tertiary border-solid rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-xl font-semibold text-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
