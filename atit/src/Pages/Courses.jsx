import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar'
// import Artificial from '../Courses-pages/Datascience/Artificial'
import Footer from '../Components/Footer'
import "../css/Courses.css"
import ContactForm from '../Components/ContactForm';
import LeftBar from '../Components/LeftBar';
import Rocket from '../Components/Rocket';
import { Link } from 'react-router-dom'
import { domainDatas } from './CoursesDomain';

const Courses = () => {
  useEffect(() => {
    const handleNavLinkClick = () => {
      AOS.refresh();
    };

    
console.log(domainDatas);
    // Assuming you have a similar HTML structure and class names in your React component
    const navLinks = document.querySelectorAll('.nav-pills .nav-link');

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      navLinks.forEach((navLink) => {
        navLink.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);
  const courseList = sessionStorage.getItem('courseList');
  console.log(courseList);
  const [activeTab, setActiveTab] = useState(courseList || 'Testing');

  useEffect(() => {
    // Function to handle storage changes
    const handleStorageChange = (event) => {
     
      if (event.key === 'courseList') {
        // Update the state with the new value from sessionStorage
        setActiveTab(event.newValue);
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='course'>
      {/* <Navbar /> */}
      {/* {Head topic} */}
      <div>
        <section
          style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
          className ="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white overflow-hidden"
        >
          <div className ="container z-3 text-center">
            <div
              className ="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row"
            >
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className ="primary-header"
                >
                  Our <span className ="primary-color">Courses </span>
                </h1>
                <p
                  className ="text-light fs-6 text-capitalize fw-light"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Navigate Your Career Path With Precision Through Our Comprehensive IT Courses, Paving The Way For Success In The Dynamic World Of Technology.
                  To Help You Obtain Your Dream Job In IT Sector.
                </p>
                <nav
                  data-aos="fade-up"
                  data-aos-duration="800"
                  style={{
                    '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")'
                  }}

                  aria-label="breadcrumb"
                >
                  <ol className ="breadcrumb justify-content-center">
                    <li className ="breadcrumb-item text-primary"><Link to="/">Home</Link></li>
                    <li
                      className ="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                     Domains
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* all group */}
      <div className ="container course" id='domains'>
        <section className ="pap-card">
          <ul className ="nav nav-pills mb-5 text-center justify-content-md-evenly justify-content-center my-5 text-capitalize p-10 m-0 w-100"
            id="pills-tab" role="tablist ">
            {/* <div className ="col-12 col-md d-flex justify-content-center">
              <li  className="nav-item py-1 w-100 d-flex align-items-center justify-content-center" data-aos="fade-left"
                data-aos-duration="500" role="presentation">
                <button
                  className={`nav-link col-4 col-md-12 border pap-card py-2 px-5 bg-primary text-white ${activeTab === 'All' ? 'active' : ''}`}
                   id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-All" type="button"
                  role="tab" aria-controls="pills-All" aria-selected="true"
                  onClick={() => handleTabClick('All')}
                  >All
                  
                </button>
              </li>
            </div> */}
            <div className ="col-6 col-md justify-content-center">
              <li className ="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="700" role="presentation">
               <button
            className={`nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white ${activeTab === 'Testing' ? 'active' : ''}`}
            id="pills-Testing-tab" data-bs-toggle="pill" data-bs-target="#pills-Testing"
            type="button" role="tab" aria-controls="pills-Testing" aria-selected={activeTab === 'Testing'}
            onClick={() => handleTabClick('Testing')}
          >
            Testing
          </button>
              </li>
            </div>
            <div className ="col-6 col-md justify-content-center">
              <li className ="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="900" role="presentation">
               <button
            className={`nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white ${activeTab === 'Development' ? 'active' : ''}`}
            id="pills-Development-tab" data-bs-toggle="pill" data-bs-target="#pills-Development"
            type="button" role="tab" aria-controls="pills-Development" aria-selected={activeTab === 'Development'}
            onClick={() => handleTabClick('Development')}
          >
            Development
          </button>

              </li>
            </div>
            <div className ="col-6 col-md justify-content-center">
              <li className ="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="1100" role="presentation">
               <button
            className={`nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white ${activeTab === 'DevOps' ? 'active' : ''}`}
            id="pills-Devops-tab" data-bs-toggle="pill" data-bs-target="#pills-Devops"
            type="button" role="tab" aria-controls="pills-Devops" aria-selected={activeTab === 'DevOps'}
            onClick={() => handleTabClick('DevOps')}
          >
            DevOps
          </button>
              </li>
            </div>
            <div className ="col-6 col-md">
              <li className ="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="1300" role="presentation">
               <button
            className={`nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white ${activeTab === 'AI' ? 'active' : ''}`}
            id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science"
            type="button" role="tab" aria-controls="pills-science" aria-selected={activeTab === 'AI'}
            onClick={() => handleTabClick('AI')}
          >
            AI
          </button>
              </li>
            </div>
          </ul>
          <div className ="tab-content pb-5" id="pills-tabContent ">
            
            {/* <!-- TESTING SECTIONS --> */}
            <div className ={`tab-pane fade ${activeTab === 'Testing' ? 'show active' : ''}`} id="pills-Testing" role="tabpanel" aria-labelledby="pills-Testing-tab"
              tabIndex="0">
              <div className ="container-fluid mb-5">
                <h2 className='primary-color mb-3' data-aos="fade-up" data-aos-duration="600">Java</h2>
                <div className ="row g-5">
                  <div className ="col-md-6 col-lg-4">
                    <Link to="cucumber"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card1 text-white text-center mb-0">Cucumber</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">1000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className ="col-md-6 col-lg-4">
                    <Link to="Selenium"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card2 text-white text-center mb-0">selenium</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">13000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className ="col-md-6 col-lg-4">
                    <Link to="testNG"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card7 text-white text-center mb-0">TestNG</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">13000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className ="container-fluid mb-5">
                <h2 className='primary-color mb-3' data-aos="fade-up" data-aos-duration="600">Python</h2>
                <div className ="row g-5">
                  <div className ="col-md-6 col-lg-4">
                    <Link to="Pytest"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card3 text-white text-center mb-0">Pytest</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">1000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className ="col-md-6 col-lg-4">
                    <Link to="Playwright"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card4 text-white text-center mb-0">PlayWright</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">13000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className ="col-md-6 col-lg-4">
                    <Link to="doctest"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card9 text-white text-center mb-0">Doctest</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">13000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className ="container-fluid">
                <h2 className='primary-color mb-3' data-aos="fade-up" data-aos-duration="600">Java Script</h2>
                <div className ="row g-5">
                  <div className ="col-md-6 col-lg-4">
                    <Link to="jsplaywright"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card5 text-white text-center mb-0">JS PlayWright</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">1000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className ="col-md-6 col-lg-4">
                    <Link to="tsplaywright"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card6 text-white text-center mb-0">TS PlayWright</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">13000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- DEVELOPMENT SECTIONS --> */}
            <div className ={`tab-pane fade ${activeTab === 'Development' ? 'show active' : ''}`} id="pills-Development" role="tabpanel"
              aria-labelledby="pills-Development-tab" tabIndex="0">
              <div className ="row g-5">
                <div className ="col-md-6 col-lg-4">
                  <Link to="mean"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card12 text-white text-center mb-0">MEAN Stack</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">300+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 40 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className ="col-md-6 col-lg-4">
                  <Link to="mern"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card7 text-white text-center mb-0">MERN Stack</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">800+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 50 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- DATASCIENCE SECTIONS --> */}
            <div className ={`tab-pane fade ${activeTab === 'AI' ? 'show active' : ''}`} id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab"
              tabIndex="0">
              <div className ="row g-5">
                <div className ="col-md-6 col-lg-4">
                  <Link to="artificial"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card22 text-white text-center mb-0">Artificial-Intelligence</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">800+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className ="col-md-6 col-lg-4">
                  <Link to="datascience"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card10 text-white text-center mb-0">Data Science</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">800+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 14 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className ="col-md-6 col-lg-4">
                  <Link to="deeplearning"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card18 text-white text-center mb-0">Deep Learning</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">1000+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- DEVOPS SECTIONS --> */}
            <div className ={`tab-pane fade ${activeTab === 'DevOps' ? 'show active' : ''}`} id="pills-Devops" role="tabpanel" aria-labelledby="pills-Devops-tab"
              tabIndex="0">
              <div className ="row g-5">
                <div className ="col-md-6 col-lg-4">
                  <Link to="devops"
                    className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                    <div className ="w-100 common-card-image">
                      <h4 className ="course-card23 text-white text-center mb-0">DevOps</h4>
                    </div>
                    <div className ="w-100 p-4 common-card-content d-none">
                      <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 className ="mb-4 text-black">2000+ Successful Learners</h6>
                      <div className ="w-100 d-flex align-items-center flex-wrap">
                        <div className ="rating-block">
                          <div className ="rating-star">
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                            <img src="https://assets.testleaf.com/assets/img/star.svg"
                              alt="Rating Icon" />
                          </div>
                          <p className ="m-0 mt-2 text-secondary">EARN UPTO 64 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className ="col-md-6 col-lg-4">
                    <Link to="docker"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card13 text-white text-center mb-0">Docker</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">3000+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                <div className ="col-md-6 col-lg-4">
                    <Link to="awsservice"
                      className ="card pap-card overflow-hidden border-0 shadow1 d-block" data-aos="fade-up" data-aos-duration="600">
                      <div className ="w-100 common-card-image">
                        <h4 className ="course-card17 text-white text-center mb-0">AWS-Service</h4>
                      </div>
                      <div className ="w-100 p-4 common-card-content d-none">
                        <h6 className ="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 className ="mb-4 text-black">600+ Successful Learners</h6>
                        <div className ="w-100 d-flex align-items-center flex-wrap">
                          <div className ="rating-block">
                            <div className ="rating-star">
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                              <img src="https://assets.testleaf.com/assets/img/star.svg"
                                alt="Rating Icon" />
                            </div>
                            <p className ="m-0 mt-2 text-secondary">EARN UPTO 35 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        {/* footer */}
        <Footer setActiveTab ={setActiveTab} activeTab={activeTab}/>
    </div>
  )
}

export default Courses