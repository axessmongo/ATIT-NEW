import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Pytest() {
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
                  Pytest
                </h1>
                <p
                  className="text-light fs-6 text-capitalize fw-light"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
pytest is a versatile testing framework for Python that supports simple unit tests as well as complex functional testing.                 </p>
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
                      Pytest
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
              Pytest</p>
            <div className="mt-4 text-center text-capitalize g-3">
              {/* <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT API - Rest Assured Training Will Help You Master And Build Your API - Rest Assured Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of API - Rest Assured Concepts. This Course Will Take Through The Practical Aspects Of API - Rest Assured And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our API - Rest Assured Certification Course To Transform Your Career Into A API - Rest Assured Engineer.
                            </p> */}
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300"> pytest integrates well with various CI/CD systems, ensuring seamless test execution and reporting in development pipelines. Additionally, its extensive assertion introspection provides detailed information on test failures, aiding in quicker debugging and issue resolution.
</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Fixtures</h3>
              <p class="small">Understanding fixtures and their importance.
Creating and using fixtures.
Fixture scope and lifetime management. </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3> Parameterized</h3>
              <p class="small">Parametrize decorator for data-driven testing.
Handling multiple inputs using parametrize.
Dynamic test generation.
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
              <h3> Skipping and Marking Tests</h3>
              <p class="small">
              Skipping tests conditionally.
Marking tests with custom attributes.
Running selected tests based on marks.
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
              <h3>Test Configuration and Hooks</h3>
              <p class="small">Understanding pytest configuration options.
Setup and teardown using pytest fixtures.
Utilizing pytest hooks for customization.
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
              <h3>Mocking and Patching</h3>
              <p class="small">
              Introduction to mocking and patching.
Using pytest-mock for mocking objects.
Patching dependencies in tests.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Plugins and Extensions</h3>
              <p class="small">
              Exploring pytest ecosystem.
Installing and using pytest plugins.
Developing custom plugins.</p>
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
