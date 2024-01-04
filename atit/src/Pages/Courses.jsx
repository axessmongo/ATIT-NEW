import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import "../css/Courses.css"


const Courses = () => {
  return (
    <div>
      <Navbar />
      {/* {Head topic} */}
      <div>
        <section
          style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
          class="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white overflow-hidden"
        >
          <div class="container z-3 text-center">
            <div
              class="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row"
            >
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="500"
                  class="primary-header"
                >
                  Our <span class="primary-color">Courses </span>
                </h1>
                <p
                  class="text-light fs-6 text-capitalize fw-light"
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
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li
                      class="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Courses
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* all group */}
      <div class="container course">
        <section class="pap-card">
          <ul class="nav nav-pills mb-5 text-center justify-content-md-evenly justify-content-center my-5 text-capitalize p-10 m-0 w-100"
            id="pills-tab" role="tablist ">
            <div class="col-12 col-md d-flex justify-content-center">
              <li class="nav-item py-1 w-100 d-flex align-items-center justify-content-center" data-aos="fade-left"
                data-aos-duration="500" role="presentation">
                <button
                  class="nav-link col-4 col-md-12  active border pap-card  py-2 px-5  bg-primary text-white"
                  id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-All" type="button"
                  role="tab" aria-controls="pills-All" aria-selected="true">All
                </button>
              </li>
            </div>
            <div class="col-6 col-md justify-content-center">
              <li class="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="700" role="presentation">
                <button
                  class="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly custom-testing-style bg-primary text-white "
                  id="pills-Testing-tab" data-bs-toggle="pill" data-bs-target="#pills-Testing" type="button"
                  role="tab" aria-controls="pills-Testing" aria-selected="false">Testing</button>
              </li>
            </div>
            <div class="col-6 col-md justify-content-center">
              <li class="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="900" role="presentation">
                <button
                  class="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                  id="pills-Development-tab" data-bs-toggle="pill" data-bs-target="#pills-Development"
                  type="button" role="tab" aria-controls="pills-Development"
                  aria-selected="false">Development</button>
              </li>
            </div>
            <div class="col-6 col-md justify-content-center">
              <li class="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="1100" role="presentation">
                <button
                  class="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                  id="pills-Devops-tab" data-bs-toggle="pill" data-bs-target="#pills-Devops" type="button"
                  role="tab" aria-controls="pills-Devops" aria-selected="false">DevOps</button>
              </li>
            </div>
            <div class="col-6 col-md">
              <li class="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                data-aos-duration="1300" role="presentation">
                <button
                  class="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                  id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science" type="button"
                  role="tab" aria-controls="pills-science" aria-selected="false">AI</button>
              </li>
            </div>
          </ul>
          <div class="tab-content pb-5" id="pills-tabContent ">
            {/* <!-- ALL SECTIONS --> */}
            <div class="tab-pane fade show active" id="pills-All" role="tabpanel" aria-labelledby="pills-All-tab"
              tabindex="0">
              <div class="container-fluid">
                <div class="row g-5">
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/advancejava.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card14 text-white text-center">Advance Java</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">10000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 45 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/api-postman.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card15 text-white text-center">API-Postman</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 20 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/apirestassured.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card7 text-white text-center">API-Rest Assured</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">1000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/db-testing.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card16 text-white text-center">DB Testing</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">7000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 48 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/docker.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card13 text-white text-center">Docker</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">3000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/git.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card5 text-white text-center">GIT</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">20000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 45 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/jenkins.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card6 text-white text-center">Jenkins</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">7000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 60 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/manualtesting.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card3 text-white text-center">Manual Testing</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">9000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 70 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/maven.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card7 text-white text-center">Maven</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">500+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/pageobject.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card4 text-white text-center">Page Object Model</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">3000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 24 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/selenium.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card21 text-white text-center">Selenium</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">15000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 26 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/test-ng.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card20 text-white text-center">TestNG</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">8000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaredevelopment/java.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card11 text-white text-center">Java Fullstack</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">10000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 70 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaredevelopment/mean.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card12 text-white text-center">MEAN Stack</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">300+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 40 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaredevelopment/mern.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card7 text-white text-center">MERN Stack</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 50 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaredevelopment/python.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card9 text-white text-center">Python Fullstack</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">2000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 60 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/datascience-ai/artificial.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card22 text-white text-center">Artificial-Intelligence</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/datascience-ai/datascience.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card10 text-white text-center">Data Science</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 14 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/datascience-ai/deeplearning.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card18 text-white text-center">Deep Learning</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">1000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="courses/devops/devops.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card23 text-white text-center">DevOps</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">2000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 64 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- TESTING SECTIONS --> */}
            <div class="tab-pane fade" id="pills-Testing" role="tabpanel" aria-labelledby="pills-Testing-tab"
              tabindex="0">
              <div class="container-fluid">
                <div class="row g-5">
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/apirestassured.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card7 text-white text-center">API-Rest Assured</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">1000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/aws-service.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card17 text-white text-center">AWS-Service</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">600+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 35 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/corejava.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card1 text-white text-center">Core Java</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">13000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/cucumber.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card2 text-white text-center">Cucumber</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">8000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 40 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/advancejava.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card14 text-white text-center">Advance Java</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">10000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 45 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/api-postman.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card15 text-white text-center">API-Postman</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 20 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/db-testing.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card16 text-white text-center">DB Testing</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">7000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 48 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/docker.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card13 text-white text-center">Docker</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">3000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/git.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card5 text-white text-center">GIT</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">20000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 45 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/jenkins.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card6 text-white text-center">Jenkins</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">7000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 60 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/manualtesting.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card3 text-white text-center">Manual Testing</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">9000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 70 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/maven.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card7 text-white text-center">Maven</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">500+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 12 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/pageobject.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card4 text-white text-center">Page Object Model</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">3000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 24 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/selenium.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card21 text-white text-center">Selenium</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">15000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 26 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a href="./courses/softwaretesting/test-ng.html"
                      class="card pap-card overflow-hidden border-0 shadow1 d-block">
                      <div class="w-100 common-card-image">
                        <h4 class="course-card20 text-white text-center">Testing</h4>
                      </div>
                      <div class="w-100 p-4 common-card-content">
                        <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                        <h6 class="mb-4 text-black">8000+ Successful Learners</h6>
                        <div class="w-100 d-flex align-items-center flex-wrap">
                          <div class="rating-block">
                            <div class="rating-star">
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
                            <p class="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- DEVELOPMENT SECTIONS --> */}
            <div class="tab-pane fade" id="pills-Development" role="tabpanel"
              aria-labelledby="pills-Development-tab" tabindex="0">
              <div class="row g-5">
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/softwaredevelopment/java.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card11 text-white text-center">Java Fullstack</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">10000+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 70 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/softwaredevelopment/mean.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card12 text-white text-center">MEAN Stack</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">300+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 40 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/softwaredevelopment/mern.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card7 text-white text-center">MERN Stack</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 50 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/softwaredevelopment/python.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card9 text-white text-center">Python FullStack</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">2000+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 60 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- DATASCIENCE SECTIONS --> */}
            <div class="tab-pane fade" id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab"
              tabindex="0">
              <div class="row g-5">
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/datascience-ai/artificial.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card22 text-white text-center">Artificial-Intelligence</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 54 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/datascience-ai/datascience.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card10 text-white text-center">Data Science</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">800+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 14 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/datascience-ai/deeplearning.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card18 text-white text-center">Deep Learning</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">1000+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 30 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- DEVOPS SECTIONS --> */}
            <div class="tab-pane fade" id="pills-Devops" role="tabpanel" aria-labelledby="pills-Devops-tab"
              tabindex="0">
              <div class="row g-5">
                <div class="col-md-6 col-lg-4">
                  <a href="./courses/devops/devops.html"
                    class="card pap-card overflow-hidden border-0 shadow1 d-block">
                    <div class="w-100 common-card-image">
                      <h4 class="course-card23 text-white text-center">DevOps</h4>
                    </div>
                    <div class="w-100 p-4 common-card-content">
                      <h6 class="mb-1 green-text text-success">LIVE TRAINING</h6>
                      <h6 class="mb-4 text-black">2000+ Successful Learners</h6>
                      <div class="w-100 d-flex align-items-center flex-wrap">
                        <div class="rating-block">
                          <div class="rating-star">
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
                          <p class="m-0 mt-2 text-secondary">EARN UPTO 64 LAKHS</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        {/* footer */}
        <Footer />
      </div>

    </div>
  )
}

export default Courses