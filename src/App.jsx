import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
    </>
  );
};

export default App;