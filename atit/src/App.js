import React, { useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Pap from './Pages/Pap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pap" element={<Pap/>}/>
        <Route path='/Courses' element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
