import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Jsplaywright() {
  return (
    <div>
      <div>
        <section
          style={{
            background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)",
          }}
          className="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white overflow-hidden"
        >
          <div className="container z-3 text-center">
            <div
              className="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row"
            >
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="primary-header"
                >
                  Js PlayWright
                </h1>
                <p
                  className="text-light fs-6 text-capitalize fw-light"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
Playwright is a robust browser automation library for JavaScript, designed to perform end-to-end testing for modern web applications.               </p>
                <nav
                  data-aos="fade-up"
                  data-aos-duration="800"
                  style={{
                    '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")'
                  }}

                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/courses">Courses</Link></li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Js PlayWright
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div id="artifical" className="coursesList">
          <div className="container-fluid ">
            <p className="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text pt-5"
              data-aos="flip-up" data-aos-duration="900" data-aos-delay="300">
              Js PlayWright</p>
            <div className="mt-4 text-center text-capitalize g-3">
              {/* <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT API - Rest Assured Training Will Help You Master And Build Your API - Rest Assured Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of API - Rest Assured Concepts. This Course Will Take Through The Practical Aspects Of API - Rest Assured And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our API - Rest Assured Certification Course To Transform Your Career Into A API - Rest Assured Engineer.
                            </p> */}
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Playwright is a robust browser automation library for JavaScript, designed to perform end-to-end testing for modern web applications. It supports multiple browsers, including Chromium, Firefox, and WebKit, allowing comprehensive cross-browser testing.
</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Interacting with Web Elements</h3>
              <p class="small">Locating elements on a webpage.
Performing actions such as click, type, select, etc.
Waiting for elements to appear or become interactable. </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Handling Navigation and Pop-ups</h3>
              <p class="small">Navigating between pages.
Handling alerts, prompts, and confirmations.
Managing browser contexts and pages.
</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="
html
Copy code
container hovering">
            <a class="card1_effect" href="#">
              <h3>Working with Frames and iframes</h3>
              <p class="small">
              Switching between frames and iframes.
Interacting with elements inside frames.
Dealing with nested frames.
</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Handling Forms and Input Fields</h3>
              <p class="small">Filling out and submitting forms.
Interacting with input fields, checkboxes, radio buttons, etc.
Validating form submissions.
</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Browser Configuration and Contexts</h3>
              <p class="small">
              Configuring browser options such as viewport size, user agent, etc.
Managing browser contexts for different scenarios.
Handling authentication and permissions.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Parallel Execution and Scalability</h3>
              <p class="small">
              Running tests in parallel for faster execution.
Configuring test runners for parallelization.
Handling synchronization issues in parallel execution.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div><Swiper /></div> */}
      <div>
        <Footer />
      </div>
    </div>
  )
}
