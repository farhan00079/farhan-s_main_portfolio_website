// src/components/Navbar.jsx
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <span>F</span>
        </div>

        <ul className="nav-links">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#AboutMe">About Me</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">My Projects</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="contact-btn">Contact</button>
      </nav>
    </div>
  );
}

export default Navbar;