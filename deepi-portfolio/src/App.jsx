import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./components/TechStack";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Achievements";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
      </div>
      
      {/* Full-width Skills section */}
      <Skills />
      
      <div className="container mx-auto max-w-7xl">
        <Experiences />
        <Achievements />
        <Testimonial />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
