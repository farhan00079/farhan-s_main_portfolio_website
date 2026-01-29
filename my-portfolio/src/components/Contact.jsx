import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-card">
        
        {/* Left Section */}
        <div className="contact-info">
          <h2>Let’s Talk 👋</h2>
          <p>
            Have a project in mind or just want to say hi?  
            Fill the form and I’ll get back to you.
          </p>

          <div className="info-item">
            <span>📧</span>
            <p>contact@example.com</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>India</p>
          </div>
        </div>

        {/* Right Section */}
        <form className="contact-form">
          <h3>Contact Form</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;