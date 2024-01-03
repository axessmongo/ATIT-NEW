import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
function Home() {

  useEffect(() => {
    var mbnew = document.querySelector('.card-img-overlay').offsetHeight + 100;
    document.querySelector('.hero-banner').style.marginBottom = mbnew + 'px';
}, []);


  return (
    <div>
      <Navbar />
      <div>
        <div className="position-relative overflow-hidden overflow-lg-visible">
          <section
            className="hero-banner d-flex justify-content-center align-items-end align-items-md-center position-relative overflow-hidden header finisher-header text-center text-lg-start text-white"
            style={{background:"linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)"}}
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
                    <span className="primary-color">Innovative</span
                    ><span className=""> Training</span>
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
                    href="courses.html"
                    onclick="sessionStorage.setItem('cousrelist', '1')"
                    className="hero-split-card active card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148156679.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="software Testing image"
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
                    href="courses.html"
                    onclick="sessionStorage.setItem('cousrelist', '2')"
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="software Development image"
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
                    href="courses.html"
                    onclick="sessionStorage.setItem('cousrelist', '4')"
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img

                      src="https://img.freepik.com/free-vector/artificial-intelligence-background-abstract-style_23-2147879547.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="Artificial Intelligence image"
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
                    href="courses.html"
                    onclick="sessionStorage.setItem('cousrelist', '3')"
                    className="hero-split-card card text-bg-dark rounded-3 overflow-hidden border-0"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?size=626&ext=jpg&uid=R88793194&ga=GA1.1.1133761637.1698651682&semt=ais"
                      className="card-img h-100"
                      alt="Devops image"
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
      <div class="primary-mb">
        <section class="whatwedo overflow-hidden" id="whatwedo">
          <div class="container overflow-hidden overflow-lg-visible">
            <div class="position-relative">
              <h1
                class="primary-header text-center mb-3 linear-gradient-text"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                Pay After Placement Program
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                class="primary-text mx-auto text-center"
              >
                ATIT guides you seamlessly through its Pay After Placement
                program, offering a transparent and structured process. Our goal
                is to assist you in securing your desired position within the IT
                sector, ensuring a clear pathway to your dream job.
              </p>
              <div class="row align-items-center">
                <div class="col-lg-4 left-sec">
                  <div data-aos="fade-right" data-aos-duration="400">
                    <div
                      class="card border-0 mb-5"
                      href="#smokemodelling"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img src="./assets/img/step1.jpg" alt="step 1 image" />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            skill Assessment & salary discussion
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="800">
                    <div
                      class="card left-go border-0 mb-5"
                      href="#firestategies"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img
                            src="./assets/img/step2.jpg"
                            class="rounded-circle display-6"
                            alt="step 2 image"
                          />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            affordable training investment
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="900">
                    <div
                      class="card border-0 mb-5"
                      href="#smokemodelling"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img src="./assets/img/step3.jpg" alt="step 3 image" />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            comprehensive training
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center"
                >
                  <div class="bgimage-holder">
                    <img
                      src="./assets/imagesandvectors/bg/bg-5.png"
                      data-aos="flip-left"
                      data-aos-duration="1200"
                      alt="steps image"
                      class="w-100 h-100"
                    />
                  </div>
                </div>

                <div class="col-lg-4 mt-3 right-sec">
                  <div data-aos="fade-left" data-aos-duration="600">
                    <div
                      class="card border-0 mb-5"
                      href="#strecturalfire"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img src="./assets/img/step4.jpg" alt="step 4 image" />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            Income sharing agreement
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="700">
                    <div
                      class="card right-go border-0 mb-5"
                      href="#firesuppression"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img src="./assets/img/step5.jpg" alt="step 5 image" />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            Elevate your profile
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="00">
                    <div
                      class="card border-0 mb-5"
                      href="#sprinklersystem"
                      data-bs-toggle="offcanvas"
                    >
                      <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                          <img src="./assets/img/step6.jpg" alt="step 6 image" />
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                          <h5 class="card-title text-capitalize mb-0">
                            securing your job
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mx-auto">
                  <div
                    class="card border-0 mb-1"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    href="#pressrisation"
                    data-bs-toggle="offcanvas"
                  >
                    <div class="d-flex align-items-center">
                      <div class="card-icon p-3">
                        <img src="./assets/img/step7.jpg" alt="step 7 image" />
                      </div>
                      <div class="card-body px-2 py-4 pe-3">
                        <h5 class="card-title text-capitalize mb-0">
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
      <div class="container-fluid overflow-hidden">
        <h1
          class="primary-header col-lg-6 mx-auto text-center linear-gradient-text mb-5"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Highlights of Pay after Placement Program
        </h1>

        <div class="pap-holder mb-3">
          <div class="row flex-wrap g-lg-0 g-3 justify-content-evenly">
            <div class="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-warning"
              >
                <img
                  src="./assets/imagesandvectors/pap/debit-card.png"
                  alt="debit-card"
                  class="img-fluid pap-img mb-2"
                />
                <p class="pap-text m-0 text-white fs-5">
                  Flexible Payment Options
                </p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-primary"
              >
                <img
                  src="./assets/imagesandvectors/pap/profits.png"
                  alt="profits image"
                  class="img-fluid pap-img mb-2"
                />
                <p class="pap-text m-0 text-white fs-5">Cost-Effective</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-secondary"
              >
                <img
                  src="./assets/imagesandvectors/pap/job.png"
                  alt="job image"
                  class="img-fluid pap-img mb-2"
                />
                <p class="pap-text m-0 text-white fs-5">100% Job Security</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-danger"
              >
                <img
                  src="./assets/imagesandvectors/pap/attention.png"
                  alt="attention image"
                  class="img-fluid pap-img mb-2"
                />
                <p class="pap-text m-0 text-white fs-5">1 on 1 attention</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-info"
              >
                <img
                  src="./assets/imagesandvectors/pap/analysis.png"
                  alt="analysis image"
                  class="img-fluid pap-img mb-2"
                />
                <p class="pap-text m-0 text-white fs-5">Job-Oriented Training</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" class="d-flex pt-4">
          <a
            href="pay-after-placement.html"
            class="btn primary-btn bg-primary text-white mb-5 mx-auto"
          >About PAP</a
          >
        </div>
      </div>
      {/* DevelopmentProgram */}
      <div id="DevelopmentProgram" class="position-relative primary-mb">
        <ul class="background">
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
        <div class="container">
          <div
            class="text-center mb-5 pb-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h1 class="primary-header position-relative z-3 text-white">
              Technical Skills <br />
              Development Program<span class="primary-color d-none">.</span>
            </h1>
          </div>
          <div
            class="DevelopmentProgram-content row text-center gx-5 position-relative z-3"
          >
            <div class="col-md-4 col-sm-4 col-sx-12 TechnicalSkills-container">
              <div class="statusrow"></div>
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="first"
                  src="./assets/img/announcement.jpg"
                  width="70px"
                  height="70px"
                  alt="startRocket image"
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                class="item-title text-white text-center pt-2"
              >
                Technical Skills
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                class="pt-2 text-white secondary-text"
              >
                ATIT's Technical Skills Development Program offers an extensive
                and immersive training experience designed to equip you with
                valuable expertise in various critical IT domains such as Software
                Testing, Software Development, and DevOps, among other
                job-oriented courses.
              </p>
            </div>
            <div class="col-md-4 col-sm-4 col-sx-12 OurMission-container">
              <div class="statusrow"></div>
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="second"
                  src="./assets/img/settings.jpg"
                  width="70px"
                  height="70px"
                  alt="startRocket image"
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                class="item-title text-center pt-2 text-white"
              >
                Our Mission
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                class="pt-2 text-white secondary-text"
              >
                ATIT's core mission revolves around cultivating technical
                proficiency starting from the very basics. By doing so, we empower
                individuals like you to make a seamless transition into a
                successful and fulfilling career path within the IT industry.
              </p>
            </div>
            <div
              class="col-md-4 col-sm-4 col-sx-12 anim-wrapper ProsperousCareer-container"
            >
              <p data-aos="zoom-in" data-aos-duration="600">
                <img
                  id="third"
                  src="./assets/img/endRocket.png"
                  width="100px"
                  height="100px"
                  alt="startRocket image"
                />
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="400"
                class="item-title text-white text-center pt-2"
              >
                Prosperous Career
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                class="pt-2 text-white secondary-text"
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
      <section id="features" class="features primary-mb container-fluid">
        <div class="container">
          <div class="row align-items-center">
            <div
              class="image col-lg-6"
              style={{ backgroundImage: 'url("./assets/img/feacture.png")' }}

              data-aos="fade-right"
            ></div>
            <div class="col-lg-6">
              <div class="icon-box mb-0">
                <i class="bx bx-receipt"></i>
                <h1
                  class="secondary-header text-capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  learn the high-paying skills from Industry Experts
                </h1>
              </div>
              <div class="icon-box">
                <i class="bx bx-cube-alt"></i>
                <h3
                  class="secondary-text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Become highly skilled, adaptable & sought-after professionals in
                  the ever-evolving technology landscape.
                </h3>
              </div>

              <div class="row mt-5 fs-5 fw-bold">
                <div class="col-6">
                  <div class="d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000">
                    <div class="arrow1">
                      <i class="fa fa-long-arrow-right arror-icon" aria-hidden="true"></i>
                    </div>
                    <div class="primary-text ps-3">Hand-Picked Trainers</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center" data-aos="fade-left" data-aos-duration="1000">
                    <div class="arrow1">
                      <i class="fa fa-long-arrow-right arrow-icon" aria-hidden="true"></i>
                    </div>
                    <div class="primary-text ps-3">Real-Time Scenarios</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3 fs-5 fw-bold">
                <div class="col-6">
                  <div class="d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000">
                    <div class="arrow1">
                      <i class="fa fa-long-arrow-right arrow-icon" aria-hidden="true"></i>
                    </div>
                    <div class="primary-text ps-3">Easy to Follow Curriculum</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000">
                    <div class="arrow1">
                      <i class="fa fa-long-arrow-right arrow-icon" aria-hidden="true"></i>
                    </div>
                    <div class="primary-text ps-3">Hands-On Live Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Trained Students are Hired By */}
      <div class="container company-logos mb-5 overflow-hidden">
        <p
          class="text-center text-capitalize justify-content-center mt-4 display-6 linear-gradient-text fw-semibold"
          data-aos="fade-up"
          data-aos-duration="7000"
        >
          Our Trained Students are Hired By
        </p>
        <div class="row">
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/1.png" class="img-fluid" alt="company image" />
          </div>
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/2.png" class="img-fluid" alt="company image" />
          </div>
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/3.png" class="img-fluid" alt="company image" />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/4.png" class="img-fluid" alt="company image" />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/5.png" class="img-fluid" alt="company image" />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/6.png" class="img-fluid" alt="company image" />
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home