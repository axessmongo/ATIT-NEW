import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import Swiper from '../../Components/Swiper'

function Artificial() {
    return (
        <div className='overflow-x-hidden'>
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
                                    Artificial <span className ="primary-color">Intelligence </span>Training
                                </h1>
                                <p
                                    className ="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    Average salary for Artifical Intelligence engineers in India - Rs.12 Lakhs Per Annum.
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
                                            Artificial Intellingence
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
                            About
                            Artificial Intelligence Training Course</p>
                        <div className ="mt-4 text-center text-capitalize g-3">
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200"> ATIT Artificial Intelligence Training will help you
                                master and build your Artificial Intelligence skills with tools that
                                matter -
                                Docker
                                Networks, Development Cycles, Puppet, Ansible, Chef, Vagrant, Jenkins, Nagios, and more.
                                Instructors
                                of
                                ATIT are experts at teaching both the essentials and finer points of Artificial Intelligence Concepts.
                                This course
                                will
                                take through the practical aspects of Artificial Intelligence and help you to apply these practices in
                                real-world
                                project
                                examples. Enroll in our Artificial Intelligence certification course to transform your career into a
                                Artificial Intelligence Engineer.
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
                            Artificial Intelligence Training Course Content</p>
                        <div className ="mt-4 text-center text-capitalize g-3" data-aos="fade-up" data-aos-delay="300"
                            data-aos-duration="500">
                            <p> This  Artificial Intelligence, training curriculum covers the introduction to  Artificial Intelligence, Continuous
                                Integration
                                Automation,
                                Continuous Deployment, understanding of various categories of  Artificial Intelligence tools like
                                Development Life
                                Cycle
                                Management, configuration management tools, Source code management, Automation tool, and
                                Continuous
                                monitoring tools. It also covers essential tools like Chef, Introduction to Docker,
                                Integration of
                                Docker, Docker Swarm, Jenkins, Nagios, etc.</p>
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
                                data-aos-delay="400">Whether you choose to learn online or
                                offline, we're excited to have you as part of our Artificial Intelligence community and look forward to
                                helping you
                                advance your career in the world of Artificial Intelligence!</p>
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
                                                    data-aos-duration="800" data-aos-delay="600">In today's digital
                                                    age, Artificial Intelligence
                                                    has
                                                    become an
                                                    essential
                                                    practice for
                                                    organizations looking to streamline their software development and
                                                    IT
                                                    operations.
                                                    This
                                                    online
                                                    course is designed to provide you with the knowledge and skills
                                                    needed to excel
                                                    in
                                                    the
                                                    world
                                                    of
                                                    Artificial Intelligence, all from the comfort of your own home or office.</p>
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
                                                        In a world
                                                        dominated by
                                                        screens and virtual interactions, there's something
                                                        special about coming together in person to learn and
                                                        collaborate. Our Artificial Intelligence
                                                        class is
                                                        designed
                                                        to provide you with a hands-on, immersive experience that will
                                                        empower you
                                                        to
                                                        become a
                                                        Artificial Intelligence
                                                        expert..</p>
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
                                    AI
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
            <div>
                <Swiper/>
            </div>
            
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Artificial
