import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Projects />
      <About />
    </>
  );
};

export default HomePage;
