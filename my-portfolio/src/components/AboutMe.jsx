import React from 'react';
import './AboutMe.css';
import avatar from '../assets/avatar.jpg'; // Replace with your illustrated avatar

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-left">
          <div className="avatar-glow">
            <img src={avatar} alt="Farhan Avatar" className="about-avatar" />
          </div>
        </div>
        <div className="about-right">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hello! I'm <strong>Farhan Alam</strong>, a passionate <strong>Full Stack Developer</strong>
            currently working at <strong>Tech Mahindra</strong>. I love building user-centric web apps
            with clean UI and efficient backend architecture.
            <br /><br />
            I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js),
            and have experience designing responsive UIs, managing APIs, and deploying scalable apps.
            I'm also skilled in version control (Git), REST APIs, and cloud platforms like Render.
            <br /><br />
            I'm always exploring new tech, solving problems, and building projects that make a difference.
          </p>
          <div className="quote-box">
            <p>🚀 I believe in writing clean code and building meaningful digital experiences.</p>
          </div>
          <div className="skills">
            <p className="skills-title">Skills</p>
            <div className="skills-icons">
              <span>💻 HTML</span>
              <span>🎨 CSS</span>
              <span>⚛️ React</span>
              <span>🟩 Node.js</span>
              <span>🌐 Express</span>
              <span>🍃 MongoDB</span>
              <span>🧠 Git</span>
              <span>☁️ Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
