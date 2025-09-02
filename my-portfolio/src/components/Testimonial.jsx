import React, { useState } from "react";
import "./Testimonial.css";
import img1 from "../assets/user1.jpg"; // Add your image in /assets folder

const testimonials = [
  {
    text: "Sara did an amazing job designing a user-friendly and intuitive experience for our project. Her attention to detail and creativity made a huge difference!",
    name: "Huda Samer",
    role: "CEO",
    image: "https://assets.aboutamazon.com/dims4/default/ed553e7/2147483647/strip/false/crop/4108x2304+0+0/resize/1486x833!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F36%2F59%2Feba4adcc4f88a972b5639ed1dde0%2Fadobestock-712831308.jpeg",
  },
  {
    text: "Farhan is an exceptional developer with a futuristic design mindset. Our collaboration was smooth, and the results were beyond expectations.",
    name: "Rahul Mehta",
    role: "CTO",
    image: img1,
  },
  {
    text: "Creative, dedicated, and skilled! Loved working with him. Would definitely recommend for modern UI projects.",
    name: "Aisha Khan",
    role: "Product Manager",
    image: img1,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-container" id="reviews"> {/* ✅ id for smooth scroll */}
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === current ? "active" : "inactive"
            }`}
          >
            <p className="quote">“</p>
            <p className="testimonial-text">{t.text}</p>
            <div className="profile">
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <button onClick={prevSlide} className="nav-btn">&larr;</button>
        <div className="dots">
          {testimonials.map((_, idx) => (
            <span key={idx} className={idx === current ? "dot active-dot" : "dot"}></span>
          ))}
        </div>
        <button onClick={nextSlide} className="nav-btn">&rarr;</button>
      </div>
    </section>
  );
};

export default Testimonial;
