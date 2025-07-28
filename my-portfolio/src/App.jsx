import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Service from './components/Service';
import Project from './components/Project';

const App = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Service />
      <Project />
      
    </div>
  );
};

export default App;
