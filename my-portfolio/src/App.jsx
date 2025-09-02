import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Service from './components/Service';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
// import ThanksPage from './components/ThanksPage';

const App = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
      {/* <ThanksPage /> */}
    </div>
  );
};

export default App;
