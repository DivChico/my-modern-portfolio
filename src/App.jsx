import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Stack from "./Components/Stack/Stack";

function App() {
  return (
    <>
      <div className="bg-main min-h-screen  mx-auto px-40 py-4 text-text">
        <Header />
        <Hero />
        <Stack />
      </div>
    </>
  );
}

export default App;
