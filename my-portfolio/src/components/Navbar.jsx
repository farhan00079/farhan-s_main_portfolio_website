import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <span>F</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About Me</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleScroll("services"); }}>Services</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll("projects"); }}>My Projects</a>
          </li>
          <li>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); handleScroll("reviews"); }}>Reviews</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>Contact</a>
          </li>
        </ul>

        <button className="contact-btn" onClick={() => handleScroll("contact")}>Contact</button>
      </nav>
    </div>
  );
}

export default Navbar;
