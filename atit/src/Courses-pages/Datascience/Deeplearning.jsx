import React from 'react'
import Navbar from '../../Components/Navbar'
import Swiper from '../../Components/Swiper'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
function Deeplearning() {
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
                                    Deep <span className ="primary-color">Learning</span>Training
                                </h1>
                                <p
                                    className ="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    Average Salary For Deep Learning Engineers In India - Rs.12 Lakhs Per Annum

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
                                            Deep Learing
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
                            About Deep Learning Training Course</p>
                        <div className ="mt-4 text-center text-capitalize g-3">
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">ATIT Deep Learning Training Will Help You Master And Build Your Deep Learning Skills With Tools That Matter - Docker Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, And More. Instructors Of ATIT Are Experts At Teaching Both The Essentials And Finer Points Of Deep Learning Concepts. This Course Will Take Through The Practical Aspects Of Deep Learning And Help You To Apply These Practices In Real-World Project Examples. Enroll In Our Deep Learning Certification Course To Transform Your Career Into A Deep Learning Engineer.

                            </p>
                            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Experience the unparalleled edge of
                                real-time project training – exclusive to us, as no
                                other
                                institutes
                                can match our offering.</p>
                        </div>
                    </div>
                    <div className ="container">
                        <section className ="course-includes">
                            <div className ="container-fluid">
                                <h2 className ="text-center justify-content-center align-content-center linear-gradient-text pt-5"
                                    data-aos="flip-left" data-aos-duration="500" data-aos-delay="600">
                                    Course
                                    Includes</h2>
                                <div className ="feature-grid row ">
                                    <div className ="feature col-lg-4" data-aos="fade-right" data-aos-duration="500"
                                        data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-macbook-fill"></i>
                                            <p>75 Hours of Sessions</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-down zoom-in" data-aos-duration="700"
                                        data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-time-fill"></i>
                                            <p>Flexible Schedules</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-customer-service-fill"></i>
                                            <p>24/7 Lifetime Support</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-right" data-aos-duration="500"
                                        data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-star-fill"></i>
                                            <p>Certification Oriented Curriculum</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-down zoom-in" data-aos-duration="700"
                                        data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-send-plane-2-fill"></i>
                                            <p>FREE Demo on Request</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                        <div className ="feature-item">
                                            <i className ="ri-user-fill"></i>
                                            <p>One-on-One Doubt Clearing</p>
                                        </div>
                                    </div>
                                    <div className ="feature col-lg-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                        <div className ="feature-item">
                                            <i className ="ri-thumb-up-fill"></i>
                                            <p>Real-time Project Use cases</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className ="container-fluid mt-5 py-4">
                        <p className ="fw-semibold display-6 text-center text-capitalize linear-gradient-text justify-content-center linear-gradient-text"
                            data-aos="flip-right" data-aos-delay="500" data-aos-duration="500">
                            Deep Learning Training Course Content</p>
                        <div className ="mt-4 text-center text-capitalize g-3" data-aos="fade-up" data-aos-delay="300"
                            data-aos-duration="500">
                            <p> This Deep Learning, Training Curriculum Covers The Introduction To Deep Learning, Continuous Integration Automation, Continuous Deployment, Understanding Of Various Categories Of Deep Learning Tools Like Development Life Cycle Management, Configuration Management Tools, Source Code Management, Automation Tool, And Continuous Monitoring Tools. It Also Covers Essential Tools Like Chef, Introduction To Docker, Integration Of Docker, Docker Swarm, Jenkins, Nagios, Etc.</p>
                        </div>
                    </div>

                    <section className ="container my-3 pt-3">
                        <div className ="mt-4">
                            <h2 className ="linear-gradient-text fw-semibold text-center mb-2" data-aos="flip-right"
                                data-aos-duration="500" data-aos-delay="600">Training Options </h2>
                            <p className ="fw-medium text-center mt-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                Choose your own comfortable learning
                                experience.</p>
                            <p className ="text-center  text-center fw-normal" data-aos="fade-up" data-aos-duration="800"
                                data-aos-delay="400">Whether You Choose To Learn Online Or Offline, We're Excited To Have You As Part Of Our Deep Learning Community And Look Forward To Helping You Advance Your Career In The World Of Deep Learning</p>
                        </div>
                    </section>
                    <section>
                        <div className ="container-fluid">
                            <div className ="row">
                                <div className ="col-md-6">
                                    <div className ="card mx-auto mt-4">
                                        <div className ="card-body d-flex flex-column">
                                            <div>
                                                <h2 className ="text-center" data-aos="fade-up" data-aos-duration="700"
                                                    data-aos-delay="500"><span className ="text-success">Online</span> Classes
                                                </h2>
                                                <div className ="d-flex text-center justify-content-center mb-3 mt-2"
                                                    data-aos="flip-right" data-aos-delay="600" data-aos-duration="700">
                                                    <Link to="/contact" className ="btn btn-success rounded-pill my-2" >Join Now</Link>
                                                </div>
                                                <p className ="about class-content text-center" data-aos="fade-up"
                                                    data-aos-duration="800" data-aos-delay="600">In Today's Digital Age, Deep Learning Has Become An Essential Practice For Organizations Looking To Streamline Their Software Development And IT Operations. This Online Course Is Designed To Provide You With The Knowledge And Skills Needed To Excel In The World Of Deep Learning, All From The Comfort Of Your Own Home Or Office.</p>
                                                <div className ="" data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                                                    <p className ="fs-2 fw-semibold">Course Highlights:</p>
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
                                <div className ="col-md-6">
                                    <div className ="card mt-4 mx-auto">
                                        <div className ="card-body d-flex flex-column">
                                            <div>
                                                <h2 className ="text-capitalize text-center" data-aos="fade-up" data-aos-duration="700"
                                                    data-aos-delay="500"><span className ="text-danger">Offline</span>
                                                    classes
                                                </h2>

                                                <div className ="d-flex text-center justify-content-center mb-3 mt-2"
                                                    data-aos="flip-right" data-aos-delay="600" data-aos-duration="700">
                                                    <Link to="/contact" className ="btn btn-success rounded-pill my-2" >Join Now</Link>
                                                </div>
                                                <div className ="mt-3">
                                                    <p className ="about class-content text-center"
                                                        data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                                        In A World Dominated By Screens And Virtual Interactions, There's Something Special About Coming Together In Person To Learn And Collaborate. Our Deep Learning Class Is Designed To Provide You With A Hands-On, Immersive Experience That Will Empower You To Become A Deep Learning Expert.</p>
                                                    <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                                                        <p className ="fs-2 fw-semibold">Course Highlights:</p>
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
                        <div className ="mt-5">
                            <p
                                className ="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text" data-aos="flip-up" data-aos-delay="500" data-aos-duration="500">
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
                    <div className ="container">
                        <div className ="row">
                            <div className ="col-md-6">
                                <p className ="text-center fw-semibold fs-5">Corporate Training</p>
                                <div className ="text-capitalize pt-3">
                                    <p className ="d-flex"><i className ="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Customized course curriculum as per your team’s specific
                                        needs
                                    </p>
                                    <p className ="d-flex"><i className ="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Training delivery through self-Paced videos
                                        liveInstructor-led
                                        training
                                        through online, on-premise at ATIT or your office facility </p>

                                    <p className ="d-flex"><i className ="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Resources such as slides, demos, exercises, and answer keys
                                        included</p>
                                    <p className ="d-flex"><i className ="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Complete guidance on obtaining certification</p>
                                    <p className ="d-flex pt-2"><i className ="fa-regular pt-2 fa-hand-point-right fa-fade mx-2 fs-6"
                                        style={{
                                            color: '#051838',
                                        }}
                                    ></i>Complete practical demonstration and discussions on industry
                                        use
                                        cases</p>

                                </div>
                            </div>
                            <div className ="col-md-6">
                                <p className ="text-center fw-semibold fs-5"> Served 120+ Corporates</p>
                                <div className ="d-flex justify-content-center align-items-center">
                                    <img src="./../../assets/img/logos.jpg" className ="img-fluid mt-2 justify-content-center mx-2 " alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className ="container">
                            <div className ="my-5">
                                <p className ="fw-semibold display-6 text-center text-capitalize justify-content-center linear-gradient-text"
                                    data-aos="flip-up" data-aos-delay="500" data-aos-duration="500">
                                    DeepLearning
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

export default Deeplearning
