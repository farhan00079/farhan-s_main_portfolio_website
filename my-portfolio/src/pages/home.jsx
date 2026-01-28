import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Map from '../components/Map';
import ThanksPage from '../components/ThanksPage';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
      <Map />
      <ThanksPage />
    </>
  );
};

export default Home;
