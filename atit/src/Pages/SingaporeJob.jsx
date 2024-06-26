import Navbar from '../Components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../Components/Company'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import LeftBar from '../Components/LeftBar'
import Rocket from '../Components/Rocket'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SingaporeJob() {
    const buttonStyle = {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: 'gray',
    };
  return (
    <div>
         <div className='singapore-job'>
            <Navbar />
            <div>
                <section id="hero" className="hero">
                    <img src="./assets/img/singaporeBg.gif" alt="singaporebg2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="zoom-in"
                                data-aos-delay="100">
                                <p className="display-6 text-white primary-header" data-aos="fade-right" data-aos-duration="400">
                                    Singapore<span className="primary-color mx-2 fw-bold">job</span> placement
                                </p>
                                <p className='text-white' data-aos="fade-up" data-aos-onDurationChange="700">
                                    Hone your skills, land your dream Singapore tech job with
                                    Chennai's premier IT placement program
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='page-heading'>
                    <div className="container">
                        <p className=' secondary-header text-center linear-gradient-text' data-aos="fade-up" data-aos-duration="400">Conquering the Lion City: Elite Automation Testing & Front-End Development Training & Placements in Singapore </p>
                        <p className='text-center' data-aos="fade-up" data-aos-duration="500">Are you an IT whiz hungry for challenge and high-growth opportunities? Is Singapore's vibrant tech scene calling your name? Then our elite placement program is your rocket ship to success.</p>

                    </div>
                </section>
                <section id="services" class="services section-bg primary-mb py-5">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <p class="text-center primary-header display-6 pb-5 linear-gradient-text fw-bold">Program Details</p>
                        </div>
                        <div class="row">
                            <div
                                class="col-xl-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <div class="icon-box rounded-3">
                                    <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                    <h4>Intensive training</h4>
                                    <p>
                                        Master in-demand skills like Selenium, Appium, Java, Python,
                                        and cloud technologies under the guidance of industry experts
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div class="icon-box rounded-3">
                                    <div class="icon"><i class="bx bx-file"></i></div>
                                    <h4>Singapore job placement</h4>
                                    <p>
                                        We bridge the gap. Land your dream job in top Singaporean
                                        companies through our dedicated placement partnership
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div class="icon-box rounded-3">
                                    <div class="icon"><i class="bx bx-tachometer"></i></div>
                                    <h4>Elite cohort</h4>
                                    <p>
                                        Network and learn alongside like-minded, ambitious
                                        professionals in a small, focused group
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <div class="icon-box rounded-3">
                                    <div class="icon"><i class="bx bx-layer"></i></div>
                                    <h4>Chennai advantage</h4>
                                    <p>
                                        Get world-class training at a fraction of the cost compared to
                                        Singapore, while enjoying the cultural richness of Chennai
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='singapore-benefits py-5'>
                    <div className='container'>
                        <div className='text-center pt-3 mt-2'>
                            <h2 className='primary-header linear-gradient-text fw-bold py-1' data-aos="fade-up" data-aos-duration="400">Benefits</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-4  d-flex justify-content-center'>
                                <div className=' px-5 mx-3'>
                                    <div className='pt-3 mt-3' data-aos="fade-right" data-aos-duration="500">
                                        <h4 style={{ color: '#f7851d' }}>High-paying careers:</h4>
                                        <p className='pt-2 benefit-p'> <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon arrow1" /> Command top salaries in Singapore's booming tech market</p>
                                    </div>

                                    <div className='pt-3 mt-3' data-aos="fade-right" data-aos-duration="600">
                                        <h4 style={{ color: '#f7851d' }}>Growth opportunities:</h4>
                                        <p className='pt-2 benefit-p'> <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon arrow1" /> Upskill for advanced roles in automation testing and development</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <img src="./assets/img/benefitimg.png" alt="" className='img-fluid' />
                                </div>
                            </div>

                            <div className='col-md-4  d-flex justify-content-center'>
                                <div className=' px-5 mx-3'>

                                    <div className='pt-3 mt-3' data-aos="fade-left" data-aos-duration="500">
                                        <h4 style={{ color: '#f7851d' }}>Immigration support:</h4>
                                        <p className='pt-2 benefit-p'> <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon arrow1" /> Access our guidance for a smooth transition to Singapore</p>
                                    </div>
                                    <div className='pt-3 mt-3' data-aos="fade-left" data-aos-duration="600">
                                        <h4 style={{ color: '#f7851d' }}>Lifetime network:</h4>
                                        <p className='pt-2 benefit-p'> <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon arrow1" /> Build lasting connections with peers and industry experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <section id="features" class="features py-5">
                    <div className='container text-center'>
                        <p className='text-center text-capitalize mb-3 display-6 linear-gradient-text fw-semibold'>Testimonials</p>
                        {/* <p className='text-center mt-2'>Outcome Of Our Quality Training</p> */}
                        <div id="carouselExampleInterval" class="carousel slide pb-5 mb-5" data-bs-ride="carousel">
                            <div class="carousel-indicators d-flex mt-5 pt-5">
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" style={buttonStyle} class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" style={buttonStyle} aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner py-2">
                                <div class="carousel-item active" data-bs-interval="3000">
                                    <div className='testimonial-item'>
                                        <div >
                                            <div class="mb-1" data-aos="flip-left" data-aos-easing="ease-in-sine"><i
                                                class="bi bi-person-circle"></i></div>
                                            <p>
                                                "This program transformed my career. I landed a senior QA role at
                                                a leading Singaporean tech company within months of graduation."
                                                <br />
                                                <br />
                                                Sarah T - Program alumna
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <div className='testimonial-item'>
                                        <div >
                                            <div class="mb-1" data-aos="flip-left" data-aos-easing="ease-in-sine"><i
                                                class="bi bi-person-circle"></i></div>
                                            <p>
                                                The training was rigorous but rewarding. The job placement support was
                                                invaluable. I wouldn&#39;t be where I am today without this program.
                                                <br />
                                                <br />
                                                John L - Program alumnus
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className='text-center fw-bold' data-aos="fade-up" data-aos-duration="300">Ready to conquer Singapore&#39;s tech scene? Don&#39;t settle for ordinary. Apply to our
                            elite program today and take your first step towards a rewarding career in the Lion
                            City.</p>
                    </div>
                </section>

                <section>
                    <div className="container overflow-hidden acc-bg py-5" id="placement-accordion">
                        <div>
                            <h2 className='text-center secondary-header py-5 fw-bold linear-gradient-text' data-aos="fade-up" data-aos-duration="600">Frequently Asked Questions</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="row justify-content-center">
                                <div className="col-md-10" data-aos="fade-left" data-aos-duration="600">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step1.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                    alt="./assets/img/step1.jpg"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> Is this program right for me?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    This program is ideal for IT professionals with a strong foundation in programming and a genuine passion for automation testing and development. If you're ambitious, eager to learn, and excited about a career in Singapore's booming tech scene, then this program could be your launchpad to success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step2.jpg"
                                                    alt="./assets/img/step2.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> What are the entry requirements?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We look for candidates with a bachelor's degree in computer science or a related field, proven programming skills (Java, Python preferred), and a minimum of 1 year of IT experience. A strong work ethic, dedication to learning, and fluency in English are essential.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step3.jpg"
                                                    alt="./assets/img/step3.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> What will I learn in the program?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Our curriculum covers everything you need to become a confident automation testing and development professional. You'll master in-demand tools like Selenium, Appium, Java, Python, and cloud technologies, delve into advanced testing methodologies, and gain practical experience through real-world projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFourth"
                                                aria-expanded="false"
                                                aria-controls="collapseFourth"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step4.jpg"
                                                    alt="./assets/img/step4.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> How does the job placement work?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFourth"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We have a dedicated placement team partnered with top Singaporean tech companies. They'll guide you through resume building, interview prep, and mock interviews, and actively connect you with relevant job openings aligned with your skills and interests.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step5.jpg"
                                                    alt="./assets/img/step5.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> Is financial aid available?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We offer flexible payment options and scholarship opportunities to make the program accessible to deserving candidates. Please contact us for further details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="false"
                                                aria-controls="collapseSix"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step6.jpg"
                                                    alt="./assets/img/step6.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> What is the visa process for working in Singapore?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We provide comprehensive support and guidance throughout the visa application process to ensure a smooth transition to Singapore. Our team will help you navigate the necessary paperwork and requirements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven"
                                                aria-expanded="false"
                                                aria-controls="collapseSeven"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step7.jpg"
                                                    alt="./assets/img/step7.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i > What about accommodation and living in Singapore?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSeven"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We offer pre-arrival support to help you find suitable accommodation in Singapore, whether you prefer shared housing or solo living. We can also connect you with our program alumni who can share their experiences and advice about living in the city.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight"
                                                aria-expanded="false"
                                                aria-controls="collapseEight"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step7.jpg"
                                                    alt="./assets/img/step7.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> When does the next program start?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseEight"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    We offer rolling admissions with new cohorts starting several times a year. Please contact us to inquire about the exact start date for the next program.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNine"
                                                aria-expanded="false"
                                                aria-controls="collapseNine"
                                            >
                                                {/* <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step7.jpg"
                                                    alt="./assets/img/step7.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div> */}
                                                <div><i className="bi bi-question-diamond"></i> Don't see your question answered here?</div>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseNine"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    No problem! Contact us directly, and we'll be happy to address any further inquiries you may have.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Company />
            {/* footer */}
            <Footer />
            {/* contcat form */}
            <ContactForm />
            {/* leftbar */}
            <LeftBar />
            {/* Rocket */}
            <Rocket />
        </div>
    </div>
  )
}

export default SingaporeJob