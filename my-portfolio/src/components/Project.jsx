import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Amaksora App",
    type: "App Design",
    description:
      "Creating intuitive and visually appealing designs that enhance user experience.",
    image: "https://via.placeholder.com/300x200", // Replace with real image
  },
  {
    title: "Homy App",
    type: "App Design",
    description:
      "Creating intuitive and visually appealing designs that enhance user experience.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "B-Roll Media",
    type: "Web Design",
    description:
      "Designing intuitive and visually engaging websites that elevate user experience.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Discover the projects that showcase my passion for design and innovation
      </p>

      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <span className="project-type">{proj.type}</span>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="see-all-container">
        <button className="see-all-btn">See All</button>
      </div>
    </section>
  );
};

export default Projects;
