import React from 'react'
import Navbar from '../Components/Navbar'
import Company from '../Components/Company'
import Footer from '../Components/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <div>
        <section class="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white" style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
        >
          <div class="container z-3 text-center">
            <div class="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
              <div>
                <h1 data-aos="fade-up" data-aos-duration="500" class="primary-header">
                  About <span class="primary-color">Us</span>
                </h1>
                <p class="text-light fs-6 text-capitalize fw-light" data-aos="fade-up" data-aos-duration="700">
                  embrace everyone's journey, from novices launching careers to experts
                  elevating skills.</p>
                <nav data-aos="fade-up" data-aos-duration="800"
                  // style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                  aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active text-white" aria-current="page">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* head */}
      <div>
        <div className="container my-5">
          <section className="atit-box">
            <div className="container">
              <div className="card-container">
                <div className="atit-card row">
                  <div className="atit-card-1 col-md-3 active" data-aos="fade-up" data-aos-duration="600">
                    <div className="slide-service-item">
                      <div className="glyph">
                        <i className="fa-solid fa-rocket fa-lg"></i>
                      </div>
                      <h3>Dedications</h3>
                      <p>We are dedicated to helping you achieve your goals and reach your highest potential.</p>
                    </div>
                  </div>
                  <div className="atit-card-1  col-md-3" data-aos="fade-up" data-aos-duration="700">
                    <div className="slide-service-item">
                      <div className="glyph">
                        <i className="fa-solid fa-diagram-successor fa-lg"></i>
                      </div>
                      <h3>Practical Approach</h3>
                      <p>We reinforce your understanding while also preparing you for the challenges.</p>
                    </div>
                  </div>
                  <div className="atit-card-1  col-md-3" data-aos="fade-up" data-aos-duration="800">
                    <div className="slide-service-item">
                      <div className="glyph">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </div>
                      <h3>Experiences</h3>
                      <p>What sets us apart is our commitment to providing a dynamic and immersive learning experience.</p>
                    </div>
                  </div>
                  <div className="atit-card-1  col-md-3" data-aos="fade-up" data-aos-duration="900">
                    <div className="slide-service-item">
                      <div className="glyph">
                        <i className="fa-solid fa-business-time"></i>
                      </div>
                      <h3>Technology Trends</h3>
                      <p>At ATIT, we understand the importance of staying at the forefront of technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* atit-HowItWorks */}
        <div>
          <div id="atit-HowItWorks" class="atit-HowItWorks">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="container position-relative z-3">
              <div class="row ">
                <div class="col-lg-5 d-flex align-items-center justify-content-center">
                  <div class="atit-HowItWorks-header">
                    <h3 class="text-center" data-aos="fade-right" data-aos-duration="500">How It Works</h3>
                    <p class="text-center" data-aos="fade-right" data-aos-duration="700">
                      We are dedicated to helping you achieve your goals and reach your highest potential
                    </p>
                    <img src="./assets/imagesandvectors/bg/contact/steps.png" class="col-md-9 rounded img-fluid"
                      alt="about img" />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="row align-items-center ">
                    <div class="col-lg-6 HowItWorks-margin">
                      <div class="HowItWorks-content">
                        <div class="HowItWorks-item">
                          <div class="icon">
                            <i class="ri-team-fill"></i>
                          </div>
                          <p class="head" data-aos="fade-up" data-aos-duration="600">1. Learn</p>
                          <p data-aos="fade-up" data-aos-duration="700">
                            Enhance your skills and harness your potential with our cutting-edge software
                            training programs.
                          </p>
                        </div>
                      </div>
                      <div class="HowItWorks-content">
                        <div class="HowItWorks-item">
                          <div class="icon">
                            <i class="ri-graduation-cap-line"></i>
                          </div>
                          <p class="head" data-aos="fade-up" data-aos-duration="600">2. Get Certificate</p>
                          <p data-aos="fade-up" data-aos-duration="800">
                            Validate your expertise and elevate your career with our industry-recognized
                            certifications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="HowItWorks-content">
                        <div class="HowItWorks-item">
                          <div class="icon">
                            <i class="ri-computer-line"></i>
                          </div>
                          <p class="head" data-aos="fade-up" data-aos-duration="600">3. Work</p>
                          <p data-aos="fade-up" data-aos-duration="700">
                            Step into a world of opportunities with a guaranteed job offer upon completing
                            our comprehensive
                            training.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* company */}
        <Company/>
        <div>
          {/* footer */}
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default About