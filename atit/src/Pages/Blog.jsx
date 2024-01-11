import { React, useEffect } from 'react'
import Footer from '../Components/Footer'
import Company from '../Components/Company'
import { Link } from 'react-router-dom'
import AOS from 'aos'


const Blog = () => {
    useEffect(() => {
        const handleNavLinkClick = () => {
            AOS.refresh();
        };

        // Assuming you have a similar HTML structure and class names in your React component
        const navLinks = document.querySelectorAll('.nav-pills .nav-link');

        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            // Cleanup event listeners when the component unmounts
            navLinks.forEach((navLink) => {
                navLink.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);
    return (
        <div className='blog overflow-x-hidden'>
            <div>
                {/* blog banner */}
                <section className="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5"
                    style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}>
                    <div className="container z-3 text-center">
                        <div className="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
                            <div>
                                <h1 data-aos="fade-up" data-aos-duration="500" className="primary-header">
                                    <span className="primary-color">Blog</span>
                                </h1>
                                <p className="text-light fs-6 text-capitalize fw-light" data-aos="fade-up" data-aos-duration="700">
                                    Embarking on the journey from academia to the professional world is an exhilarating experience,
                                    marked by the transition from classrooms to boardrooms. We will explore the significance of
                                    placement and training, providing valuable insights for both students and organizations.</p>
                                <nav data-aos="fade-up" data-aos-duration="800"
                                    style={{
                                        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")'
                                    }}

                                    aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                {/*  */}
                <div className="container-fluid">
                    <div className="d-flex justify-content-center my-5 pap-card">
                        <ul className="nav nav-pills mb-5 text-center justify-content-md-evenly justify-content-center my-5 text-capitalize p-10 m-0 w-100"
                            id="pills-tab" role="tablist">

                            <div className="col-12 col-md d-flex justify-content-center">
                                <li className="nav-item py-1 w-100 d-flex align-items-center justify-content-center"
                                    data-aos="fade-left" data-aos-duration="400" role="presentation">
                                    <button
                                        className="nav-link col-4 col-md-12 active border pap-card  py-2 px-5  bg-primary text-white"
                                        id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-All" type="button"
                                        role="tab" aria-controls="pills-All" aria-selected="true">All
                                    </button>
                                </li>
                            </div>


                            <div className="col-6 col-md justify-content-center">
                                <li className="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                                    data-aos-duration="700" role="presentation">
                                    <button
                                        className="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly custom-testing-style bg-primary text-white "
                                        id="pills-IT-tab" data-bs-toggle="pill" data-bs-target="#pills-IT" type="button" role="tab"
                                        aria-controls="pills-IT" aria-selected="false">IT Jobs</button>
                                </li>
                            </div>

                            <div className="col-6 col-md justify-content-center">
                                <li className="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                                    data-aos-duration="1000" role="presentation">
                                    <button
                                        className="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                                        id="pills-Interviews-tab" data-bs-toggle="pill" data-bs-target="#pills-Interviews"
                                        type="button" role="tab" aria-controls="pills-Interviews"
                                        aria-selected="false">Interviews</button>
                                </li>
                            </div>

                            <div className="col-6 col-md justify-content-center">
                                <li className="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                                    data-aos-duration="1000" role="presentation">
                                    <button
                                        className="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                                        id="pills-Technical-tab" data-bs-toggle="pill" data-bs-target="#pills-Technical"
                                        type="button" role="tab" aria-controls="pills-Technical"
                                        aria-selected="false">Tech-Skills</button>
                                </li>
                            </div>

                            <div className="col-6 col-md">
                                <li className="nav-item py-1 d-flex align-items-center justify-content-center px-2" data-aos="fade-left"
                                    data-aos-duration="1000" role="presentation">
                                    <button
                                        className="nav-link w-100 border pap-card d-flex flex-column text-center align-items-center py-2 h-100 justify-content-evenly bg-primary text-white"
                                        id="pills-Others-tab" data-bs-toggle="pill" data-bs-target="#pills-Others" type="button"
                                        role="tab" aria-controls="pills-Others" aria-selected="false">Others</button>
                                </li>
                            </div>

                        </ul>

                    </div>

                    <div className="tab-content text-center" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-All" role="tabpanel" aria-labelledby="pills-All-tab"
                            tabIndex="0">
                            <div className="container">
                                <div className="row" id="loadMoreSection">
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="emergingtechnologies" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog4.png" alt=" Emerging Technologies" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="emergingtechnologies" className="text-decoration-none blog-title blog-title">
                                            Emerging Technologies
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="chandrayaanProject" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog2.png" alt=" Job-Hunting Lessons chandrayaan 3 image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Others</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="chandrayaanProject" className="text-decoration-none blog-title blog-title">
                                            Job-Hunting Lessons chandrayaan 3
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="exploringlucrative" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog3.png" alt="Lucrative IT Jobs image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">IT-Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="exploringlucrative"
                                            className="text-decoration-none blog-title blog-title">
                                            Lucrative IT Jobs
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="stellarResume" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog10.png" alt=" Polishing Up Your Resume " />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="stellarResume" className="text-decoration-none blog-title blog-title">

                                            Polishing Up Your Resume
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="understandingTheItIndustry" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog5.png" alt="Change In Career" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="understandingTheItIndustry" className="text-decoration-none blog-title blog-title">
                                            Change In Career
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="ultimateGuide" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog10.png" alt=" Common Pitfalls In Interviews" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="ultimateGuide"
                                            className="text-decoration-none blog-title blog-title">
                                            Common Pitfalls In Interviews
                                        </Link>
                                    </div>
                                    {/* more content */}
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="careerCompleteGuide" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog5.png" alt="Employment opportunities image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="careerCompleteGuide" className="text-decoration-none blog-title blog-title">
                                            Employment opportunities
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="competitiveJobMarket" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog8.png" alt="The Job Market In 2023 image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="competitiveJobMarket" className="text-decoration-none blog-title blog-title">
                                            The Job Market In 2023
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="jobRace" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog6.png" alt="Get Ahead Of The Job Race image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category"> IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="jobRace" className="text-decoration-none blog-title blog-title">
                                            Get Ahead Of The Job Race
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="strategyForSuccess" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/blogimg.jpg" alt=" Clear Any Professional Exam" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">Others</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="strategyForSuccess" className="text-decoration-none blog-title blog-title">
                                            Clear Any Professional Exam
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="firstItjobInterview" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog7.png" alt="Your First IT Job Interview image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="firstItjobInterview" className="text-decoration-none blog-title blog-title">
                                            Your First IT Job Interview
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="boomingItSector" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog4.png" alt="Dynamic Indian Job Market image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="boomingItSector" className="text-decoration-none blog-title blog-title">
                                            Dynamic Indian Job Market
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="dynamicsItJob" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog11.png" alt="Dynamics Of IT " />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="dynamicsItJob" className="text-decoration-none blog-title blog-title">
                                            Dynamics Of IT

                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4 pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="masteringTechnicalInterviews" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog12.png" alt="Clear Technical Interviews image" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="masteringTechnicalInterviews" className="text-decoration-none blog-title blog-title">
                                            Clear Technical Interviews
                                        </Link>
                                    </div>

                                </div>
                                {/* <div data-aos="fade-up" data-aos-duration="700" className ="d-flex mt-3">
                                    <button id="loadMoreBtn" onClick={()=>{showMoreContent()}} className ="btn primary-btn mb-5 mx-auto">Load More</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-IT" role="tabpanel" aria-labelledby="pills-IT-tab" tabIndex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="exploringlucrative" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog3.png" alt="Lucrative IT Job Opportunities " />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">IT-Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="exploringlucrative" className="text-decoration-none blog-title blog-title">
                                            Lucrative IT Job Opportunities
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="careerCompleteGuide" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog4.png" alt="Employment opportunities" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category"> IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="careerCompleteGuide" className="text-decoration-none blog-title blog-title">
                                            Employment opportunities
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="jobRace" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog4.png" alt="Get Ahead Of The Job Race" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category"> IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="jobRace" className="text-decoration-none blog-title blog-title">
                                            Get Ahead Of The Job Race
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="firstItjobInterview" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog6.png" alt="Your First IT Job Interview" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category"> IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="firstItjobInterview" className="text-decoration-none blog-title blog-title">
                                            Your First IT Job Interview
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="dynamicsItJob" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog11.png" alt="Dynamics of the IT job market" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">IT Jobs</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="dynamicsItJob" className="text-decoration-none blog-title blog-title">
                                            Dynamics of the IT job market and
                                            fresh graduates
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-Interviews" role="tabpanel" aria-labelledby="pills-Interviews-tab"
                            tabIndex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="ultimateGuide" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog10.png" alt="Common Pitfalls
                                    in Interviews "/>
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="ultimateGuide"
                                            className="text-decoration-none blog-title blog-title">
                                            Common Pitfalls
                                            in Interviews
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="stellarResume" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog7.png" alt=" Polishing Up Your Resume" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="stellarResume" className="text-decoration-none blog-title blog-title">
                                            Polishing Up Your Resume
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="competitiveJobMarket" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/blogimg.jpg" alt="The Job Market In 2023" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="competitiveJobMarket" className="text-decoration-none blog-title blog-title">
                                            The Job Market In 2023
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="boomingItSector" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog9.png" alt="Dynamic Indian Job Market" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="boomingItSector" className="text-decoration-none blog-title blog-title">
                                            Dynamic Indian Job Market
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="masteringTechnicalInterviews" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/Blog8.png" alt=" Clear Technical Interviews" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Interviews
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="masteringTechnicalInterviews"
                                            className="text-decoration-none blog-title blog-title">
                                            Clear Technical Interviews
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-Technical" role="tabpanel" aria-labelledby="pills-Technical-tab"
                            tabIndex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="emergingtechnologies" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog4.png" alt="Emerging Technologies" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="emergingtechnologies" className="text-decoration-none blog-title blog-title">
                                            Emerging Technologies
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="understandingTheItIndustry" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog7.png" alt=" Change in career" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="understandingTheItIndustry" className="text-decoration-none blog-title blog-title">
                                            Change in career
                                        </Link>
                                    </div>
                                    <div
                                        className="col-md-6 col-xl-4 pb-5"
                                        data-aos="fade-right"
                                        data-aos-duration="900"
                                    >
                                        <Link to="devopstestautomation" className="">
                                            <div className="box rounded-5">
                                                <img
                                                    src="./assets/img/Blog/Devopstesting.jpg"
                                                    alt="Devopstesting"
                                                />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to="devopstestautomation"
                                            className="text-decoration-none blog-title blog-title"
                                        >
                                            DevOps Test Automation
                                        </Link>
                                    </div>
                                    <div
                                        className="col-md-6 col-xl-4 pb-5"
                                        data-aos="fade-right"
                                        data-aos-duration="900"
                                    >
                                        <Link to="automatedTesting" className="">
                                            <div className="box rounded-5">
                                                <img
                                                    src="./assets/img/Blog/Automation-Testing.jpg"
                                                    alt="Devopstesting"
                                                />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to="automatedTesting"
                                            className="text-decoration-none blog-title blog-title"
                                        >
                                            Automated Testing
                                        </Link>
                                    </div>
                                    <div
                                        className="col-md-6 col-xl-4 pb-5"
                                        data-aos="fade-right"
                                        data-aos-duration="900"
                                    >
                                        <Link to="manualtestingautomationtesting" className="">
                                            <div className="box rounded-5">
                                                <img
                                                    src="./assets/img/Blog/manualtesting&autmationtesting.jpg"
                                                    alt="manualtestingautomationtesting"
                                                />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">
                                                        Technical-Skills
                                                    </h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to="manualtestingautomationtesting"
                                            className="text-decoration-none blog-title blog-title"
                                        >
                                            Manual & Automation testing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-Others" role="tabpanel" aria-labelledby="pills-Others-tab"
                            tabIndex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="chandrayaanProject" className="">
                                            <div className="box rounded-5">
                                                <img src="./assets/img/Blog/Blog2.png" alt="Job-Hunting Chandrayaan 3" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Others</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="chandrayaanProject" className="text-decoration-none blog-title blog-title">
                                            Job-Hunting Chandrayaan 3
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-xl-4  pb-5" data-aos="fade-up" data-aos-duration="600">
                                        <Link to="strategyForSuccess" className="">
                                            <div className="box rounded-5 ">
                                                <img src="./assets/img/Blog/blogimg.jpg" alt="Clear Any Professional Exam" />
                                                <div className="box-content">
                                                    <h2 className="text-decoration-none m-0 blog-category">Others</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="strategyForSuccess" className="text-decoration-none blog-title blog-title">
                                            Clear Any Professional Exam
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Company />
            </div>
            {/* footer */}
            <Footer />
            {/* contcat form */}

        </div>
    )
}

export default Blog;