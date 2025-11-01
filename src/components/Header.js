import React from "react";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-4 bg-light shadow-sm">
      <h1 className="h4 fw-bold mb-0">My Portfolio</h1>
      <nav>
        <a href="#about" className="text-decoration-none me-3 link-primary">
          About
        </a>
        <a href="#projects" className="text-decoration-none me-3 link-primary">
          Projects
        </a>
        <a href="#contact" className="text-decoration-none link-primary">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
