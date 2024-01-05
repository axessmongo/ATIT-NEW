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
import Advancejava from './Courses-pages/Softwaretesting/Advancejava';
import Apirestassured from './Courses-pages/Softwaretesting/Apirestassured';
import Awsservice from './Courses-pages/Softwaretesting/Aws-service';
import Corejava from './Courses-pages/Softwaretesting/Corejava';
import Cucumber from './Courses-pages/Softwaretesting/Cucumber';
import Docker from './Courses-pages/Softwaretesting/Docker';
import Git from './Courses-pages/Softwaretesting/Git';
import Jenkins from './Courses-pages/Softwaretesting/Jenkins';
import Manualtesting from './Courses-pages/Softwaretesting/Manualtesting';
import Apipostman from './Courses-pages/Softwaretesting/Apipostman';
import Dbtesting from './Courses-pages/Softwaretesting/Db-testing';

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
          <Route path='Python' element={<Python />} />
          <Route path='Advancejava' element={<Advancejava />} />
          <Route path='Apipostman' element={<Apipostman />} />
          <Route path='Apirestassured' element={<Apirestassured />} />
          <Route path='Awsservice' element={<Awsservice />} />
          <Route path='Corejava' element={<Corejava />} />
          <Route path='Cucumber' element={<Cucumber />} />
          <Route path='Dbtesting' element={<Dbtesting />} />
          <Route path='Docker' element={<Docker />} />
          <Route path='Git' element={<Git />} />
          <Route path='Python' element={<Jenkins />} />
          <Route path='Manualtesting' element={<Manualtesting />} />
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