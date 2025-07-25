import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


const App = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      
    </div>
  );
};

export default App;
