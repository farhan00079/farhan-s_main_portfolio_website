import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        
        {/* Branding + Social Links */}
        <div className="footer-section">
          <h3 className="footer-logo">Farhan</h3>
          <p className="footer-tagline">
            Full-Stack Developer creating impactful digital experiences with cutting-edge technology.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/farhan-alam-35972922b/" aria-label="LinkedIn" className="social-icon" target="_blank"
  rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/farhan00079" aria-label="GitHub" className="social-icon" target="_blank"
  rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/farhan_____alam/" aria-label="Instagram" className="social-icon"target="_blank"
  rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> alamfarhan220@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 9117436129</p>
            <p><i className="fas fa-map-marker-alt"></i> Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} <span className="highlight">Farhan</span>. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
