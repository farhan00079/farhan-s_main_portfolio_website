import React from "react";
import "./Service.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">
        Things I do with code, passion, and a bit of caffeine ☕
      </p>

      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3 className="service-title">Full Stack Development</h3>
          <p className="service-description">
            Building scalable and responsive websites using MERN stack and other modern technologies.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3 className="service-title">UI/UX Design</h3>
          <p className="service-description">
            Designing intuitive and visually appealing interfaces that elevate user experience.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3 className="service-title">App Design</h3>
          <p className="service-description">
Crafting visually appealing and user-centric mobile and web app designs that combine modern aesthetics with seamless usability.          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🚀</div>
          <h3 className="service-title">Project Deployment</h3>
          <p className="service-description">
            Deploying and managing web applications with CI/CD tools and cloud services like Vercel.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
🖥️</div>
          <h3 className="service-title">Responsive Web Design</h3>
          <p className="service-description">
Building mobile-friendly and cross-platform websites that work seamlessly on all devices.          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">☁️</div>
          <h3 className="service-title">API & Database Integration</h3>
          <p className="service-description">
Integrating RESTful APIs and managing databases (MongoDB, MySQL) for smooth data flow and performance.          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
