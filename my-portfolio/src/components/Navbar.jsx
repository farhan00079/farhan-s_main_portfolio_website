// src/components/Navbar.jsx
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">F</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">My Projects</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="contact-btn">Contact</button>
    </nav>
  );
}

export default Navbar;
