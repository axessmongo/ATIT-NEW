import React from 'react'
import Footer from '../Components/Footer'
import "../css/blognew.css"
import { Link } from 'react-router-dom'
import RecentBlogs from '../Components/RecentBlogs'

function Howtocraftastellar() {
    return (
        <div>
            <div className ="overflow-x-hidden p-0 individualBlogs" blog-name="resume">
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
                                        className ="nav-link active blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">Interviews
                                        <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/ultimateGuide">Common Pitfalls In
                                            Interviews</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link active" to="/blog/stellarResume">Polishing Up Your Resume</Link></li>
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
                                        className ="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">
                                        Others <i className ="bi bi-caret-down-fill trans"></i></button>
                                    <ul className ="blog-drop-menu list-unstyled">
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/chandrayaanProject">Job-Hunting Chandrayaan
                                            3</Link></li>
                                        <li className ="nav-item"><Link className ="blog-drop-item nav-link" to="/blog/strategyForSuccess">Clear Any Professional
                                            Exam</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className ="right-blog col-lg-8 col-xxl-7 my-3">
                            <div className ="p-3">
                                <div data-aos="fade-down" data-aos-duration="700"
                                    className ="blog-top d-flex align-items-center justify-content-between flex-wrap flex-column flex-lg-row">
                                    <div>
                                        <p className ="m-0 text-1 fs-6 fw-medium primary-color">Polishing Up
                                            Your Resume </p>
                                    </div>
                                    <nav aria-label="breadcrumb">
                                        <ol className ="breadcrumb mb-0">
                                            <li className ="breadcrumb-item"><Link to="/blog">Blogs</Link></li>
                                            <li className ="breadcrumb-item active" aria-current="page">Interviews</li>
                                        </ol>
                                    </nav>
                                    <div className ="d-none d-lg-block">
                                        <Link to="/" className ="">Home</Link>
                                    </div>
                                </div>
                                <div className ="container my-5 overflow-hidden">
                                    <img src="../assets/img/Blog/Blog9.png" className ="mb-3" alt="Emerging technological"
                                        data-aos="zoom-in" data-aos-duration="500" />
                                    <p className ="secondary-text " data-aos="fade-up" data-aos-duration="600">
                                        <span className ="fl">U</span>se simple, standard font
                                        like Arial or Times New Roman in size
                                        10-12 points. Bold and
                                        increase the size slightly for your name and each section header. Include clear headings
                                        like
                                        Summary, Education, Experience, Skills, etc.
                                    </p>
                                    <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Hey there fresh graduates!
                                    </p>
                                    <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">I know you&#39;re probably
                                        eager to start applying for jobs.</p>
                                    <div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">
                                                But before you start sending out your resume left and right, let&#39;s talk about
                                                how to make it
                                                effective and stand out to recruiters.</p>

                                            <h1 className ="primary-header text-center mb-3" data-aos="fade-up" data-aos-duration="600"> How to craft a stellar resume </h1>
                                        </div>
                                        <div className ="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">First things first
                                                - formatting.
                                            </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Your resume needs
                                                to look professional and be easy to skim.
                                            </p>
                                            <h2 className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Use bullet points
                                                instead of long paragraphs of text - this makes the information easy to digest
                                                quickly.</h2>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Have clear sections
                                                with white space between each one. And watch your alignment - the
                                                content should flow nicely down the page. </p>
                                            <h2 className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Now, what should
                                                you actually include on your fresher resume? Here are the key sections to
                                                focus on:</h2>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600"> 1.
                                                Summary/Objective </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">This 2-3 line blurb
                                                at the very top gives a brief overview of who you are, what you&#39;re
                                                looking for, and what you have to offer. Keep it short, targeted, and intriguing to
                                                make
                                                the hiring manager want to keep reading.</p>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600">2. Education</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Starting with your
                                                most recent degree, list your college education like this: Degree name,
                                                Institution, Location, Year of graduation. You can also include things like GPA,
                                                academic
                                                projects, scholarships, or honours if they strengthen your profile. </p>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600">3. Experience</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Here are the
                                                part-time jobs, internships, freelancing gigs, and extracurricular activities.
                                                Anything relevant where you developed useful skills. Start with your most recent
                                                experience first. Include the name of your company/organisation, your position
                                                title,
                                                employment dates, and bullet points of your responsibilities and achievements.</p>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600">4. Skills</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">A very crucial
                                                section! Include the technical skills and programs you know, along with
                                                soft skills like communication, teamwork, leadership, etc. Break it down into
                                                categories
                                                and use bullets if you have a lot of skills. Only list what you&#39;re truly
                                                proficient in.
                                            </p>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600">5. Certifications
                                            </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Got any specialised
                                                certifications related to your industry or role? Pop those in too.</p>
                                            <p className ="secondary-header" data-aos="fade-up" data-aos-duration="600">6. Volunteer Work
                                            </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">If you&#39;ve
                                                volunteered in meaningful ways, a brief description can highlight your interests
                                                and what you care about. Especially nice to see for freshers without a lot of formal
                                                experience yet.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Now what should you
                                                avoid or be cautious about including?
                                                Let&#39;s go over some key resume
                                                don&#39;ts:</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Irrelevant
                                                personal details like age, religion, and marital
                                                status. (What are they going to do with
                                                these details? just think…)</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Outdated contact
                                                info - double-check your phone number,
                                                email, and mailing address.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Spelling or
                                                grammar errors - have multiple people proofread!
                                                (Pro tip: there are many free
                                                tools available to do this)</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Overly designed
                                                formatting with weird text boxes, colours,
                                                charts, etc. Keep it simple!</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Hobbies unless
                                                they directly relate to the job.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Old or irrelevant
                                                experience from many years ago. Keep it
                                                recent and relevant.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Lies or
                                                exaggerations! Always be truthful.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Fancy resume
                                                templates - they can affect readability and ATS compatibility.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Long paragraphs
                                                or big blocks of text - use short bullets! (like how this blog post is formatted)
                                            </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- A generic
                                                objective statement - customise it to each application.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- When you&#39;re
                                                done drafting your fresher resume, make sure to get feedback from mentors,
                                                professors, or career counsellors. They can offer valuable advice on enhancing your
                                                resume
                                                even more. (Pro tip: At Alpha Code, we have a dedicated team to polish your resume.
                                                Feel free
                                                to get in touch)</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Here are a few more
                                                tips for polishing up your resume:</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Review resume
                                                templates and samples online to see good examples for inspiration.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Tailor your
                                                resume to each job description - use keywords and relevant skills from the posting.
                                            </p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Keep resume
                                                length to 1 page unless you have extensive experience to warrant 2 pages max.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Use measurable
                                                accomplishments and numbers like &quot;increased social media followers by
                                                15%&quot; not just generic duties.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Make sure to
                                                proofread repeatedly and fix any typos. Ask others to review.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">- Export as a PDF
                                                file - no weird formatting changes will occur.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Whew, we covered a
                                                lot of ground on crafting effective fresher resumes!</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">I know the job
                                                search process can feel overwhelming as a new grad. But taking the time to
                                                create a stellar, polished resume will pay off. Recruiters spend just seconds
                                                scanning each one
                                                - you want your resume to grab their attention right away.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">So be diligent
                                                about following these tips and you&#39;ll have an impressive resume ready for
                                                applying to companies and landing interviews in no time.
                                                Let us know if you have any other fresher resume questions! We are always happy to
                                                help.</p>
                                            <p className ="secondary-text" data-aos="fade-up" data-aos-duration="600">Now go get that
                                                dream job!</p>
                                        </div>
                                    </div>
                                    {/* <!-- <div className ="d-flex justify-content-center mb-5" data-aos="fade-up" data-aos-duration="600">
                            <button className ="button-74" role="button" data-bs-toggle="modal" data-bs-target="#share">Share
                                this post</button>
                        </div> --> */}
                                    {/* <!-- share blog-------------------------> */}
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

export default Howtocraftastellar
