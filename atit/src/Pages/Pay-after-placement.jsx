import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Company from '../Components/Company'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import LeftBar from '../Components/LeftBar'
import Rocket from '../Components/Rocket'

function Pap() {
    var continueTimeouts = true;
    var timeouts = [];
  
    function openAccordionsOneByOne() {
      clearTimeouts(); // Clear existing timeouts
  
      var accordionButtons = document.querySelectorAll('.accordion-button');
      accordionButtons.forEach(function (button, index) {
        var timeout = setTimeout(function () {
          if (continueTimeouts) {
            button.click();
          }
        }, index * 3000);
  
        timeouts.push(timeout);
  
        button.addEventListener('mouseup', function (event) {
          if (event.button === 0) {
            continueTimeouts = true;
            clearTimeouts();
          }
        });
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function handleScroll() {
      var section = document.getElementById('placement-accordion');
      if (section && isElementInViewport(section)) {
        openAccordionsOneByOne();
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    function clearTimeouts() {
      timeouts.forEach(function (timeout) {
        clearTimeout(timeout);
      });
      timeouts = [];
    }
  
    window.addEventListener('scroll', handleScroll);
    return (
        <div>
            <Navbar />
            {/* hero banner */}
            <div>
                <section
                    style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
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
                                    Pay <span className ="primary-color">After </span>Placement
                                </h1>
                                <p
                                    className ="text-light fs-6 text-capitalize fw-light"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    Discover a smooth ride with ATIT's Pay After Placement program.
                                    We've laid out a clear and organized path to guide you
                                    effortlessly.
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
                                        <li className ="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li
                                            className ="breadcrumb-item active text-white"
                                            aria-current="page"
                                        >
                                            PAP
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                {/* top head */}
                <div className ="container py-5 overflow-hidden">
                    <section>
                        <p
                            className ="text-capitalize text-center display-6 mt-3 fw-bold linear-gradient-text"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            Pay After Placement Program
                        </p>
                        <p
                            className ="text-center justify-content-center mt-1 text-capitalize"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            ATIT's intriguing programs on Automation Testing, Full Stack, and
                            DevOps are trend setters in career transition. We fulfil your
                            aspirations to enter the IT world. Our straightforward Pay After
                            Placement program helps you achieve your career goals.ATIT provides a
                            clear step by step process through the Pay After Placement Program to
                            help you obtain your dream Job in IT sector.
                        </p>
                    </section>
                </div>
            </div>
            <div>
                <div className ="container overflow-hidden acc-bg" id="placement-accordion">
                    <div className ="accordion" id="accordionExample">
                        <div className ="row justify-content-center">
                            <div className ="col-md-6" data-aos="fade-left" data-aos-duration="600">
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step1.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                    alt="./assets/img/step1.jpg"
                                                />
                                            </div>
                                            <div>Skill Assessment and Salary Discussion</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                We begin by assessing your skills and discussing your salary
                                                expectations. We will explain the Pay After Placement
                                                program how it suits your specific aspirations as an
                                                Automation Testing, Full Stack, or DevOps enthusiast.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step2.jpg"
                                                    alt="./assets/img/step2.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Affordable Training Investment</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                To kickstart your journey, we require Minimal Initial
                                                Charges (5% to 10%) for Job-Oriented Training and
                                                Application Processing. Remaining 90% after Placement. If,
                                                within 6 months after completing the training, we don't
                                                secure a job for you, we'll refund this fee.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step3.jpg"
                                                    alt="./assets/img/step3.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Comprehensive Training</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                Our program includes a 3-month training period, consisting
                                                of 45 days of online training and 45 days of hands-on live
                                                project experience in an offline setting. We ensure you're
                                                well-prepared for your future career in automation Testing,
                                                Full Stack Development, or DevOps.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-md-6" data-aos="fade-right" data-aos-duration="600">
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFourth"
                                            aria-expanded="false"
                                            aria-controls="collapseFourth"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step4.jpg"
                                                    alt="./assets/img/step4.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Income Sharing Agreement</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFourth"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                After the successful completion of the comprehensive
                                                training for 3 months, you'll sign an Income Sharing
                                                Agreement. This agreement outlines that you'll pay us 35% of
                                                your annual CTC immediately after receiving the job offer
                                                letter. If you choose to finance your training through our
                                                loan partners, the payment increases to 45% of your annual
                                                CTC.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step5.jpg"
                                                    alt="./assets/img/step5.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Elevate Your Profile</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                We'll help you create an impressive resume, provide
                                                interview practice, and offer communication training. We'll
                                                also assist in scheduling interviews, ensuring you're
                                                well-prepared to crack the interview and get an offer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step6.jpg"
                                                    alt="./assets/img/step6.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Securing Your Job</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                Once you receive a job offer, we'll assist you in either
                                                proceeding with the loan process or making the agreed-upon
                                                payment as per the Income Sharing Agreement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className ="col-md-6 mt-md-4"
                                data-aos="fade-down"
                                data-aos-duration="700"
                            >
                                <div className ="accordion-item">
                                    <h2 className ="accordion-header">
                                        <button
                                            className ="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven"
                                            aria-expanded="false"
                                            aria-controls="collapseSeven"
                                        >
                                            <div className ="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step7.jpg"
                                                    alt="./assets/img/step7.jpg"
                                                    className ="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Optional Job Support - Up to 3 months</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSeven"
                                        className ="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className ="accordion-body">
                                            <p>
                                                After landing your job, you can choose to receive job
                                                support from ATIT. This is an optional offline-only service
                                                for an additional charge.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section id="placements">
                    <div className ="wrapper" id="finisher-canvas">
                        <div className ="container py-5 overflow-hidden">
                            <p
                                className ="text-capitalize text-center display-6 mt-3 fw-bold py-5"
                                id="text-colors"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                HighLights Of Pay After Placement Program
                            </p>
                            <div className ="row">
                                <div className ="col-md-4">
                                    <div
                                        className ="p-2 h-100 pap-cards-lin pap-cards-lines bg-transparent"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div className ="card-body" id="text-colors">
                                            <div className ="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/wallet_3574953.png"
                                                    alt="./assets/img/Hightlight/wallet_3574953.png"
                                                />
                                            </div>
                                            <h4 className ="card-title py-3">Flexible Payment Options</h4>
                                            <p className ="card-text text-center">
                                                The program offers flexible payment options for students who
                                                want to enroll but may not be able to afford the full
                                                tuition upfront. This allows them to pay their course fees
                                                only after they secure a job through the academy's placement
                                                services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="col-md-4">
                                    <div
                                        className ="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-down"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div className ="card-body" id="text-colors">
                                            <div className ="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/save.png"
                                                    alt="./assets/img/Hightlight/save.png"
                                                />
                                            </div>
                                            <h4 className ="card-title py-3">Cost-Effective</h4>
                                            <p className ="card-text text-center">
                                                By allowing students to pay their course fees only after
                                                securing a job, the program helps reduce financial burdens
                                                on individuals who may otherwise struggle to cover the
                                                entire cost of the training at once.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="col-md-4">
                                    <div
                                        className ="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div className ="card-body" id="text-colors">
                                            <div className ="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/work_7902082.png"
                                                    alt="./assets/img/Hightlight/work_7902082.png"
                                                />
                                            </div>
                                            <h4 className ="card-title py-3">100% Job Security</h4>
                                            <p className ="card-text text-center">
                                                Your Future, Secured: Enjoy 100% Job Guarantee. We're
                                                dedicated to your success, ensuring a fulfilling career with
                                                unwavering job security. Trust in our support for a
                                                confident professional journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className ="row mt-4 justify-content-center">
                                <div className ="col-md-4">
                                    <div
                                        className ="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div className ="card-body" id="text-colors">
                                            <div className ="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/job-interview_3629599.png"
                                                    alt="./assets/img/Hightlight/job-interview_3629599.png"
                                                />
                                            </div>
                                            <h4 className ="card-title py-3">1 on 1 attention</h4>
                                            <p className ="card-text text-center">
                                                The academy provides personalized support to its students
                                                throughout the training process, including assistance with
                                                resume building, interview preparation, and networking
                                                opportunities. This support continues even after finishing
                                                the course, helping alumni navigate the job market and
                                                achieve long-term success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className ="col-md-4">
                                    <div
                                        className ="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div className ="card-body" id="text-colors">
                                            <div className ="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/online-learning_2436855.png"
                                                    alt="./assets/img/Hightlight/online-learning_2436855.png"
                                                />
                                            </div>
                                            <h4 className ="card-title py-3">Job-Oriented Training</h4>
                                            <p className ="card-text text-center">
                                                Our focused training equips you with the practical skills
                                                and knowledge essential for today's job market. Tailored to
                                                industry needs, our program ensures you're job-ready and
                                                primed for success in the competitive landscape.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-easing="ease-in-sine"
                                    className ="d-flex justify-content-center my-5"
                                >
                                    <Link to="/contact" className ="btn primary-btn mt-2">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <Company />
                </div>
            </div>
            {/* footer */}
            <Footer />
            {/* contcat form */}
            <ContactForm />
            {/* leftbar */}
            <LeftBar noPap={true} />
            {/* Rocket */}
            <Rocket />
        </div>

    )
}

export default Pap
