import React, { useState, useEffect } from 'react';
import './ThanksPage.css';

function ThanksPage() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className={`thanks-container ${loaded ? 'loaded' : ''}`}>
      <h1>Thanks for<br />watching</h1>
      <p>We appreciate you taking the time to view our content.<br />Your support means everything to us.</p>
      
      <div className="icon-container">
        <div className="icon">👁️</div>
        <div className="icon">👍</div>
        <div className="icon">❤️</div>
      </div>
      
      <p>Stay connected for more updates</p>
      <button className="thanks-button" onClick={() => alert('Thank you for your support!')}>
        Follow Us
      </button>
    </div>
  );
}

export default ThanksPage;