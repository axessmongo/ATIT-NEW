import React, { useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import Pap from './Pages/Pay-after-placement';
import EmergingTechnologies from './Blog-page/EmergingTechnologies';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Link, Route, Routes } from 'react-router-dom';
import Artificial from './Courses-pages/Datascience/Artificial';
import Privacy from './Pages/Privacy-Policy';
import NoPage from './Pages/NoPage';
import MainCourse from './Pages/MainCourse';
import Datascience from './Courses-pages/Datascience/Datascience';
import Deeplearning from './Courses-pages/Datascience/Deeplearning';
import Devops from './Courses-pages/Devops/Devops';
import Java from './Courses-pages/Softwaredeveloment/Java';
import Mean from './Courses-pages/Softwaredeveloment/Mean';
import Mern from './Courses-pages/Softwaredeveloment/Mern';
import Python from './Courses-pages/Softwaredeveloment/Python';
import Advancedjava from './Courses-pages/Softwaretesting/Advancejava';
import ApiPostman from './Courses-pages/Softwaretesting/Api-postman';
import Apirestassured from './Courses-pages/Softwaretesting/Apirestassured';
import AwsService from './Courses-pages/Softwaretesting/Aws-service';
import Corejava from 

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
        <Route path="/courses" element={<MainCourse />} >
          <Route index element={<Courses />} />
          <Route path='Artificial' element={<Artificial />} />
          <Route path='Datascience' element={<Datascience/>} />
          <Route path='Deeplearning' element={<Deeplearning/>} />
          <Route path='Devops' element={<Devops/>} />
          <Route path='Java' element={<Java/>} />
          <Route path='Mean' element={<Mean />} />
          <Route path='Mern' element={<Mern />} />

        </Route>
        <Route path="/Pap" element={<Pap/>}/>
        <Route path="/Artificial" element={<Artificial/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/EmergingTechnologies' element={<EmergingTechnologies/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;