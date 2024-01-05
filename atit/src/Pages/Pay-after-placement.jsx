import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Company from '../Components/Company'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import LeftBar from '../Components/LeftBar'
import Rocket from '../Components/Rocket'

function Pap() {
    return (
        <div>
            <Navbar />
            {/* hero banner */}
            <div>
                <section
                    style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
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
                                    Pay <span class="primary-color">After </span>Placement
                                </h1>
                                <p
                                    class="text-light fs-6 text-capitalize fw-light"
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
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li
                                            class="breadcrumb-item active text-white"
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
                <div class="container py-5 overflow-hidden">
                    <section>
                        <p
                            class="text-capitalize text-center display-6 mt-3 fw-bold linear-gradient-text"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            Pay After Placement Program
                        </p>
                        <p
                            class="text-center justify-content-center mt-1 text-capitalize"
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
                <div class="container overflow-hidden acc-bg" id="placement-accordion">
                    <div class="accordion" id="accordionExample">
                        <div class="row justify-content-center">
                            <div class="col-md-6" data-aos="fade-left" data-aos-duration="600">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step1.jpg"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                    alt="step 1 image"
                                                />
                                            </div>
                                            <div>Skill Assessment and Salary Discussion</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
                                            <p>
                                                We begin by assessing your skills and discussing your salary
                                                expectations. We will explain the Pay After Placement
                                                program how it suits your specific aspirations as an
                                                Automation Testing, Full Stack, or DevOps enthusiast.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step2.jpg"
                                                    alt="step 2 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Affordable Training Investment</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
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
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step3.jpg"
                                                    alt="step 3 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Comprehensive Training</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
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
                            <div class="col-md-6" data-aos="fade-right" data-aos-duration="600">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFourth"
                                            aria-expanded="false"
                                            aria-controls="collapseFourth"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step4.jpg"
                                                    alt="step 4 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Income Sharing Agreement</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFourth"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
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
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step5.jpg"
                                                    alt="step 5 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Elevate Your Profile</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
                                            <p>
                                                We'll help you create an impressive resume, provide
                                                interview practice, and offer communication training. We'll
                                                also assist in scheduling interviews, ensuring you're
                                                well-prepared to crack the interview and get an offer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step6.jpg"
                                                    alt="step 6 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Securing Your Job</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
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
                                class="col-md-6 mt-md-4"
                                data-aos="fade-down"
                                data-aos-duration="700"
                            >
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button collapsed shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven"
                                            aria-expanded="false"
                                            aria-controls="collapseSeven"
                                        >
                                            <div class="pe-2 col-2">
                                                <img
                                                    src="./assets/img/step7.jpg"
                                                    alt="step 7 image"
                                                    class="rounded-2"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            </div>
                                            <div>Optional Job Support - Up to 3 months</div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSeven"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div class="accordion-body">
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
                    <div class="wrapper" id="finisher-canvas">
                        <div class="container py-5 overflow-hidden">
                            <p
                                class="text-capitalize text-center display-6 mt-3 fw-bold py-5"
                                id="text-colors"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                HighLights Of Pay After Placement Program
                            </p>
                            <div class="row">
                                <div class="col-md-4">
                                    <div
                                        class="p-2 h-100 pap-cards-lin pap-cards-lines bg-transparent"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div class="card-body" id="text-colors">
                                            <div class="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/wallet_3574953.png"
                                                    alt="wallet image"
                                                />
                                            </div>
                                            <h4 class="card-title py-3">Flexible Payment Options</h4>
                                            <p class="card-text text-center">
                                                The program offers flexible payment options for students who
                                                want to enroll but may not be able to afford the full
                                                tuition upfront. This allows them to pay their course fees
                                                only after they secure a job through the academy's placement
                                                services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-down"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div class="card-body" id="text-colors">
                                            <div class="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/save.png"
                                                    alt="savings image"
                                                />
                                            </div>
                                            <h4 class="card-title py-3">Cost-Effective</h4>
                                            <p class="card-text text-center">
                                                By allowing students to pay their course fees only after
                                                securing a job, the program helps reduce financial burdens
                                                on individuals who may otherwise struggle to cover the
                                                entire cost of the training at once.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div class="card-body" id="text-colors">
                                            <div class="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/work_7902082.png"
                                                    alt="workig image"
                                                />
                                            </div>
                                            <h4 class="card-title py-3">100% Job Security</h4>
                                            <p class="card-text text-center">
                                                Your Future, Secured: Enjoy 100% Job Guarantee. We're
                                                dedicated to your success, ensuring a fulfilling career with
                                                unwavering job security. Trust in our support for a
                                                confident professional journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4 justify-content-center">
                                <div class="col-md-4">
                                    <div
                                        class="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div class="card-body" id="text-colors">
                                            <div class="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/job-interview_3629599.png"
                                                    alt="interview image"
                                                />
                                            </div>
                                            <h4 class="card-title py-3">1 on 1 attention</h4>
                                            <p class="card-text text-center">
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
                                <div class="col-md-4">
                                    <div
                                        class="p-2 h-100 pap-cards-lin bg-transparent"
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                        id="pap-cards"
                                    >
                                        <div class="card-body" id="text-colors">
                                            <div class="flexi">
                                                <img
                                                    src="./assets/img/Hightlight/online-learning_2436855.png"
                                                    alt="learning image"
                                                />
                                            </div>
                                            <h4 class="card-title py-3">Job-Oriented Training</h4>
                                            <p class="card-text text-center">
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
                                    class="d-flex justify-content-center my-5"
                                >
                                    <Link to="/contact" class="btn primary-btn mt-2">Join Now</Link>
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
            <LeftBar />
            {/* Rocket */}
            <Rocket />
        </div>

    )
}

export default Pap
