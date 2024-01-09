import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import Rocket from '../Components/Rocket'
import Company from '../Components/Company'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import LeftBar from '../Components/LeftBar'
function Home({setContactState}) {

  // useEffect(() => {
  //   // This will run after the component has been rendered

  //   // Get the elements by class name
  //   const cardOverlayElements = document.getElementsByClassName("card-img-overlay");
  //   const heroBannerElements = document.getElementsByClassName("hero-banner");

  //   // Check if elements exist before trying to access their properties
  //   if (cardOverlayElements.length > 0 && heroBannerElements.length > 0) {
  //     // Calculate the new margin-bottom value
  //     const newMarginBottom = cardOverlayElements[0].offsetHeight + 100;

  //     // Update the style of the hero-banner element
  //     heroBannerElements[0].style.marginBottom = `${newMarginBottom}px`;
  //   }
  // }, []);



  //   const cardOverlayElements = document.getElementsByClassName("card-img-overlay");
  //   const heroBannerElements = document.getElementsByClassName("hero-banner");

  //   // Check if elements exist before trying to access their properties
  //   if (cardOverlayElements.length > 0 && heroBannerElements.length > 0) {
  //     // Calculate the new margin-bottom value
  //     const newMarginBottom = cardOverlayElements[0].offsetHeight + 100;

  //     // Update the style of the hero-banner element
  //     heroBannerElements[0].style.marginBottom = `${newMarginBottom}px`;
  //   }

  useEffect(() => {
    const contactElement = document.querySelector('[data-bs-target="#contact"]');
    if (contactElement) {
      setContactState(true)
      contactElement.click();
    }
  }, 500)

  return (
    <div>
      <Navbar />
      <div>
        <div className="position-relative overflow-hidden overflow-lg-visible">
          <section
            className="hero-banner d-flex justify-content-center align-items-end align-items-md-center position-relative overflow-hidden header finisher-header text-center text-lg-start text-white"
            style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)", marginBottom: "300px" }}
          >
            <div className="container z-3">
              <div
                className="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row"
              >
                <div className="col-lg-7 mb-5">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="400"
                    className="primary-header"
                  >
                    Advanced <span className="primary-color">Technology</span>
                  </h1>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="400"
                    className="primary-header"
                  >
                    <span className="primary-color">Innovative</span>
                    <span className=""> Training</span>
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                    className="text-light m-0 fs-6 text-capitalize fw-light"
                  >
                    Building a bright future <br />
                    the route to a successful career
                  </p>
                </div>
                <div
                  className="col-lg-5 bg-cloud mb-md-5 d-md-block"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                >
                  <div className="hero-vector2 mx-auto mx-lg-0">
                    <img
                      src="./assets//imagesandvectors/bg/globe.svg"
                      alt="globe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hero-split container">
            <div className="row gx-lg-5 g-4 mt-3 mt-lg-0">
              <div className="col-md-6 col-lg-3 h-100 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-anchor-placement="bottom"
                  data-aos-easing="ease-in-sine"
                >
                  <Link
                    to="/courses"
                    onClick={() => sessionStorage.setItem('courseList', 'Testing')}
                    className="hero-split-card active card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148156679.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="software Testing"
                    />
                    <div
                      className="card-img-overlay d-flex align-items-end justify-content-center"
                    >
                      <h5 className="card-title">software Testing</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-anchor-placement="bottom"
                  data-aos-easing="ease-in-sine"
                  className="h-100"
                >
                  <Link
                    to="/courses"
                    onClick={() => sessionStorage.setItem('courseList', 'Development')}
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="software Development"
                    />
                    <div
                      className="card-img-overlay d-flex align-items-end justify-content-center"
                    >
                      <h5 className="card-title">software Development</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-anchor-placement="bottom"
                  data-aos-easing="ease-in-sine"
                  className="h-100"
                >
                  <Link
                    to="/courses"
                    onClick={() => sessionStorage.setItem('courseList', 'AI')}
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img

                      src="https://img.freepik.com/free-vector/artificial-intelligence-background-abstract-style_23-2147879547.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="Artificial Intelligence"
                    />
                    <div
                      className="card-img-overlay d-flex align-items-end justify-content-center"
                    >
                      <h5 className="card-title">Artificial Intelligence</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-anchor-placement="bottom"
                  data-aos-easing="ease-in-sine"
                  className="h-100"
                >
                  <Link
                    to="/courses"
                    onClick={() => sessionStorage.setItem('courseList', 'DevOps')}
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="Devops"
                    />
                    <div
                      className="card-img-overlay d-flex align-items-end justify-content-center"
                    >
                      <h5 className="card-title">Devops</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* content banner */}
      <div className ="primary-mb">
        <section className ="whatwedo overflow-hidden" id="whatwedo">
          <div className ="container overflow-hidden overflow-lg-visible">
            <div className ="position-relative">
              <h1
                className ="primary-header text-center mb-3 linear-gradient-text"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                Pay After Placement Program
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                className ="primary-text mx-auto text-center"
              >
                ATIT guides you seamlessly through its Pay After Placement
                program, offering a transparent and structured process. Our goal
                is to assist you in securing your desired position within the IT
                sector, ensuring a clear pathway to your dream job.
              </p>
              <div className ="row align-items-center">
                <div className ="col-lg-4 left-sec">
                  <div data-aos="fade-right" data-aos-duration="400">
                    <div
                      className ="card border-0 mb-5"
                      // to="#smokemodelling"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img src="./assets/img/step1.jpg" alt="step 1" />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            skill Assessment & salary discussion
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="800">
                    <div
                      className ="card left-go border-0 mb-5"
                      // to="#firestategies"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img
                            src="./assets/img/step2.jpg"
                            className ="rounded-circle display-6"
                            alt="step 2"
                          />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            affordable training investment
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="900">
                    <div
                      className ="card border-0 mb-5"
                      // to="#smokemodelling"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img src="./assets/img/step3.jpg" alt="step 3" />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            comprehensive training
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className ="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center"
                >
                  <div className ="bgimage-holder">
                    <img
                      src="./assets/imagesandvectors/bg/bg-5.png"
                      data-aos="flip-left"
                      data-aos-duration="1200"
                      alt="steps"
                      className ="w-100 h-100"
                    />
                  </div>
                </div>

                <div className ="col-lg-4 mt-3 right-sec">
                  <div data-aos="fade-left" data-aos-duration="600">
                    <div
                      className ="card border-0 mb-5"
                      // to="#strecturalfire"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img src="./assets/img/step4.jpg" alt="step 4 " />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            Income sharing agreement
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="700">
                    <div
                      className ="card right-go border-0 mb-5"
                      // to="#firesuppression"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img src="./assets/img/step5.jpg" alt="step 5" />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            Elevate your profile
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="00">
                    <div
                      className ="card border-0 mb-5"
                      // to="#sprinklersystem"
                      data-bs-toggle="offcanvas"
                    >
                      <div className ="d-flex align-items-center">
                        <div className ="card-icon p-3">
                          <img src="./assets/img/step6.jpg" alt="step 6" />
                        </div>
                        <div className ="card-body px-2 py-4 pe-3">
                          <h5 className ="card-title text-capitalize mb-0">
                            securing your job
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className ="col-lg-4 mx-auto">
                  <div
                    className ="card border-0 mb-1"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    // to="#pressrisation"
                    data-bs-toggle="offcanvas"
                  >
                    <div className ="d-flex align-items-center">
                      <div className ="card-icon p-3">
                        <img src="./assets/img/step7.jpg" alt="step 7" />
                      </div>
                      <div className ="card-body px-2 py-4 pe-3">
                        <h5 className ="card-title text-capitalize mb-0">
                          optional job support -up to 3 months
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Highlights */}
      <div className ="container-fluid overflow-hidden">
        <h1
          className ="primary-header col-lg-6 mx-auto text-center linear-gradient-text mb-5"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Highlights of Pay after Placement Program
        </h1>

        <div className ="pap-holder mb-3">
          <div className ="row flex-wrap g-lg-0 g-3 justify-content-evenly">
            <div className ="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className ="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-warning"
              >
                <img
                  src="./assets/imagesandvectors/pap/debit-card.png"
                  alt="debit-card"
                  className ="img-fluid pap-img mb-2"
                />
                <p className ="pap-text m-0 text-white fs-5">
                  Flexible Payment Options
                </p>
              </div>
            </div>
            <div className ="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className ="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-primary"
              >
                <img
                  src="./assets/imagesandvectors/pap/profits.png"
                  alt="profits"
                  className ="img-fluid pap-img mb-2"
                />
                <p className ="pap-text m-0 text-white fs-5">Cost-Effective</p>
              </div>
            </div>
            <div className ="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className ="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-secondary"
              >
                <img
                  src="./assets/imagesandvectors/pap/job.png"
                  alt="job"
                  className ="img-fluid pap-img mb-2"
                />
                <p className ="pap-text m-0 text-white fs-5">100% Job Security</p>
              </div>
            </div>
            <div className ="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className ="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-danger"
              >
                <img
                  src="./assets/imagesandvectors/pap/attention.png"
                  alt="attention "
                  className ="img-fluid pap-img mb-2"
                />
                <p className ="pap-text m-0 text-white fs-5">1 on 1 attention</p>
              </div>
            </div>
            <div className ="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                className ="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-info"
              >
                <img
                  src="./assets/imagesandvectors/pap/analysis.png"
                  alt="analysis "
                  className ="img-fluid pap-img mb-2"
                />
                <p className ="pap-text m-0 text-white fs-5">Job-Oriented Training</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" className ="d-flex pt-4">
          <Link
            to="/pap"
            className ="btn primary-btn bg-primary text-white mb-5 mx-auto"
          >About PAP
          </Link>

        </div>
      </div>
      {/* DevelopmentProgram */}
      <div id="DevelopmentProgram" className ="position-relative primary-mb">
        <ul className ="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className ="container">
          <div
            className ="text-center mb-5 pb-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h1 className ="primary-header position-relative z-3 text-white">
              Technical Skills <br />
              Development Program<span className ="primary-color d-none">.</span>
            </h1>
          </div>
          <div
            className ="DevelopmentProgram-content row text-center gx-5 position-relative z-3"
          >
            <div className ="col-md-4 col-sm-4 col-sx-12 TechnicalSkills-container">
              <div className ="statusrow"></div>
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="first"
                  src="./assets/img/announcement.jpg"
                  width="70px"
                  height="70px"
                  alt="startRocket "
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                className ="item-title text-white text-center pt-2"
              >
                Technical Skills
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                className ="pt-2 text-white secondary-text"
              >
                ATIT's Technical Skills Development Program offers an extensive
                and immersive training experience designed to equip you with
                valuable expertise in various critical IT domains such as Software
                Testing, Software Development, and DevOps, among other
                job-oriented courses.
              </p>
            </div>
            <div className ="col-md-4 col-sm-4 col-sx-12 OurMission-container">
              <div className ="statusrow"></div>
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="second"
                  src="./assets/img/settings.jpg"
                  width="70px"
                  height="70px"
                  alt="startRocket "
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                className ="item-title text-center pt-2 text-white"
              >
                Our Mission
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                className ="pt-2 text-white secondary-text"
              >
                ATIT's core mission revolves around cultivating technical
                proficiency starting from the very basics. By doing so, we empower
                individuals like you to make a seamless transition into a
                successful and fulfilling career path within the IT industry.
              </p>
            </div>
            <div
              className ="col-md-4 col-sm-4 col-sx-12 anim-wrapper ProsperousCareer-container"
            >
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="third"
                  src="./assets/img/endRocket.png"
                  width="100px"
                  height="100px"
                  alt="startRocket "
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                className ="item-title text-white text-center pt-2"
              >
                Prosperous Career
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                className ="pt-2 text-white secondary-text"
              >
                Our program stands out for its dedication to honing your skills
                from the ground up, providing a robust foundation upon which you
                can build a prosperous career.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Learn The High-Paying Skills */}
      <section id="features" className ="features primary-mb container-fluid">
        <div className ="container">
          <div className ="row align-items-center">
            <div
              className ="image col-lg-6"
              style={{ backgroundImage: 'url("./assets/img/feacture.png")' }}

              data-aos="fade-right"
            ></div>
            <div className ="col-lg-6">
              <div className ="icon-box mb-0">
                <i className ="bx bx-receipt"></i>
                <h1
                  className ="secondary-header text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  learn the high-paying skills from Industry Experts
                </h1>
              </div>
              <div className ="icon-box">
                <i className ="bx bx-cube-alt"></i>
                <h3
                  className ="secondary-text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Become highly skilled, adaptable & sought-after professionals in
                  the ever-evolving technology landscape.
                </h3>
              </div>

              <div className ="row mt-5 fs-5 fw-bold">
                <div className ="col-6">
                  <div className ="d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000">
                    <div className ="arrow1">
                      <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon" />
                    </div>
                    <div className ="primary-text ps-3">Hand-Picked Trainers</div>
                  </div>
                </div>
                <div className ="col-6">
                  <div className ="d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000">
                    <div className ="arrow1">
                      <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon" />

                    </div>
                    <div className ="primary-text ps-3">Real-Time Scenarios</div>
                  </div>
                </div>
              </div>
              <div className ="row mt-3 fs-5 fw-bold">
                <div className ="col-6">
                  <div className ="d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000">
                    <div className ="arrow1">
                      <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon" />
                    </div>
                    <div className ="primary-text ps-3">Easy to Follow Curriculum</div>
                  </div>
                </div>
                <div className ="col-6">
                  <div className ="d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000">
                    <div className ="arrow1">
                      <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon" />
                    </div>
                    <div className ="primary-text ps-3">Hands-On Live Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Trained Students are Hired By */}
      <Company />
      {/* footer */}
      <Footer />
      {/* contcat form */}
      <ContactForm />
      {/* leftbar */}
      <LeftBar />
      {/* Rocket */}
      <Rocket />
    </div>
  )
}

export default Home