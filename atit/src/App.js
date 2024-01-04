import React, { useEffect } from 'react';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init(); 
    
    var mbnew = document.querySelector('.card-img-overlay').offsetHeight + 100;
    document.querySelector('.hero-banner').style.marginBottom = mbnew + 'px';// Initialize AOS when the component mounts
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
