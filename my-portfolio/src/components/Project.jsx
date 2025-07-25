import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Smart AI Interview Trainer',
    description: 'Creating an AI-powered job readiness tool with realistic interview simulations.',
    tag: 'AI Project',
    image: '/images/ai-trainer.png'
  },
  {
    title: 'Recipe Generator Bot',
    description: 'Built with Rasa and Python, this bot generates custom recipes based on ingredients.',
    tag: 'Python Project',
    image: '/images/recipe-bot.png'
  },
  {
    title: 'MERN Portfolio Website',
    description: 'A responsive and animated personal portfolio website using the MERN stack.',
    tag: 'Web Design',
    image: '/images/portfolio-site.png'
  },
  {
    title: 'Snake Game in Java',
    description: 'A fun classic snake game built using Java Swing.',
    tag: 'Java Game',
    image: '/images/snake-game.png'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        Discover the projects that showcase my passion for design and development.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <span className="project-tag">{project.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
