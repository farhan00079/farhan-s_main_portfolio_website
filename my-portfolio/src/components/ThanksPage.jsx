import React, { useState, useEffect } from 'react';
import './ThanksPage.css';

const NeonThanksPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(1);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev === 1 ? 1.3 : 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="thanks-container">
      {/* Background glowing elements */}
      <div className="thanks-background">
        <div className="thanks-circle circle-1"></div>
        <div className="thanks-circle circle-2"></div>
        <div className="thanks-circle circle-3"></div>
      </div>

      {/* Main Card */}
      <div className={`thanks-content ${isVisible ? 'visible' : ''}`}>
        <div className="thanks-card" style={{ '--glow-intensity': glowIntensity }}>
          
          <h1 className="thanks-title">
            <span className="highlight-yellow">Thank You</span>
            <span className="highlight-pink"> ❤</span>
          </h1>

          <p className="thanks-text">
            Thanks a ton for visiting my portfolio 💜  
            Your time and attention really mean a lot. Let’s connect and build something impactful together!
          </p>

          {/* Action Buttons */}
          <div className="thanks-buttons">
            <button className="btn-glow btn-primary">🚀 Get In Touch</button>
            <button className="btn-glow btn-secondary">✨ Explore More</button>
          </div>

          <div className="thanks-signature">
            <p>With sincere appreciation,</p>
            <p className="signature-name">Farhan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonThanksPage;
