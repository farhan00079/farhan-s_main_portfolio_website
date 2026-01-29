import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home';
import Shop from './components/Shop';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Map from './components/Map';

const App = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<Map />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
