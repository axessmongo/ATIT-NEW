import { React, useEffect } from "react";
import Footer from "../Components/Footer";
import Company from "../Components/Company";
import { Link } from "react-router-dom";
import AOS from "aos";
import Navbar from "../Components/Navbar";
import "../css/blognew.css";

function Newblogpage() {
  useEffect(() => {
    const handleNavLinkClick = () => {
      AOS.refresh();
    };

    // Assuming you have a similar HTML structure and class names in your React component
    const navLinks = document.querySelectorAll(".nav-pills .nav-link");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <div className="newBlog">
      <div>
        <div>
          <Navbar/>
          {/* blog banner */}
          <section
            className="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5"
            style={{
              background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)",
            }}
          >
            <div className="container z-3 text-center">
              <div className="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
                <div>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="primary-header"
                  >
                    <span className="primary-color">Blog</span>
                  </h1>
                  <p
                    className="text-light fs-6 text-capitalize fw-light"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Embarking on the journey from academia to the professional
                    world is an exhilarating experience, marked by the
                    transition from classrooms to boardrooms. We will explore
                    the significance of placement and training, providing
                    valuable insights for both students and organizations.
                  </p>
                  <nav
                    data-aos="fade-up"
                    data-aos-duration="800"
                    style={{
                      "--bs-breadcrumb-divider":
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
                    }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active text-white"
                        aria-current="page"
                      >
                        Blog
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-11 col-xl-10 mx-auto">
          <div className="row">
            <div className="col-md-7 col-xxl-8">
            <Link to={"/blog/EmergingTechnologies"}> 
              <img data-aos="fade-up"
                data-aos-duration="500"
                src="../assets/img/Blog/Blog4.png"
                alt=""
              />
              </Link>
              <p className="secondary-text py-3 mb-0" data-aos="fade-up"
                data-aos-duration="600">People like you — 9 min</p>
              <Link to={"/blog/EmergingTechnologies"} className="text-dark"> 
              <p className="display-4 fw-bold mb-0" data-aos="fade-up"
                data-aos-duration="600">
                read emerging technologies that lasts and tells a story{" "}
              </p>
              </Link>
              <p className="pt-3 secondary-text" data-aos="fade-up"
                data-aos-duration="600">
                Discover the story of a small furniture design where each piece
                has a story to tell. Read More
              </p>
              <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                  <Link to={"/blog/chandrayaanProject"}> 
                  <img
                    src="../assets/img/Blog/Blog2.png"
                    alt=""
                    className="img-fluid"
                  />
                  </Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                  <p className="secondary-text fw-bold fs-5">
                      The Chandrayaan 3 Project — 9 min read
                  </p>
                  <Link to={"/blog/chandrayaanProject"}>
                  <p className="secondary-text fw-bold fs-5">
                    Lessons From The Chandrayaan 3 Project
                  </p></Link>{" "}
                  <p className="secondary-text">
                    India (On 23rd August 2023) Achieved A
                    Historic Milestone By Successfully Landing Their Chandrayaan 3
                    Lunar Lander On The Moon's Surface.
                  </p>
                  <Link to={"/blog/chandrayaanProject"}> Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xxl-4">
              <Link to={"/blog/exploringlucrative"}>
              <img data-aos="fade-up"
                data-aos-duration="600"
                src="../assets/img/Blog/Blog7.png"
                className="mt-1"
                alt=""
              />
              </Link>
              <p className="fw-bold fs-5 secondary-text py-3 mb-0" data-aos="fade-up"
                data-aos-duration="600">
                IT Job Opportunities — 11 min read
              </p>
              <Link to={"/blog/exploringlucrative"} className="text-dark">
              <h5 className="secondary-text fw-bold fs-5 mb-3" data-aos="fade-up"
                data-aos-duration="600">
                Exploring Lucrative IT Job Opportunities in India
              </h5>
              </Link>
              <p className="secondary-text" data-aos="fade-up"
                data-aos-duration="600">
                India's ever-growing IT industry offers many job opportunities for tech enthusiasts.
                Among the most sought-after skills are Python, Node.js, React.js, and JavaScript.
              </p>
              <Link  data-aos="fade-up"
                data-aos-duration="600" to={"/blog/exploringlucrative"}>Read More</Link>
              <div className="row mt-3">
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                  <Link to={"/blog/automatedTesting"}>
              <img data-aos="fade-up"
                data-aos-duration="600"
                src="../assets/img/Blog/Automation-Testing.jpg"
                className="mt-1"
                alt=""
              />
              </Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                    <Link to={"/blog/automatedTesting"}>
                  <p className="secondary-text fw-bold fs-5">
                    Automated Testing — 11 min read
                  </p></Link>
                  <p className="secondary-text">
                     Automated Testing and Why You Should Use It.
                  </p>
                  <Link to={"/blog/automatedTesting"}> Read More</Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                  <Link to={"/blog/devopstestautomation"}>
              <img data-aos="fade-up"
                data-aos-duration="600"
                src="../assets/img/Blog/Devopstesting.jpg"
                className="mt-1"
                alt=""
              />
              </Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                     <Link to={"/blog/devopstestautomation"}>
                  <p className="secondary-text fw-bold fs-5">
                      DevOps Test Automation — 11 min read
                  </p></Link>
                  <p className="secondary-text">
                    How DevOps Test Automation Improves Software Reliability in IT Industry
                  </p>
                  <Link to={"/blog/devopstestautomation"}> Read More</Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                  <Link to={"/blog/manualtestingautomationtesting"}>
              <img data-aos="fade-up"
                data-aos-duration="600"
                src="../assets/img/Blog/manualtesting&autmationtesting.jpg"
                className="mt-1"
                alt=""
              />
              </Link>
                </div>
                <div className="col-md-6" data-aos="fade-up"
                  data-aos-duration="600">
                    <Link to={"/blog/manualtestingautomationtesting"}>
                  <p className="secondary-text fw-bold fs-5">
                    Manual Testing — 11 min read
                  </p></Link>
                  <p className="secondary-text">
                    Manual Testing and Why You Should Use It.
                  </p>
                  <Link to={"/blog/manualtestingautomationtesting"}> Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-4" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/stellarResume"}>
                <img
                  src="../assets/img/Blog/Blog9.png"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">To Craft A Stellar Resume — 9 min read </p>
                
                </Link>
                <p className="secondary-text">
                  Use Simple, Standard Font Like Arial Or Times New Roman In Size 10-12 Points.
                </p>
                <p className="secondary-text">
                  Bold And Increase The Size Slightly For Your Name And Each Section Header. Include Clear Headings Like Summary, Education, Experience, Skills, Etc.
                </p>
                <Link to={"/blog/stellarResume"}>Read more</Link>
              </div>
              <div className="col-md-4" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/understandingTheItIndustry"}>
                <img
                  src="../assets/img/Blog/Blog1.jpg"
                  alt=""
                  height={"290px"} width={"290px"}/>
                
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">Understanding The IT Industry — 9 min read </p>
                </Link>
                <p className="secondary-text">
                  Before Diving Into The Job Search, It's Crucial To Understand The IT Industry's Ins And Outs.
                </p>
                <p className="secondary-text">
                The IT Industry Comprises Various Domains, Such As Software Development, Data Analytics, Cloud Computing, Cybersecurity, And Artificial Intelligence. 
                </p>
                <Link to={"/blog/understandingTheItIndustry"}>Read more</Link>
              </div>
              <div className="col-md-4" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/ultimateGuide"}>
                <img
                  src="../assets/img/Blog/Blog10.png"
                  alt=""
                />
                
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">Ultimate Guide To Power Words And Phrases — 9 min read </p>
                </Link>
                {/* <p className="secondary-text">
                Let Us Take A Brief Overview Of The Most In-Demand Programming Languages In 2024
                </p> */}
                <p className="secondary-text">
                Utilizing Power Words And Phrases Can Significantly Enhance Your Interview Performance. Here Are Some Examples: "I'm Open To Learning And Growing". Demonstrate Your Willingness To Acquire New Skills And Embrace Challenges.
                </p>
                <Link to={"/blog/ultimateGuide"}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/careerCompleteGuide"}>
                <img
                  src="../assets/img/Blog/Blog6.png"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">The Booming IT Sector — 9 min read </p>
                </Link>
                <p className="secondary-text">
                  The Booming IT Sector In India And Its Employment Opportunities.
                </p>
                <p className="secondary-text">
                  In Today's Rapidly Changing World, The Information Technology (IT) Sector Plays A Crucial Role In Driving Economic Growth, And India Stands At The Forefront Of This Revolution.
                  
                </p> <p>  </p>
                <Link to={"/blog/careerCompleteGuide"}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to="/blog/competitiveJobMarket">
                <img
                  src="../assets/img/Blog/Blog10.png"
                  alt=""
                />
                
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">The Competitive Job Market — 9 min read </p>
                </Link>
                <p className="secondary-text">
                The Job Market In 2023 And Beyond Is Going To Be Highly Competitive.
                </p>
                <p className="secondary-text">
                In Today's Competitive Job Market, It Can Be Challenging To Stand Out From The Crowd And Catch The Attention Of Recruiters.
                </p>
                <Link to={"/blog/competitiveJobMarket"}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/jobRace"}>
                <img
                  src="../assets/img/Blog/Blog3.png"
                  alt=""
                />
                
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">The Job Race — 9 min read </p>
                </Link>
                <p className="secondary-text">
                  Programming Languages Are Essential Tools For Software Developers.
                </p>
                <p className="secondary-text">
                  They Allow Us, The Developers, To Create Software Applications That Can Run On Various Operating Systems And Devices.
                </p>
                <Link to={"/blog/jobRace"}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 pt-4">
            <div className="col-md-3">
              <div data-aos="fade-up"
                data-aos-duration="600">
                  <Link to={"/blog/strategyForSuccess"}>
                <img
                  src="../assets/img/Blog/Blog11.png"
                  alt=""
                />
                
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">A Proven Strategy for Success — 8 min read</p>
                </Link>
                <p className="secondary-text">In Today's Competitive World, Professional Exams Have Become A Vital Gateway To Achieving Career Goals And Gaining A Competitive Edge In The Job Market. </p>
                <Link to={"/blog/strategyForSuccess"}>Read more</Link>
              </div>
              <div data-aos="fade-up" className="mt-3"
                data-aos-duration="600">
                <Link to={"/blog/masteringTechnicalInterviews"}>
                <img
                  src="../assets/img/Blog/Blog12.png"
                  alt=""
                />
                
                <p className="fw-bold fs-5 secondary-text py-3 mb-0">Mastering Technical Interviews — 8 min read</p>
                </Link>
                <p className="secondary-text">A Guide For College Freshers, In This Blog Post, We'll Provide You With Valuable Insights And Practical Tips To Help You Clear Technical Interviews With Confidence And Showcase Your Skills Effectively.</p>
                <Link to={"/blog/masteringTechnicalInterviews"}>Read more</Link>   
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up"
                data-aos-duration="600">
              <Link to={"/blog/dynamicsItJob"}>
                <img
                  src="../assets/img/Blog/Blog5.png"
                  alt=""
                />
          
              <p className="py-3 secondary-text fw-bold fs-5 mb-0">
                 The Dynamics Of The IT Job Market — 12 min read
              </p></Link>
              {/* <h6 className="mt-2">
                How to sell your crafts online using WordPress{" "}
              </h6> */}
              <p className="secondary-text">
              The IT Industry Has Witnessed Rapid Growth In Recent Years, With New Technologies Constantly Emerging And Revolutionising Various Sectors. As A Result, The Demand For Skilled IT Professionals Has Skyrocketed.
              </p>
              <Link to={"/blog/dynamicsItJob"}>Read more</Link>

            </div>
            <div className="col-md-3">
              <div data-aos="fade-up"
                data-aos-duration="600">
                <Link to={"/blog/firstItjobInterview"}>
                <img
                  src="../assets/img/Blog/Blog8.png"
                  alt=""
                />                
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">How To Ace Your First IT Job Interview — 8 min read</p>
                </Link>
                <p className="secondary-text"> In This Blog Post, We're Going To Simulate A Q&A Session Between An Interviewer And A Candidate, Focusing On Essential Tips And Insights That Will Help You Ace Your IT Job Interview.</p>
                <Link to={"/blog/firstItjobInterview"}>Read more</Link>
              </div>
              <div data-aos="fade-up" className="mt-3"
                data-aos-duration="600">
                <Link to={"/blog/boomingItSector"}>
                <img
                  src="../assets/img/Blog/Blog9.png"
                  alt=""
                />                
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">The Booming IT Sector In India — 8 min read</p>
                </Link>
                <p className="secondary-text"> The Information Technology (IT) Sector Plays A Crucial Role In Driving Economic Growth, And India Stands At The Forefront Of This Revolution.</p>
                <Link to={"/blog/boomingItSector"}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Newblogpage;
