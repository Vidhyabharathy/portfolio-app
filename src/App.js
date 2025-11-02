import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="bg-light text-dark">
      <Header />
      <Hero />
      <About />
     
      <SkillsSection/>
      <Projects />
      <Contact />
      <main className="container py-4">
       
       
      </main>
      <Footer />
    </div>
  );
}

export default App;
