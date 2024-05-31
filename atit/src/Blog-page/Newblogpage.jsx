import { React, useEffect } from "react";
import Footer from "../Components/Footer";
import Company from "../Components/Company";
import { Link } from "react-router-dom";
import AOS from "aos";
import Navbar from "../Components/Navbar";

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
                    People like you — 9 min read
                  </p>
                  <p className="secondary-text fw-bold fs-5">
                    Lessons From The Chandrayaan 3 Project
                  </p>{" "}
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
                People like you — 11 min read
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
              <div className="row">
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
                  <p className="secondary-text fw-bold fs-5">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
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
                  <p className="secondary-text fw-bold fs-5">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
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
                  <p className="secondary-text fw-bold fs-5">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
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
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">Along our way — 9 min read </p>
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
                 height={"250px"} width={"250px"}/>
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
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
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                In Today's Competitive Job Market, Interviews Play A Crucial Role In Determining One's Career Success.
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
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={"/blog/careerCompleteGuide"}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3" data-aos="fade-up"
                data-aos-duration="600">
                  <Link to="/blog/competitiveJobMarket">
                <img
                  src="../assets/img/Blog/Blog10.png"
                  alt=""
                />
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
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
                </Link>
                <p className="py-3 secondary-text fw-bold fs-4 mb-0 ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                here Is A Fact That Every ‘Computer’ Guy Would Agree Upon.“Programming Languages Are Essential Tools For Software Developers.”
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
                </Link>
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">Imagine your website — 8 min read</p>
                <p className="secondary-text">About page examples for different team structures</p>
                <Link to={"/blog/strategyForSuccess"}>Read more</Link>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="600">
                <Link to={"/blog/masteringTechnicalInterviews"}>
                <img
                  src="../assets/img/Blog/Blog12.png"
                  alt=""
                />
                </Link>
                <p className="fw-bold fs-5 secondary-text py-3 mb-0">Imagine your website — 8 min read</p>
                <p className="secondary-text">About page examples for different team structures</p>
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
                </Link>
              <p className="py-3 secondary-text fw-bold fs-5 mb-0">
                Build up your website — 12 min read
              </p>
              <h6 className="mt-2">
                How to sell your crafts online using WordPress{" "}
              </h6>
              <p className="secondary-text">
                Showcasing and selling online your creative products might look
                like a danger zone you are about to enter. We help you be safe
                and shine.
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
                </Link>
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">Imagine your website — 8 min read</p>
                <p className="secondary-text">About page examples for different team structures</p>
                <Link to={"/blog/firstItjobInterview"}>Read more</Link>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="600">
                <Link to={"/blog/boomingItSector"}>
                <img
                  src="../assets/img/Blog/Blog9.png"
                  alt=""
                />
                </Link>
                <p className="fw-bold fs-5 py-3 secondary-text mb-0">Imagine your website — 8 min read</p>
                <p className="secondary-text">About page examples for different team structures</p>
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
