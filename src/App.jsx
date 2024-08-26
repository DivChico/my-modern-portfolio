import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ProjectsList from "./Components/ProjectsList/ProjectsList";
import Stack from "./Components/Stack/Stack";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="bg-main min-h-screen  mx-auto px-40 py-4 text-text">
        <Header />
        <Hero />
        <h2 className="mb-4  mt-4 text-2xl text-center  font-extrabold ">
          My Stack
        </h2>
        <Stack />
        <h2 className="mb-4  mt-4 text-2xl text-center font-extrabold">
          Taste of my Projects
        </h2>
        <ProjectsList />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
