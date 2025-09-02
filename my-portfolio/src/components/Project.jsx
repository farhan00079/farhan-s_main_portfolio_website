import React from 'react';
import './Project.css'; // Updated CSS

const Project = () => {
  const projectData = [
    {
      image: "https://assets.aboutamazon.com/dims4/default/ed553e7/2147483647/strip/false/crop/4108x2304+0+0/resize/1486x833!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F36%2F59%2Feba4adcc4f88a972b5639ed1dde0%2Fadobestock-712831308.jpeg",
      title: "Full Stack Web App",
      description: "Built using MERN Stack with authentication and dashboard.",
    },
    {
      image: "https://magazine.alumni.ubc.ca/sites/default/files/styles/max_1300x1300/public/2023-09/AIart-1920x1080.jpg?itok=i4Yw51WT",
      title: "UI/UX Clone",
      description: "Modern UI clone using Figma to code approach.",
    },
    {
      image: "https://img.freepik.com/premium-photo/ai-human-technology-background_1409-5588.jpg",
      title: "Portfolio Website",
      description: "Animated dark-themed portfolio with glowing UI.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJnnE2CT0_E5Al8R9lo4lWH5piOpco-O3Zg&s",
      title: "Deploy Project",
      description: "CI/CD integration & Vercel deployment with custom domain.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s",
      title: "Admin Panel",
      description: "Role-based Admin dashboard for eCommerce project.",
    },
  ];

  return (
    <section className="project-section" id="projects"> {/* ✅ Add id for smooth scroll */}
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some of my works built with love 💖</p>

      <div className="project-slider">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
