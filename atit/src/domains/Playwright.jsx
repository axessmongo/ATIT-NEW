import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Playwright() {
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
                                  PlayWright
                                </h1>
                                <p
                                    className ="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
Playwright is a modern, open-source framework for web testing and automation developed by Microsoft.                                 </p>
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
                                             PlayWright
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
                             PlayWright</p>
                        <div className ="mt-4 text-center text-capitalize g-3">
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">It supports multiple programming languages including JavaScript, TypeScript, Python, C#, and Java, making it highly versatile. Playwright allows for automated testing across different browsers such as Chromium, Firefox, and WebKit with a single API. Its powerful features, like auto-waiting and capturing screenshots, enhance the reliability and effectiveness of test scripts.
</p>
                        </div>
                    </div>
                   
                    <div class="row">
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Browser Management</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Navigation</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
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
                    <h3>Interactions</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
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
                    <h3>Assertions and Waiting</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Frames and Dialogs</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Network Interactions</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
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
                    <h3>Closing</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Selectors</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>File upload & Download</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
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
                    <h3>Mocking and Intercepting network Requests</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Authentication & permissions</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Handling WebSocket</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="container hovering">
                <a class="card1_effect" href="#">
                    <h3>Mocking API Response</h3>
                    <p class="small">Card description with lots of great facts and interesting details.</p>
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

export default Playwright