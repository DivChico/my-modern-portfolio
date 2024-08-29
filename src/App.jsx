// src/App.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ProjectsList from "./Components/ProjectsList/ProjectsList";
import Stack from "./Components/Stack/Stack";
import Testimonials from "./Components/Testimonials/Testimonials";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-main min-h-screen mx-auto px-40 py-4 text-text scroll-smooth">
          <Header />
          <Hero />
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-4 mt-4 text-2xl text-center font-extrabold"
            id="Stack"
          >
            My Stack
          </motion.h2>
          <Stack />
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-4 mt-4 text-2xl text-center font-extrabold"
            id="Projects"
          >
            Taste of my Projects
          </motion.h2>
          <ProjectsList />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
