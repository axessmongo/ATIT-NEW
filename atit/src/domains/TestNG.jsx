import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function TestNG() {
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
                  TestNG
                </h1>
                <p
                  className="text-light fs-6 text-capitalize fw-light"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
TestNG is a powerful testing framework for Java that simplifies test case writing and execution.                </p>
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
                      TestNG
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
              TestNG</p>
            <div className="mt-4 text-center text-capitalize g-3">
              {/* <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT API - Rest Assured Training Will Help You Master And Build Your API - Rest Assured Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of API - Rest Assured Concepts. This Course Will Take Through The Practical Aspects Of API - Rest Assured And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our API - Rest Assured Certification Course To Transform Your Career Into A API - Rest Assured Engineer.
                            </p> */}
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300"> It supports annotations to configure test methods and enables easy grouping and prioritization of tests. TestNG facilitates parameterization, data-driven testing, and provides detailed reports on test results. It also integrates seamlessly with build tools like Maven and CI/CD pipelines, making it an essential tool for automated testing in Java projects.
</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Annotations</h3>
              <p class="small">TestNG annotations, such as @Test, @BeforeMethod, and @AfterMethod, help manage the setup, execution, and teardown of test methods. </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3> Assertions</h3>
              <p class="small">Assert methods for verifying expected outcomes.
Understanding different assert methods and their usage.</p>
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
              <h3> Parameters and Data Providers</h3>
              <p class="small">
              Passing parameters to test methods.
Using Data Providers to supply test data.
Parameterizing tests for data-driven testing.</p>
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
              <h3>Reporting</h3>
              <p class="small">Generating test reports.
Customizing test reports.
Integrating TestNG with other reporting tools.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Test Suites</h3>
              <p class="small">
              Grouping tests into suites.
Configuring test suite execution.
Parallel execution of test suites.</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container hovering">
            <a class="card1_effect" href="#">
              <h3>Dependency Testing</h3>
              <p class="small">
              Understanding dependencies between test methods.
Configuring dependencies using TestNG.
Handling dependencies for test execution.</p>
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
