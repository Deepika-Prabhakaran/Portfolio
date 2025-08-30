import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./components/TechStack";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Achievements";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experiences />
      <Achievements />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
