import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';
import ThanksPage from '../components/ThanksPage';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Service />
      <Project />
      <Testimonial />
      <ThanksPage />
      <Chatbot />
    </>
  );
};

export default Home;
