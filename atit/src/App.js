import React, { useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import Pap from './Pages/Pay-after-placement';
import EmergingTechnologies from './Blog-page/EmergingTechnologies';
import Exploringlucrative from './Blog-page/Exploring-lucrative';
import Heretheframework from './Blog-page/Career-complete-guide';
import Howtoace from './Blog-page/First-it-job-interview'
import Howtoclearanyprofessional from './Blog-page/Strategy-for-success';
import Howtocraftastellar from './Blog-page/Stellar-resume';
import Introductiontothedynamics from './Blog-page/Dynamics-itjob';
import Lessonsfromthechandrayaan from './Blog-page/Chandrayaan-project';
import Masteringtechnicalinterviews from './Blog-page/Mastering-technical-interviews';
import Theboomingitsector from './Blog-page/Booming-it-sector';
import Theultimateguide from './Blog-page/Ultimate-guide';
import Understandingtheitindustry from './Blog-page/Understanding-the-it-industry';
import Wanttogetahead from './Blog-page/Job-race';
import Whatisthispostabout from './Blog-page/Competitive-Job-Market';
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
import Selenium from './Courses-pages/Softwaretesting/Selenium';
import Maven from './Courses-pages/Softwaretesting/Maven';
import Pageobject from './Courses-pages/Softwaretesting/Pageobject';
import Testng from './Courses-pages/Softwaretesting/testng';
import MainBlog from './Pages/MainBlog';

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
          <Route path='artificial' element={<Artificial />} />
          <Route path='datascience' element={<Datascience/>} />
          <Route path='deeplearning' element={<Deeplearning/>} />
          <Route path='devops' element={<Devops/>} />
          <Route path='java' element={<Java/>} />
          <Route path='mean' element={<Mean />} />
          <Route path='mern' element={<Mern />} />
          <Route path='python' element={<Python />} />
          <Route path='advancejava' element={<Advancejava />} />
          <Route path='apipostman' element={<Apipostman />} />
          <Route path='apirestassured' element={<Apirestassured />} />
          <Route path='awsservice' element={<Awsservice />} />
          <Route path='corejava' element={<Corejava />} />
          <Route path='cucumber' element={<Cucumber />} />
          <Route path='dbtesting' element={<Dbtesting />} />
          <Route path='docker' element={<Docker />} />
          <Route path='git' element={<Git />} />
          <Route path='jenkins' element={<Jenkins />} />
          <Route path='manualtesting' element={<Manualtesting />} />
          <Route path='maven' element={<Maven />} />
          <Route path='pageobject' element={<Pageobject />} />
          <Route path='selenium' element={<Selenium />} />
          <Route path='testng' element={<Testng />} />
        </Route>
        <Route path="/pap" element={<Pap/>}/>
        <Route path="/blog" element={<MainBlog/>}>        
          <Route index element={<Blog />} /> 
          <Route path='emergingtechnologies' element={<EmergingTechnologies/>}/>
          <Route path='exploringlucrative' element={<Exploringlucrative/>}/>
          <Route path='heretheframework' element = {<Heretheframework/>}/>
          <Route path='howtoace' element = {<Howtoace/>}/>
          <Route path='howtoclearanyprofessional' element = {<Howtoclearanyprofessional/>}/>
          <Route path='howtocraftastellar' element = {<Howtocraftastellar/>}/>
          <Route path='introductiontothedynamics' element = {<Introductiontothedynamics/>}/>
          <Route path='lessonsfromthechandrayaan' element = {<Lessonsfromthechandrayaan/>}/>
          <Route path='masteringtechnicalinterviews' element = {<Masteringtechnicalinterviews/>}/>
          <Route path='theboomingitsector' element = {<Theboomingitsector/>}/>
          <Route path='theultimateguide' element = {< Theultimateguide/>}/>
          <Route path='understandingtheitindustry' element = {< Understandingtheitindustry/>}/>
          <Route path='wanttogetahead' element = {<Wanttogetahead/>}/>
          <Route path='whatisthispostabout' element = {<Whatisthispostabout/>}/>
        </Route>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;