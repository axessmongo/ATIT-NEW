import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
    useEffect(() => {
        const blogName = document.querySelector('[blog-name]').getAttribute('blog-name');
        const elementsToRemove = document.querySelectorAll(`.${blogName}`);
        elementsToRemove.forEach((element) => {
            element.remove();
        });
    }, []);
    return (
        <div className='recent-post'>
            <hr/>
            <h4 className=''>Recent Blog Posts:</h4>
            <div className='recent-post'>
            <div className="mb-3 emerging_tech" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/emergingtechnologies"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Tech Skills</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Emerging Technologies
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            The IT Industry Constantly Introduces New Technologies That Revolutionize
                            The
                            Way We Live
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog4.png" alt="Emerging technological" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 chandrayaan" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/chandrayaanProject"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Others</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Job-Hunting Chandrayaan 3
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            India (23rd August 2023) Achieved A Historic Milestone By Successfully Landing Their Chandrayaan 3 Lunar Lander On The Moon's Surface.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog2.png" alt=" Job-Hunting Chandrayaan 3" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 lucrative-it-job-opportunities-in-india.html" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/exploringlucrative"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">IT-Jobs</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Exploring Lucrative IT Job Opportunities India
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Whether You're A College Fresher Or An Experienced Professional, Understanding The Demand And Growth Potential In These Domains Can Help You Chart A Successful Career Path In The Indian IT Landscape.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog3.png" alt=" Exploring Lucrative IT Job image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 resume" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/stellarResume"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Interviews</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Polishing Up Your Resume
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Start Sending Out Your Resume Left And Right, Let's Talk About How To Make It Effective And Stand Out To Recruiters.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog10.png" alt=" Polishing Up Your Resume image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 change_in_career" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/understandingTheItIndustry"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Tech Skills</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Change In Career
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Whether You Are A Fresh Graduate Or An Experienced Professional Seeking A Change In Career, This Article Outlines The Essential Tips To Help You Break Into The IT Industry Successfully.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog5.png" alt=" Change In Career image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 common_pitfalls" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/ultimateGuide"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Interviews</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Common Pitfalls In Interviews
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            In Today's Competitive Job Market, Interviews Play A Crucial Role In Determining One's Career Success.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog10.png" alt="Common Pitfalls In Interviews image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 employment_opportunity" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/careerCompleteGuide"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">IT-Jobs</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Employment Opportunities
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            In Today's Rapidly Changing World, The Information Technology (IT) Sector Plays A Crucial Role In Driving Economic Growth, And India Stands At The Forefront Of This Revolution. The Indian IT Industry Has Experienced Exponential Growth Over The Years, Making It One Of The Most Significant Contributors To The Country's Economy.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog5.png" alt=" Employment Opportunities image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 job_market" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/competitiveJobMarket"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Interviews</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            The Job Market In 2023
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Let’s Agree Upon Something. The Job Market In 2023 And Beyond Is Going To Be Highly Competitive. Being Highly Skilled In The Field You’re Applying Job For Is Not Going To Be EnoughLet’s Agree Upon Something. The Job Market In 2023 And Beyond Is Going To Be Highly Competitive. Being Highly Skilled In The Field You’re Applying Job For Is Not Going To Be Enough
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog8.png" alt="The Job Market In 2023 image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 job_race" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/jobRace"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">IT-Jobs</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Get Ahead Of The Job Race
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Every Year, There Are A Set Of Programming Languages That Are In High Demand. 2023 Is No Different. There Are Several Programming Languages That Are In High Demand In 2023 Due To Their Versatility, Ease Of Use, Feature-Rich, And Popularity.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog6.png" alt="Get Ahead Of The Job Race image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 professional_exam" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/strategyForSuccess"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Others</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Clear Any Professional Exam
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            In This Comprehensive Guide, We Will Reveal A Proven Strategy That Will Empower You To Clear Any Professional Exam And Achieve The Results You Desire.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/blogimg.jpg" alt="Clear Any Professional Exam image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 first_itjob" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/firstItjobInterview"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">IT-Jobs</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Your First IT Job Interview
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            So You've Finally Reached That Exciting Phase Where You're All Set To Step Into The Professional World, And Landing Your First IT Job Interview Is Both Thrilling And Nerve- Wracking.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog7.png" alt="Your First IT Job Interview image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 dynamic_indian_job" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/boomingItSector"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Interviews</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Dynamic Indian Job Market
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            The Industry's Contribution To Employment Generation And Foreign Exchange Earnings Cannot Be Overstated, Making It A Desirable Field For Individuals Seeking Exciting Career Prospects.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog4.png" alt=" Dynamic Indian Job Market image" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 dynamics_of_it" data-aos="fade-left" data-aos-duration="600">
                <Link to="/blog/dynamicsItJob"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">IT-Jobs</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Dynamics Of The IT Job Market And Fresh Graduates
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            The IT Industry Has Witnessed Rapid Growth In Recent Years, With New Technologies Constantly Emerging And Revolutionising Various Sectors.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog11.png" alt="Dynamics Of The IT Job Market" />
                    </div>
                </Link>
            </div>

            <div className="mb-3 tech_interviews" data-aos="fade-right" data-aos-duration="600">
                <Link to="/blog/masteringTechnicalInterviews"
                    className="post row align-items-center justify-content-center text-decoration-none">
                    <div className="col-8 col-lg-4">
                        <p className="light-text">Interviews</p>
                        <h1 className="secondary-header mb-0 text-dark fw-bold">
                            Clear Technical Interview
                        </h1>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <p className="secondary-text mb-0">
                            Building A Strong Technical Foundation Is Crucial For Success In Technical Interviews. Review Core Computer Science Concepts Such As Data Structures, Algorithms, Object-Oriented Programming
                        </p>
                    </div>
                    <div className="col-4">
                        <img src="../assets/img/Blog/Blog12.png" alt="Clear Technical Interview image" />
                    </div>
                </Link>
            </div>

        </div>
        </div>
        
    )
}

export default RecentBlogs