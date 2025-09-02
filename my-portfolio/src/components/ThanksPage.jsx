import React, { useState, useEffect } from 'react';
import './ThanksPage.css';

const NeonThanksPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(1);

  useEffect(() => {
    setIsVisible(true);
    
    // Create pulsing glow effect
    const interval = setInterval(() => {
      setGlowIntensity(prev => prev === 1 ? 1.2 : 1);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="neon-thanks-container">
      {/* Animated background elements */}
      <div className="neon-background">
        <div className="neon-circle neon-circle-1"></div>
        <div className="neon-circle neon-circle-2"></div>
        <div className="neon-circle neon-circle-3"></div>
        <div className="neon-grid"></div>
      </div>

      {/* Main content */}
      <div className={`neon-content ${isVisible ? 'visible' : ''}`}>
        <div className="glassy-card" style={{ '--glow-intensity': glowIntensity }}>
          <div className="neon-border"></div>
          
          <div className="premium-badge">
            <i className="fas fa-crown"></i> PREMIUM
          </div>
          
          <div className="thanks-icon">
            <i className="fas fa-heart"></i>
          </div>
          
          <h1 className="neon-title">
            <span className="neon-text">Thank You</span>
            <span className="neon-heart">❤</span>
          </h1>
          
          <p className="glassy-text">
            Your time and attention mean the world to me. I truly appreciate you taking 
            the time to explore my work and hope we can create something amazing together.
          </p>
          
          <div className="neon-quotes">
            <div className="quote">
              <i className="fas fa-quote-left"></i>
              <p>Gratitude is the wine for the soul. Go on. Get drunk.</p>
              <i className="fas fa-quote-right"></i>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="neon-btn neon-btn-primary">
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </button>
            <button className="neon-btn neon-btn-secondary">
              <i className="fas fa-star"></i>
              Explore More
            </button>
          </div>
          
          <div className="neon-signature">
            <p>With sincere appreciation,</p>
            <p className="signature-name">Farhan</p>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NeonThanksPage;