import { motion } from "framer-motion";
import React from "react";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="  mt-4"
    >
      <div className=" mx-auto max-w-screen-xl text-center ">
        <div className="mx-auto max-w-screen-sm">
          <h2
            className="mb-4  mt-4 text-2xl text-center  font-extrabold "
            id="Testimonials"
          >
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-1 ">
          <figure className="flex flex-col justify-center items-center  text-center bg-secondary p-4   rounded-md shadow-lg  hover:scale-105 transition-all duration-300 ">
            <blockquote className="mx-auto px-2  max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-xs">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="Bonnie Green"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-xs">
                <div>Bonnie Green</div>
                <div className=" font-light text-gray-500 dark:text-gray-400 text-xs">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="  hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center  text-center bg-secondary p-4   rounded-md shadow-lg  ">
            <blockquote className="mx-auto px-2  max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-xs">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
            </blockquote>
            <figcaption className="  hover:scale-105 transition-all duration-300 flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="Bonnie Green"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-xs">
                <div>Bonnie Green</div>
                <div className=" font-light text-gray-500 dark:text-gray-400 text-xs">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>{" "}
          <figure className="  hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center  text-center bg-secondary p-4   rounded-md shadow-lg  ">
            <blockquote className="mx-auto px-2  max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-xs">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="Bonnie Green"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-xs">
                <div>Bonnie Green</div>
                <div className=" font-light text-gray-500 dark:text-gray-400 text-xs">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>{" "}
          <figure className=" hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center  text-center bg-secondary p-4   rounded-md shadow-lg  ">
            <blockquote className="mx-auto px-2  max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-xs">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="Bonnie Green"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-xs">
                <div>Bonnie Green</div>
                <div className=" font-light text-gray-500 dark:text-gray-400 text-xs">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
