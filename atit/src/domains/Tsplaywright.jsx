import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Tsplaywright() {
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
                  Ts PlayWright
                </h1>
                <p
                  className="text-light fs-6 text-capitalize fw-light"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >

Playwright for TypeScript combines the robust automation capabilities of Playwright with the type safety and modern syntax of TypeScript.   </p>
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
                    <li className="breadcrumb-item"><Link to="/domains">Domains</Link></li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      
                      Ts PlayWright
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
              Ts PlayWright</p>
            <div className="mt-4 text-center text-capitalize g-3">
              {/* <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT API - Rest Assured Training Will Help You Master And Build Your API - Rest Assured Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of API - Rest Assured Concepts. This Course Will Take Through The Practical Aspects Of API - Rest Assured And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our API - Rest Assured Certification Course To Transform Your Career Into A API - Rest Assured Engineer.
                            </p> */}
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300"> The TypeScript integration enhances code quality and maintainability with strong typing and IntelliSense support. Furthermore, Playwright's advanced features like auto-wait, network interception, and screenshots make it an excellent choice for reliable end-to-end testing in TypeScript projects.
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
              <p class="small">Locating and interacting with web elements using TypeScript.
Performing actions such as click, type, select, etc.
Handling dynamic elements and waiting strategies.</p>
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
              <p class="small">Navigating between pages in TypeScript.
Handling alerts, prompts, and confirmations.
Managing browser contexts and pages effectively.
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
              Switching between frames and iframes using TypeScript.
Interacting with elements inside frames.
Handling nested frames scenarios.
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
              <h3>Form Submission and Input Fields Handling</h3>
              <p class="small">Filling out and submitting forms using TypeScript.
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
              <h3>Capturing Screenshots and Videos</h3>
              <p class="small">
              Capturing screenshots of web pages with TypeScript.
Recording videos of test executions.
Configuring screenshot and video options in TypeScript.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Data-Driven Testing and Parameterization</h3>
              <p class="small">
              Parameterizing tests for data-driven testing in TypeScript.
Loading test data from external sources.
Generating test data dynamically.</p>
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
