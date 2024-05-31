import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Selenium() {
  return (
    <div>
            {/* <Navbar /> */}
            <div>
                <section
                    style={{
                        background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)",
                    }}
                    className ="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white overflow-hidden"
                >
                    <div className ="container z-3 text-center">
                        <div
                            className ="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row"
                        >
                            <div>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    className ="primary-header"
                                >
                                  Selenium
                                </h1>
                                <p
                                    className ="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                   Selenium is a powerful open-source tool used for automating web browser interactions. 
                                </p>
                                <nav
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    style={{
                                        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")'
                                    }}

                                    aria-label="breadcrumb"
                                >
                                    <ol className ="breadcrumb justify-content-center">
                                        <li className ="breadcrumb-item"><Link to= "/">Home</Link></li>
                                        <li className ="breadcrumb-item"><Link to= "/courses">Courses</Link></li>
                                        <li
                                            className ="breadcrumb-item active text-white"
                                            aria-current="page"
                                        >
                                            Selenium
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div id="artifical" className ="coursesList">
                    <div className ="container-fluid ">
                        <p className ="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text pt-5"
                            data-aos="flip-up" data-aos-duration="900" data-aos-delay="300">
                            Selenium</p>
                        <div className ="mt-4 text-center text-capitalize g-3">
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">It supports multiple programming languages, including Java, Python, and C#, making it versatile for various testing environments. With Selenium WebDriver, users can create robust, browser-based regression automation suites and tests. Its capability to simulate user actions and verify web applications' functionality ensures high-quality software releases.</p>
                        </div>
                    </div>
                   
                    <div class="row">
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>WebElement Method</h3>
                    <p class="small">WebElement methods in testing provide actions and interactions with web elements, enabling automation of user interactions on web pages.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Webdriver Method</h3>
                    <p class="small">WebDriver methods in testing facilitate navigation, element interaction, and browser control for automated web testing tasks.</p>
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
                    <h3>Window Handling</h3>
                    <p class="small">Window handling methods in testing allow for managing multiple browser windows or tabs during automated testing, ensuring seamless navigation and interaction across different windows.</p>
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
                    <h3>Frame</h3>
                    <p class="small">Window frames in testing provide a way to isolate and interact with embedded web content within a webpage, enabling targeted testing of specific sections or components.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Alert</h3>
                    <p class="small">
                    Window alerts in testing prompt users with messages during automated tests, enabling simulation of user interactions with pop-up dialog boxes.
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
                    <h3>Drop down</h3>
                    <p class="small">Dropdowns in testing allow selection from a list of options, facilitating automated testing of user interface components with selectable choices.</p>
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
                    <h3>Robot</h3>
                    <p class="small">Robot Framework in testing is an open-source automation framework that uses keyword-driven testing and supports behavior-driven development, aiding in the creation of readable and maintainable test scripts.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Action</h3>
                    <p class="small">Actions in testing refer to specific user interactions or system behaviors that are automated to validate the functionality of a software application or system under test.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Screen shot</h3>
                    <p class="small">Screen shot in testing capture visual snapshots of the application's state during automated test execution, aiding in debugging and verifying test results.</p>
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
                    <h3>Wait</h3>
                    <p class="small">Wait commands in testing pause test execution for a specified period or until a certain condition is met, ensuring synchronization between test steps and application responsiveness.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Webtable</h3>
                    <p class="small">Web tables in testing organize data into rows and columns on web pages, facilitating extraction, validation, and manipulation of tabular data during automated testing.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        
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

export default Selenium