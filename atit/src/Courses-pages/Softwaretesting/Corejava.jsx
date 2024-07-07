import React from 'react'
import Navbar from '../../Components/Navbar'
import Swiper from '../../Components/Swiper'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
function Corejava() {
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
                                        <li className ="breadcrumb-item"><Link to= "/domains">Domains</Link></li>
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
                    <h3>Webdriver Method</h3>
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
                    <h3>Window Handling</h3>
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
                    <h3>Frame</h3>
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
                    <h3>Alert</h3>
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
                    <h3>Drop down</h3>
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
                    <h3>Robot</h3>
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
                    <h3>Action</h3>
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
                    <h3>Screen shot</h3>
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
                    <h3>Wait</h3>
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
                    <h3>Webtable</h3>
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

export default Corejava
