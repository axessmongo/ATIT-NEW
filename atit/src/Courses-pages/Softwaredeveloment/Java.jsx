import React from 'react'
import Navbar from '../../Components/Navbar'
import Swiper from '../../Components/Swiper'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
function Java() {
    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <section
                    style={{
                        background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)",
                    }}
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
                                    Java <span class="primary-color">Fullstack</span>
                                </h1>
                                <p
                                    class="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    Average Salary For Java Fullstack Engineers In India - Rs.12 Lakhs Per Annum
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
                                        <li class="breadcrumb-item"><Link to= "/">Home</Link></li>
                                        <li class="breadcrumb-item"><Link to= "/courses">Courses</Link></li>
                                        <li
                                            class="breadcrumb-item active text-white"
                                            aria-current="page"
                                        >
                                            Java
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div id="artifical" class="coursesList">
                    <div class="container-fluid ">
                        <p class="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text pt-5"
                            data-aos="flip-up" data-aos-duration="900" data-aos-delay="300">
                            About Java Fullstack Course</p>
                        <div class="mt-4 text-center text-capitalize g-3">
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT Java Fullstack Training Will Help You Master And Build Your Java Fullstack Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of Java Fullstack Concepts. This Course Will Take Through The Practical Aspects Of Java Fullstack And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our Java Fullstack Certification Course To Transform Your Career Into A Java Fullstack Engineer.

                            </p>
                            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Experience the unparalleled edge of
                                real-time project training – exclusive to us, as no
                                other
                                institutes
                                can match our offering.</p>
                        </div>
                    </div>
                    <div class="container">
                        <section class="course-includes">
                            <div class="container-fluid">
                                <h2 class="text-center justify-content-center align-content-center linear-gradient-text pt-5"
                                    data-aos="flip-left" data-aos-duration="500" data-aos-delay="600">
                                    Course
                                    Includes</h2>
                                <div class="feature-grid row ">
                                    <div class="feature col-lg-4" data-aos="fade-right" data-aos-duration="500"
                                        data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-macbook-fill"></i>
                                            <p>75 Hours of Sessions</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-down zoom-in" data-aos-duration="700"
                                        data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-time-fill"></i>
                                            <p>Flexible Schedules</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-customer-service-fill"></i>
                                            <p>24/7 Lifetime Support</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-right" data-aos-duration="500"
                                        data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-star-fill"></i>
                                            <p>Certification Oriented Curriculum</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-down zoom-in" data-aos-duration="700"
                                        data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-send-plane-2-fill"></i>
                                            <p>FREE Demo on Request</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                        <div class="feature-item">
                                            <i class="ri-user-fill"></i>
                                            <p>One-on-One Doubt Clearing</p>
                                        </div>
                                    </div>
                                    <div class="feature col-lg-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                        <div class="feature-item">
                                            <i class="ri-thumb-up-fill"></i>
                                            <p>Real-time Project Use cases</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="container-fluid mt-5 py-4">
                        <p class="fw-semibold display-6 text-center text-capitalize linear-gradient-text justify-content-center linear-gradient-text"
                            data-aos="flip-right" data-aos-delay="500" data-aos-duration="500">
                            Java Fullstack Training Course Content</p>
                        <div class="mt-4 text-center text-capitalize g-3" data-aos="fade-up" data-aos-delay="300"
                            data-aos-duration="500">
                            <p> This Java Fullstack, Training Curriculum Covers The Introduction To Java Fullstack, Continuous Integration Automation, Continuous Deployment, Understanding Of Various Categories Of Java Fullstack Tools Like Development Life Cycle Management, Configuration Management Tools, Source Code Management, Automation Tool, And Continuous Monitoring Tools. It Also Covers Essential Tools Like Chef, Introduction To Docker, Integration Of Docker, Docker Swarm, Jenkins, Nagios, Etc.
                            </p>
                        </div>
                    </div>



                    <section class="container my-3 pt-3">
                        <div class="mt-4">
                            <h2 class="linear-gradient-text fw-semibold text-center mb-2" data-aos="flip-right"
                                data-aos-duration="500" data-aos-delay="600">Training Options </h2>
                            <p class="fw-medium text-center mt-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                Choose your own comfortable learning
                                experience.</p>
                            <p class="text-center  text-center fw-normal" data-aos="fade-up" data-aos-duration="800"
                                data-aos-delay="400">Whether You Choose To Learn Online Or Offline, We're Excited To Have You As Part Of Our Java Fullstack Community And Look Forward To Helping You Advance Your Career In The World Of Java Fullstack!</p>
                        </div>
                    </section>
                    <section>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card mx-auto mt-4">
                                        <div class="card-body d-flex flex-column">
                                            <div>
                                                <h2 class="text-center" data-aos="fade-up" data-aos-duration="700"
                                                    data-aos-delay="500"><span class="text-success">Online</span> Classes
                                                </h2>
                                                <div class="d-flex text-center justify-content-center mb-3 mt-2"
                                                    data-aos="flip-right" data-aos-delay="600" data-aos-duration="700">
                                                    <Link to="/contact" class="btn btn-success rounded-pill my-2" >Join Now</Link>
                                                </div>
                                                <p class="about class-content text-center" data-aos="fade-up"
                                                    data-aos-duration="800" data-aos-delay="600">In Today's Digital Age, Java Fullstack Has Become An Essential Practice For Organizations Looking To Streamline Their Software Development And IT Operations. This Online Course Is Designed To Provide You With The Knowledge And Skills Needed To Excel In The World Of Java Fullstack, All From The Comfort Of Your Own Home Or Office.</p>
                                                <div class="" data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                                                    <p class="fs-2 fw-semibold">Course Highlights:</p>
                                                    <p>✔️ Flexible Learning: Learn at your own pace, and access course
                                                        materials
                                                        24/7.
                                                    </p>
                                                    <p>✔️ Expert Instructors: Our experienced instructors will guide you
                                                        through the
                                                        latest
                                                        Manual
                                                        Testing concepts, tools, and best practices.</p>
                                                    <p>✔️ Interactive Learning: Engage in discussions, collaborate with
                                                        fellow
                                                        learners,
                                                        and
                                                        work
                                                        on
                                                        hands-on projects to reinforce your understanding.</p>
                                                    <p>Join us online and embark on a journey to master Manual Testing,
                                                        ensuring you
                                                        are
                                                        well-equipped
                                                        to meet the demands of the ever-evolving tech industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card mt-4 mx-auto">
                                        <div class="card-body d-flex flex-column">
                                            <div>
                                                <h2 class="text-capitalize text-center" data-aos="fade-up" data-aos-duration="700"
                                                    data-aos-delay="500"><span class="text-danger">Offline</span>
                                                    classes
                                                </h2>

                                                <div class="d-flex text-center justify-content-center mb-3 mt-2"
                                                    data-aos="flip-right" data-aos-delay="600" data-aos-duration="700">
                                                    <Link to="/contact" class="btn btn-success rounded-pill my-2" >Join Now</Link>
                                                </div>
                                                <div class="mt-3">
                                                    <p class="about class-content text-center"
                                                        data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                                        In A World Dominated By Screens And Virtual Interactions, There's Something Special About Coming Together In Person To Learn And Collaborate. Our Java Fullstack Class Is Designed To Provide You With A Hands-On, Immersive Experience That Will Empower You To Become A Java Fullstack Expert.</p>
                                                    <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                                                        <p class="fs-2 fw-semibold">Course Highlights:</p>
                                                        <p>✔️ Face-to-Face Interaction: Interact directly with instructors
                                                            and fellow
                                                            learners,
                                                            fostering a
                                                            supportive and collaborative learning environment.</p>
                                                        <p>✔️ Networking: Build valuable professional connections with your
                                                            peers,
                                                            instructors, and
                                                            industry
                                                            experts.</p>
                                                        <p>✔️ Physical Resources: Access to physical resources, tools, and
                                                            equipment for
                                                            a
                                                            more
                                                            comprehensive programming experience & learning experience</p>

                                                        <p>Join us offline concepts and practices, and
                                                            leave with
                                                            the
                                                            skills and confidence to excel in the field of Manual Testing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="mt-5">
                            <p
                                class="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text" data-aos="flip-up" data-aos-delay="500" data-aos-duration="500">
                                For Corporates</p>

                            <p style={{
                                textAlign: 'center',
                                padding: '20px',
                                WebkitTransition: 'fade-down 600ms ease-out',
                                transition: 'fade-down 600ms ease-out',
                            }}
                            >Empower your team with new skills to Enhance their performance and productivity</p>
                        </div>
                    </section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="text-center fw-semibold fs-5">Corporate Training</p>
                                <div class="text-capitalize pt-3">
                                    <p class="d-flex"><i class="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Customized course curriculum as per your team’s specific
                                        needs
                                    </p>
                                    <p class="d-flex"><i class="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Training delivery through self-Paced videos
                                        liveInstructor-led
                                        training
                                        through online, on-premise at ATIT or your office facility </p>

                                    <p class="d-flex"><i class="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Resources such as slides, demos, exercises, and answer keys
                                        included</p>
                                    <p class="d-flex"><i class="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Complete guidance on obtaining certification</p>
                                    <p class="d-flex pt-2"><i class="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Complete practical demonstration and discussions on industry
                                        use
                                        cases</p>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <p class="text-center fw-semibold fs-5"> Served 120+ Corporates</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="./../../assets/img/logos.jpg" class="img-fluid mt-2 justify-content-center mx-2 " alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div class="container">
                            <div class="my-5">
                                <p class="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text"
                                    data-aos="flip-up" data-aos-delay="500" data-aos-duration="500">
                                    Java
                                    Certification</p>

                                <p style={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    transition: 'fade-up 500ms ease-out',
                                    transitionDelay: '500ms',
                                    transitionDuration: '500ms',
                                }}
                                >Show the world that you have pursued one
                                    of the
                                    best
                                    in the industry</p>
                                <img id="cerimg" src="./../../assets/img/ceri.jpg" alt="" />
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            {/* <div><Swiper /></div> */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Java
