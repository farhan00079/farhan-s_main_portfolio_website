// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile1.jpg'; // Make sure the image exists

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="intro">WELCOME TO MY WORLD ✨</p>
                <h1 className="hero-intro">
                    <span style={{ color: 'white' }}>Hii,</span>
                    <span className="normal"> I'm </span>
                    <span className="animated-name">Farhan...</span>
                </h1>

                <h2><span className="gradient-text">Full-Stack Developer</span></h2>
                <p className="description">
                    Skilled in building end-to-end web applications using React.js, Node.js, MongoDB, and Express.js. I turn ideas into fast, responsive, and scalable solutions with clean code and creative thinking. Currently working at Tech Mahindra, solving real-world problems through tech. Let’s create something impactful!
                </p>
                <div className="hero-buttons">
                    <button className="btn download-btn">My Projects</button>
                    <a href="/FarhanCV.pdf" download className="btn download-btn">
                        Download CV
                    </a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/farhan00079" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/farhan-alam-35972922b/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/farhan_____alam/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

            </div>

            <div className="hero-right">
                <div className="image-container">
                    <img src={profileImg} alt="Profile" />
                </div>
            </div>

            <div className="scroll-down">
                <span></span>
            </div>
        </section>
    );
};

export default Hero;
