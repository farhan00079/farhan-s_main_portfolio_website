import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Contact</h1>

      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>✨ Let’s Create Something Amazing Together</h2>
          <p>
            Got an idea or project in mind? I’d love to hear from you. Fill in the form
            and let’s start building something impactful!
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Enter your message" rows="5" required></textarea>
            </div>

            <button type="submit" className="neon-btn">🚀 Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
