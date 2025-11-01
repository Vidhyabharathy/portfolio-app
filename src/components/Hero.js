import React from "react";
import './Hero.css'

function Hero() {
  return (
    
    <section className="hero-section  w-100 d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
      <h2 className="display-4 fw-bold mb-3">Hi, I’m Vidhyabharathy N 👋</h2>
      <p className="lead text-muted">
        I build modern web apps with React & Node.js
      </p>
      <a
        href="#projects"
        className="btn btn-primary btn-lg mt-4 shadow"
      >
        View My Work
      </a>

      <a
        href="/Resume.pdf"   // place cv.pdf inside public/ folder
        download="My_CV.pdf"   // custom filename when downloaded
        className="btn btn-outline-primary btn-lg mt-3 shadow"
      >
        Download CV
      </a>
    </section>
   
  );
}

export default Hero;
