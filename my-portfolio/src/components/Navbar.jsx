import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // If NOT on home page → go to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } 
    // If already on home → just scroll
    else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <span>F</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a onClick={() => scrollToSection("home")}>Home</a></li>
          <li><a onClick={() => scrollToSection("about")}>About Me</a></li>
          <li><a onClick={() => scrollToSection("services")}>Services</a></li>
          <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>

          {/* New Pages */}
          <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link to ="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to ="/map" onClick={() => setIsOpen(false)}>Map</Link></li>

          <li><a onClick={() => scrollToSection("reviews")}>Testimonials</a></li>
       
        </ul>

        <button className="contact-btn" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
