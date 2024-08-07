import React from 'react'
import Footer from '../Components/Footer'
import "../css/blognew.css"
import { Link } from 'react-router-dom'
import RecentBlogs from '../Components/RecentBlogs'

function Lessonsfromthechandrayaan() {
    return (
        <div>
            <div className ="overflow-x-hidden p-0 individualBlogs" blog-name="chandrayaan">
                <section className ="blog-container overflow-hidden pt-5 mt-5 pt-lg-0 mt-lg-0">
                    <div className ="row g-0">
                        <div className ="left-blog col-lg-2 shadow1 ps-lg-3 z-3" data-aos="fade-right" data-aos-duration="700">
                            <ul className ="nav flex-column">
                                <li className ="nav-item py-4 d-none d-lg-block mb-xxl-5">
                                    <Link className ="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white" to="/">
                                        <img src="../assets/imagesandvectors/vectors/atit_logo.png" alt="logo"
                                            style={{ width: '70%', margin: 'auto' }} />
                                    </Link>
                                </li>
                                <li className ="nav-item blog-drop position-relative">
                                    <button
                                        className ="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">IT
                                        Jobs <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/exploringlucrative">Lucrative IT Job
                                            Opportunities</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/careerCompleteGuide">Employment
                                            Opportunities</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/jobRace">Get Ahead Of The Job
                                            Race</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/firstItjobInterview">Your First IT Job
                                            Interview</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/dynamicsItJob">Dynamics Of The IT Job
                                        </Link></li>
                                    </ul>
                                </li>
                                <li className ="nav-item blog-drop position-relative">
                                    <button
                                        className ="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">Interviews
                                        <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/ultimateGuide">Common Pitfalls In
                                            Interviews</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/stellarResume">Polishing Up Your Resume</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/competitiveJobMarket">The Job Market In 2023</Link>
                                        </li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/boomingItSector">Dynamic Indian Job
                                            Market</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/masteringTechnicalInterviews">Clear Technical Interviews</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className ="nav-item blog-drop position-relative">
                                    <button
                                        className ="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">Tech-Skills
                                        <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                    <li className="nav-item"><Link className="blog-drop-item nav-link" to="/blog/emergingtechnologies">emerging technologies                                           </Link>
                                            </li>
                                            <li className="nav-item"><Link className="blog-drop-item nav-link" to="/blog/understandingTheItIndustry">Change In Career</Link></li>
                                            <li className="nav-item"><Link className="blog-drop-item nav-link" to="/blog/devopstestautomation">DevOps test automation</Link></li>
                                            <li className="nav-item"><Link className="blog-drop-item nav-link" to="/blog/automatedTesting">automated Testing</Link></li>
                                            <li className="nav-item"><Link className="blog-drop-item nav-link" to="/blog/manualtestingautomationtesting">manual And automation testing</Link></li>
                                      
                                      </ul>
                                </li>
                                <li className ="nav-item blog-drop position-relative">
                                    <button
                                        className ="nav-link active blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">
                                        Others <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link active" to="/blog/chandrayaanProject">Job-Hunting Chandrayaan
                                            3</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/strategyForSuccess">Clear Any Professional
                                            Exam</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className ="right-blog col-lg-8 col-xxl-7 my-3">
                            <div className ="p-3">
                                <div
                                    data-aos="fade-down"
                                    data-aos-duration="700"
                                    className ="blog-top d-flex align-items-center justify-content-between flex-wrap flex-column flex-lg-row"
                                >
                                    <div>
                                        <p className ="m-0 text-1 fs-6 fw-medium primary-color">
                                            Job-Hunting Chandrayaan 3
                                        </p>
                                    </div>
                                    <nav aria-label="breadcrumb">
                                        <ol className ="breadcrumb mb-0">
                                            <li className ="breadcrumb-item">
                                                <Link to="/blog">Blogs</Link>
                                            </li>
                                            <li className ="breadcrumb-item active" aria-current="page">
                                                Others
                                            </li>
                                        </ol>
                                    </nav>
                                    <div className ="d-none d-lg-block">
                                        <Link to="/" className ="">Home</Link>
                                    </div>
                                </div>
                                <div className ="container my-5 overflow-hidden">
                                    <img
                                        src="../assets/img/Blog/Blog2.png"
                                        className ="mb-3"
                                        alt="Emerging technological"
                                        data-aos="zoom-in"
                                        data-aos-duration="500"
                                    />
                                    <p
                                        className ="secondary-text mb-5"
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                    >
                                        <span className ="fl">I</span>ndia (On 23rd August 2023) Achieved A
                                        Historic Milestone By Successfully Landing Their Chandrayaan 3
                                        Lunar Lander On The Moon's Surface. This Tremendous
                                        Accomplishment Required Overcoming Complex Technological
                                        Hurdles. While A Moon Landing May Seem Far Removed From Earthly
                                        Affairs, This Ambitious Project Can Teach Us Surprisingly
                                        Relevant Lessons For The More Grounded Goal Of Finding A
                                        Rewarding IT Job.
                                    </p>
                                    <div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h1 className ="primary-header text-center mb-3">
                                                Lessons From The Chandrayaan 3 Project
                                            </h1>
                                        </div>
                                        <br />
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header fs-2">
                                                Don't Orbit Aimlessly - Set A Clear Objective
                                            </h2>
                                            <p className ="secondary-text">
                                                Chandrayaan 3 Has A Crystal Clear Objective - To
                                                Successfully Demonstrate India's Ability To Softly Land A
                                                Rover On The Moon's Surface. With This Specific Goal Guiding
                                                Them, ISRO Scientists Can Calculate The Precise Trajectory,
                                                Fuel Needs, And Launch Parameters To Achieve It
                                            </p>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-text">
                                                As An IT Job Seeker, You Need Equal Clarity.
                                            </h2>
                                            <p className ="secondary-text">
                                                Define Exactly What Role You Want - Front-End Developer,
                                                Data Scientist, Security Analyst - Along With The Core
                                                Skills Needed And Preferred Companies Or Locations. This
                                                Prevents Aimlessly Drifting In Your Job Search Like A Planet
                                                Stuck Orbiting In Space. Keep Your Sights Focused Squarely
                                                On Your Dream IT Job, And Work Backward To Chart The Precise
                                                Path To Get There. <br />
                                                Register On Relevant Job Sites, Update Your LinkedIn
                                                Profile, And Gain Sought-After Skills - Every Move Should
                                                Inch You Closer To Your Target.
                                            </p>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header fs-2">
                                                Be Adaptable And Learn From Failure
                                            </h2>
                                            <p className ="secondary-text">
                                                Chandrayaan 2 In 2019 Came Agonizingly Close To Successfully
                                                Landing Its Vikram Rover On The Lunar South Pole Before
                                                Contact Was Lost Right Before Touchdown. While
                                                Disappointing, ISRO Gained Valuable Data From The Attempt,
                                                Allowing Them To Improve The Landing System's Design For The
                                                Successful Chandrayaan 3 Mission This Time.
                                                <br />As An IT Professional, You Will Likely Also Face
                                                Setbacks. You May Not Land Your Dream IT Job Straight Out Of
                                                College. An Interview Or Test May Not Go Perfectly. <br />
                                                But Like ISRO, Learn From Each Job Switch, Rejection Or
                                                Less-Than-Ideal Role. Identify Areas Needing Improvement And
                                                Upgrade Your Skills. Display Flexibility By Acquiring New
                                                Technical And Soft Skills To Make Yourself More Marketable.
                                                <br />Don't Let Failures Hold You Back. Stay Determined And
                                                Propel Yourself Forward Into The Job Search As ISRO Kept
                                                Working Toward Another Lunar Landing
                                            </p>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header fs-2">
                                                Perform Under Precise Parameters and Pressure
                                            </h2>
                                            <p className ="secondary-text">
                                                Rocket launches have narrow windows of opportunity and teams
                                                must perform complex launch operations perfectly in the
                                                limited timeframes. One minor issue with any of the numerous
                                                staged procedures and the entire timeline gets thrown off.
                                            </p>
                                            <p className ="secondary-text">
                                                Interviews and tests during your job hunt also involve
                                                pressure, just with slightly more breathing room than a
                                                rocket launch!
                                            </p>
                                            <p className ="secondary-text">
                                                But like ISRO engineers, prepare meticulously to master the
                                                parameters. Use sites like LeetCode to practice coding
                                                interview questions until your responses are seamless.
                                                Refine your resume into a perfect one-page document that
                                                rockets past any ATS. Conduct mock interviews on platforms
                                                like Interviewing.io to gain experience and calm nerves.
                                                Prove you can stay focused and perform when the stakes are
                                                high.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header text-center mb-3">
                                                Triple Check All Systems Thoroughly
                                            </h2>
                                            <p className ="secondary-text">
                                                Leaving anything to chance is simply not an option for ISRO.
                                                Engineers run endless simulations of the full launch
                                                sequence and conduct exhaustive checks of each individual
                                                component before ever clearing the vehicle for takeoff. Even
                                                the tiniest undetected issue could mean the difference
                                                between mission success and failure.
                                            </p>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header fs-2">
                                                Similarly, prepare for your IT job hunt with meticulous
                                                thoroughness.
                                            </h2>
                                            <p className ="secondary-text">
                                                ➔ Polish your resume and then tweak it some more.
                                            </p>
                                            <p className ="secondary-text">
                                                ➔ Research target companies deeply and customize your pitch
                                                accordingly.
                                            </p>
                                            <p className ="secondary-text">
                                                ➔ Rehearse and refine interview answers until they feel
                                                effortless.
                                            </p>
                                            <p className ="secondary-text">
                                                ➔ Develop impressive work samples and projects to showcase
                                                skills.
                                            </p>
                                            <p className ="secondary-text">
                                                ➔ Conduct mock tests to identify any weak points in your
                                                knowledge so you can fill those gaps before takeoff.
                                            </p>
                                            <p className ="secondary-text">
                                                Leave no room for surprises or errors once job opportunities
                                                arise.
                                            </p>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 className ="primary-header fs-2">Collaborate for Success</h2>
                                            <p className ="secondary-text">
                                                From top scientists to ground crews to complex partnerships
                                                across space agencies, Chandrayaan 3 brings together
                                                expertise across organizations and disciplines. These
                                                collaborative efforts combine capabilities for an increased
                                                chance of mission success.
                                            </p>
                                            <p className ="secondary-text">
                                                Finding your ideal IT position also requires collaboration.
                                            </p>
                                            <p className ="secondary-text">
                                                Attend local tech events and conferences to build
                                                connections. Follow industry leaders on Twitter and
                                                LinkedIn. Get referrals from past coworkers who have moved
                                                to new companies. Utilize LinkedIn to directly connect with
                                                insiders at your target employers. Draw on the expertise and
                                                experiences of those further along in their tech careers to
                                                learn about unlisted openings and insider tips. You can
                                                significantly increase your chances by cooperatively
                                                leveraging others’ networks and knowledge.
                                            </p>
                                            <p className ="secondary-text">
                                                There you have it - five expanded lessons from Chandrayaan 3
                                                that can guide your quest for the ideal IT job closer to
                                                home. Set your sights on a specific role, be adaptable,
                                                perform under pressure, verify your preparedness, and
                                                collaborate for success. Follow this flight plan and your
                                                technology career is sure to rocket to new heights!
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- <div className ="d-flex justify-content-center mb-5" data-aos="fade-up" data-aos-duration="600">
                            <button className ="button-74" role="button" data-bs-toggle="modal" data-bs-target="#share">Share
                                this post</button>
                        </div> --> */}
                                    {/* <!-- share blog-----------------------     --> */}
                                    <div id="share-blog" className =""></div>
                                    <RecentBlogs/>
                                </div>
                            </div>
                        </div>
                        <div className ="ad-blog"></div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Lessonsfromthechandrayaan
