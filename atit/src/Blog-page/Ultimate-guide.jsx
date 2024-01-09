import React from 'react'
import Footer from '../Components/Footer'
import "../css/blognew.css"
import { Link } from 'react-router-dom'

function Theultimateguide() {
    return (
        <div>
            <div class="overflow-x-hidden p-0 individualBlogs" blog-name="emerging_tech">
                <section class="blog-container overflow-hidden pt-5 mt-5 pt-lg-0 mt-lg-0">
                    <div class="row g-0">
                        <div class="left-blog col-lg-2 shadow1 ps-lg-3 z-3" data-aos="fade-right" data-aos-duration="700">
                            <ul class="nav flex-column">
                                <li class="nav-item py-4 d-none d-lg-block mb-xxl-5">
                                    <Link class="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white" to="/">
                                        <img src="../assets/imagesandvectors/vectors/atit_logo.png" alt="logo"
                                            style={{ width: '70%', margin: 'auto' }} />
                                    </Link>
                                </li>
                                <li class="nav-item blog-drop position-relative">
                                    <button
                                        class="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">IT
                                        Jobs <i class="bi bi-caret-down-fill trans"></i></button>
                                    <ul class="blog-drop-menu list-unstyled">
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/exploringlucrative">Lucrative IT Job
                                            Opportunities</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/careerCompleteGuide">Employment
                                            Opportunities</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/jobRace">Get Ahead Of The Job
                                            Race</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/firstItjobInterview">Your First IT Job
                                            Interview</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/dynamicsItJob">Dynamics Of The IT Job
                                        </Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item blog-drop position-relative">
                                    <button
                                        class="nav-link active blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">Interviews
                                        <i class="bi bi-caret-down-fill trans"></i></button>
                                    <ul class="blog-drop-menu list-unstyled">
                                        <li class="nav-item"><Link class="blog-drop-item nav-link active" to="/blog/ultimateGuide">Common Pitfalls In
                                            Interviews</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/stellarResume">Polishing Up Your Resume</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/competitiveJobMarket">The Job Market In 2023</Link>
                                        </li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/boomingItSector">Dynamic Indian Job
                                            Market</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/masteringTechnicalInterviews">Clear Technical Interviews</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item blog-drop position-relative">
                                    <button
                                        class="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">Tech-Skills
                                        <i class="bi bi-caret-down-fill trans"></i></button>
                                    <ul class="blog-drop-menu list-unstyled">
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/emergingtechnologies">Emerging
                                            Technologies</Link>
                                        </li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/understandingTheItIndustry">Change In Career</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item blog-drop position-relative">
                                    <button
                                        class="nav-link blog-drop-toggle w-100 text-start d-flex justify-content-between align-items-center">
                                        Others <i class="bi bi-caret-down-fill trans"></i></button>
                                    <ul class="blog-drop-menu list-unstyled">
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/chandrayaanProject">Job-Hunting Chandrayaan
                                            3</Link></li>
                                        <li class="nav-item"><Link class="blog-drop-item nav-link" to="/blog/strategyForSuccess">Clear Any Professional
                                            Exam</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="right-blog col-lg-8 col-xxl-7 my-3">
                            <div class="p-3">
                                <div data-aos="fade-down" data-aos-duration="700"
                                    class="blog-top d-flex align-items-center justify-content-between flex-wrap flex-column flex-lg-row">
                                    <div>
                                        <p class="m-0 text-1 fs-6 fw-medium primary-color">Common Pitfalls in Interviews</p>
                                    </div>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb mb-0">
                                            <li class="breadcrumb-item"><Link to="/blog">Blogs</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Interviews</li>
                                        </ol>
                                    </nav>
                                    <div class="d-none d-lg-block">
                                        <Link to="/" class="">Home</Link>
                                    </div>
                                </div>
                                <div class="container my-5 overflow-hidden">
                                    <img src="../assets/img/Blog/Blog10.png" class="mb-3" alt="Emerging technological"
                                        data-aos="zoom-in" data-aos-duration="500" />
                                    <p class="secondary-text " data-aos="fade-up" data-aos-duration="600">
                                        <span class="fl">I</span>n today&#39;s competitive job market, interviews play a crucial
                                        role in determining one&#39;s
                                        career success. It is not only about showcasing your skills and qualifications but
                                        also about effective communication and using the right words and phrases. This
                                        article aims to explore the impact of language in interviews and provide you with a
                                        comprehensive guide to mastering this crucial aspect of the job search process.
                                    </p>

                                    <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">They allow us, the
                                        developers, to create software applications that
                                        can run on various operating systems and devices.Every year, there are a set of programming
                                        languages that are in high demand. 2023 is no different.There are several programming
                                        languages that are in high demand in 2023 due to their versatility, ease of use,
                                        feature-rich, and popularity.</p>
                                    <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Let us take a brief
                                        overview of the most in-demand programming
                                        languages in 2023</p>
                                    <div>
                                        <div class="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h1 class="primary-header text-center mb-5" data-aos="fade-up" data-aos-duration="600">
                                                The Ultimate Guide to
                                                10 Power Words and Phrases</h1>

                                        </div>
                                        <div class="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 class="secondary-header" data-aos="fade-up" data-aos-duration="600">Understanding
                                                the Impact of Poor Word Choice</h2>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Your choice of
                                                words can significantly influence how
                                                interviewers perceive you.
                                                Opting for weak or uncertain language can undermine your credibility and make
                                                you appear less confident. It is essential to understand the potential pitfalls of
                                                poor
                                                word choice to avoid jeopardizing your interview performance. </p>
                                            <h2 class="secondary-header" data-aos="fade-up" data-aos-duration="600">Unveiling 10
                                                Words and Phrases to Avoid</h2>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">To help you
                                                navigate through your interview with confidence,
                                                here are ten words
                                                and phrases that you should steer clear of: </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">1. &quot;I&#39;m
                                                not sure&quot; or &quot;Maybe&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">2. &quot;I can
                                                try&quot; or &quot;I suppose&quot;</p>
                                            <p class="primary-text" data-aos="fade-up" data-aos-duration="600">3. &quot;I
                                                think&quot; or &quot;I believe&quot; </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">4. &quot;I
                                                don&#39;t have experience in&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">5. &quot;I&#39;m
                                                not the best at&quot; or &quot;I&#39;m not
                                                that good with&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">6. &quot;I
                                                haven&#39;t really done&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">7. &quot;I have no
                                                idea&quot; or &quot;I&#39;m clueless&quot;
                                            </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">9. &quot;I just
                                                follow instructions&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">10. &quot;I
                                                hate&quot; or &quot;I can&#39;t stand&quot;</p>
                                        </div>
                                        <div class="mb-3" data-aos="fade-up" data-aos-duration="600">
                                            <h2 class="secondary-header" data-aos="fade-up" data-aos-duration="600">1: Self-Doubt
                                                and Weak Communication</h2>

                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I&#39;m not
                                                sure&quot; or &quot;Maybe&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Using phrases like
                                                &quot;I&#39;m not sure&quot; or
                                                &quot;Maybe&quot; can convey uncertainty and lack of
                                                confidence. Instead, replace them with more assertive expressions that
                                                demonstrate your willingness to find answers or propose solutions.
                                            </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I can
                                                try&quot; or &quot;I suppose&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Similar to the
                                                previous category, these phrases indicate a
                                                lack of confidence in
                                                your abilities. Instead, express your willingness to take on challenges and provide
                                                assurance that you will give your best effort.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I think&quot;
                                                or &quot;I believe&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">
                                                While expressing your opinions is essential, relying too much on phrases like
                                                &quot;I
                                                think&quot; or &quot;I believe&quot; can make you come across as unsure of yourself.
                                                Instead,
                                                present your ideas with conviction and clarity.
                                            </p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">2: Discrediting
                                                Your Skills</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I don&#39;t
                                                have experience in&quot;
                                            </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Downplaying your
                                                skills and experience can hinder your chances
                                                of securing the
                                                job. Instead, focus on highlighting transferable skills or similar experiences that
                                                demonstrate your adaptability and potential for success.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I&#39;m not
                                                the best at&quot; or &quot;I&#39;m not that
                                                good with&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Acknowledging your
                                                weaknesses may seem like honesty, but it
                                                can undermine
                                                your candidacy. Rather than dwelling on your shortcomings, emphasize your
                                                strengths and highlight how you continuously strive for improvement.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I haven&#39;t
                                                really done&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Avoid diminishing
                                                your accomplishments by using phrases like
                                                &quot;I haven&#39;t really
                                                done.&quot; Instead, showcase your past achievements and explain how they have
                                                prepared you for future challenges.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">3: Lack of
                                                Confidence and Initiative</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I have no
                                                idea&quot; or &quot;I&#39;m clueless&quot;.
                                            </p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Expressing complete
                                                ignorance or cluelessness can come across
                                                as lacking
                                                initiative and confidence. Instead, convey your eagerness to learn and your
                                                willingness to seek information or guidance when necessary.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;It&#39;s not
                                                my fault&quot; or &quot;I couldn&#39;t
                                                control&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Making excuses or
                                                attempting to shift blame reflects poorly on
                                                your ability to take
                                                responsibility. Instead, focus on how you have handled challenging situations and
                                                what you have learned from them.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I just follow
                                                instructions&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">While being
                                                receptive to instructions is vital, overly
                                                emphasizing your submissive
                                                nature can make you appear lacking in independence and critical thinking skills.
                                                Instead, highlight instances where you have taken initiative and demonstrated
                                                leadership abilities.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">4: Negative
                                                Attitudes and Outlooks</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I hate&quot;
                                                or &quot;I can&#39;t stand&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Expressing strong
                                                negative emotions toward anything can be a
                                                red flag for
                                                potential employers. Instead, maintain a professional demeanor and focus on
                                                highlighting positive aspects of your previous experiences or the current
                                                opportunity.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;This
                                                job/role/company sucks&quot; or &quot;This
                                                isn&#39;t what I expected&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Voicing
                                                dissatisfaction with previous roles or companies can
                                                raise concerns about
                                                your adaptability and pessimism. Instead, approach the interview with an open
                                                mind and focus on how your skills align with the current opportunity.</p>

                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;My previous
                                                boss/colleague was terrible&quot;</p>

                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Speaking negatively
                                                about past colleagues or supervisors can
                                                raise questions
                                                about your ability to work well in a team. Instead, emphasize positive relationships
                                                and focus on what you have learned from those experiences.</p>

                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">5.Power Words and
                                                Phrases</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">In contrast to the
                                                aforementioned pitfalls, utilizing power
                                                words and phrases can
                                                significantly enhance your interview performance. Here are some examples:</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I&#39;m open
                                                to learning and growing&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Demonstrate your
                                                willingness to acquire new skills and embrace
                                                challenges. This
                                                phrase showcases your adaptability and drive for personal and professional
                                                development.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I have
                                                transferable skills in&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Highlight skills or
                                                experiences from previous roles that can
                                                be directly applied to the
                                                position you are interviewing for. This conveys your ability to quickly contribute
                                                value to the organization.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I&#39;ve
                                                taken on challenges similar to&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Illustrate your
                                                ability to handle difficult situations by
                                                showcasing instances where
                                                you successfully navigated challenges similar to those you may encounter in the
                                                role you are interviewing for.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">6.Gaining
                                                Confidence and Assertiveness</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">&quot;I&#39;ve
                                                taken on challenges similar to&quot;</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Illustrate your
                                                ability to handle difficult situations by
                                                showcasing instances where
                                                you successfully navigated challenges similar to those you may encounter in the
                                                role you are interviewing for.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">7.Showcasing your
                                                accomplishments</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Highlight specific
                                                accomplishments and quantify the results
                                                whenever possible.
                                                Providing tangible examples of your achievements demonstrates your capabilities
                                                and gives interviewers a clear picture of your potential.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">Emphasizing your
                                                strengths</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Identify your
                                                unique strengths and weave them into your
                                                responses. You want to
                                                convey to the interviewer the value you bring to the table and why you are the ideal
                                                candidate for the position.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">8.Expressing
                                                determination and motivation</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Demonstrate your
                                                enthusiasm and determination by expressing
                                                your passion for
                                                the industry, the role you are applying for, and your long-term goals. This shows
                                                interviewers that you are genuinely invested in your career growth.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">9.Practicing
                                                Effective Communication</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Effective
                                                communication is key to successful interviews. Here
                                                are some techniques
                                                to help you communicate effectively and leave a positive impression:</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">10.Active
                                                listening and response techniques</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Demonstrate active
                                                listening by maintaining eye contact,
                                                nodding, and responding
                                                thoughtfully to the interviewer&#39;s questions and comments. Paraphrase and
                                                reiterate
                                                key points to show your understanding and engagement.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">11.To demonstrate
                                                engagement</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Prepare thoughtful
                                                questions to ask the interviewer. This not
                                                only shows your
                                                genuine interest in the opportunity but also allows you to gain valuable insights
                                                into
                                                the company and the role.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Using positive
                                                language without embellishment</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Frame your
                                                responses using positive language. Avoid
                                                exaggeration or
                                                embellishment, as it can undermine your credibility. Instead, provide concrete
                                                examples and employ precise language to convey your experience and skills.</p>
                                            <h2 class="primary-header text-center mb-5" data-aos="fade-up" data-aos-duration="600">
                                                Handling Difficult Questions with Grace</h2>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Interviewers often
                                                ask challenging questions to assess your
                                                ability to handle
                                                adversity. Here&#39;s how you can address specific types of difficult questions:
                                            </p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">1.Addressing
                                                gaps in experience</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600"> Rather than
                                                dwelling on the absence of certain experiences,
                                                focus on transferable
                                                skills or experiences that compensate for any perceived gaps. Highlight your ability
                                                to quickly adapt and learn new things.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Explaining past
                                                failures and lessons learned</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Acknowledge past
                                                failures without dwelling on them. Instead,
                                                emphasize the
                                                lessons you have learned and how those experiences have made you a more
                                                resilient and capable professional.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Handling conflicts
                                                and challenging situations</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Demonstrate your
                                                ability to handle conflicts by calmly
                                                describing the situation, your
                                                role in resolving it, and the positive outcome. Emphasize your ability to
                                                collaborate
                                                and find constructive solutions.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">2. Crafting an
                                                Impactful Interview</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">To make the most
                                                out of your interview, it is crucial to
                                                eliminate weak phrases from
                                                your language and build a foundation of confidence, positivity, and professionalism.
                                                Demonstrating adaptability, enthusiasm, and problem-solving skills will leave a
                                                lasting impression on potential employers.</p>
                                            {/* <!-- <p class="secondary-header">Cracking the Interview Code</p> --> */}
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">How should I deal
                                                with difficult interviewers?</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Handling difficult
                                                interviewers requires patience and
                                                adaptability. Maintain
                                                professionalism, actively listen, and respond thoughtfully. Focus on showcasing
                                                your skills and qualifications regardless of the interviewer&#39;s approach.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">Should I rehearse
                                                answers to common interview questions?</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Rehearsing answers
                                                to common interview questions can
                                                significantly improve your
                                                performance. However, be mindful of sounding too rehearsed or scripted. Try to
                                                strike a balance between preparedness and natural conversation.</p>
                                            <p class="secondary-header" data-aos="fade-up" data-aos-duration="600">Can I use power
                                                words and phrases in a cover letter or
                                                résumé?</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">Absolutely! Power
                                                words and phrases can enhance the impact of
                                                your cover letter
                                                and résumé. Use them to highlight your qualifications, accomplishments, and
                                                professional attributes effectively.</p>
                                            <p class="secondary-text" data-aos="fade-up" data-aos-duration="600">With the tools and
                                                insights provided in this guide, you are
                                                now equipped to
                                                approach interviews with confidence, effectively communicate your value, and
                                                handle any challenge that may arise. Good luck in your interview endeavors!</p>
                                        </div>
                                    </div>
                                    {/* <!-- <div class="d-flex justify-content-center mb-5" data-aos="fade-up" data-aos-duration="600">
                            <button class="button-74" role="button" data-bs-toggle="modal" data-bs-target="#share">Share
                                this post</button>
                        </div> --> */}
                                    {/* <!-- share blog-----------------------     --> */}
                                    <div id="share-blog" class=""></div>
                                    <div class="recent-post">
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="ad-blog"></div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Theultimateguide
