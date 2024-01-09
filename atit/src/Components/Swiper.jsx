import React, { useEffect } from 'react';
import Swiper from 'swiper';

function MySwiper() {
    useEffect(() => {
        // Initialize Swiper
        new Swiper('.testimonials-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });

        // Get the feedback element by ID
        var FeedbackElement = document.getElementById("FeedbackElement");

        // Check if the element exists
        if (FeedbackElement) {
            // Define your dynamic value for swipercode
            var swipercode = "YourDynamicValue";

            // Set the inner HTML of the element with swipercode
            FeedbackElement.innerHTML = swipercode;
        }
    }, []);

    return (
        <div>
            <div className ="w-100">
                <section id="testimonials" className ="testimonials">
                    <div className ="container-fluid" data-aos="zoom-in">
                        <div className ="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className ="swiper-wrapper">
                                <div className ="swiper-slide">
                                    <div className ="testimonial-item">
                                        <h3>Ananya M</h3>
                                        {/* <!-- <h4>Ceo &amp; Founder</h4> --> */}
                                        <p>
                                            <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                            ATIT's focus on collaboration and team dynamics within DevOps was
                                            exceptional. Learning to work efficiently in a team has been a
                                            game-changer for me in my professional journey. The course projects
                                            encouraged teamwork and problem-solving, preparing us for real-world
                                            work environments.
                                            <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className ="swiper-slide">
                                    <div className ="testimonial-item">

                                        <h3>Priya R</h3>
                                        {/* <!-- <h4>Designer</h4> --> */}
                                        <p>
                                            <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The hands-on labs in the ATIT DevOps course were incredibly useful.
                                            Real-world scenarios helped me understand the practical application
                                            of DevOps principles. The instructors were always available to
                                            clarify doubts, making the learning experience highly engaging.
                                            <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- End testimonial item --> */}
                                <div className ="swiper-slide">
                                    <div className ="testimonial-item">
                                        <h3>Rajesh S</h3>
                                        {/* <!-- <h4>Store Owner</h4> --> */}
                                        <p>
                                            <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The mentorship program at ATIT stood out. The personalized guidance
                                            I received throughout the course ensured I stayed on track and
                                            grasped the concepts effectively. The mentors were experienced and
                                            approachable, providing valuable insights into the industry.
                                            <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- End testimonial item --> */}
                                <div className ="swiper-slide">
                                    <div className ="testimonial-item">

                                        <h3>Deepak K</h3>
                                        {/* <!-- <h4>Freelancer</h4> --> */}
                                        <p>
                                            <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The flexibility in learning pace was great. ATIT allowed me to
                                            balance my job and studies seamlessly, making the DevOps course
                                            accessible and achievable. The course materials were comprehensive,
                                            making self-paced learning a breeze.
                                            <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- End testimonial item --> */}

                                <div className ="swiper-slide">
                                    <div className ="testimonial-item">
                                        <h3>Arjun N</h3>
                                        {/* <!-- <h4>Entrepreneur</h4> --> */}
                                        <p>
                                            <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The case studies were enlightening. They provided a deep dive into
                                            industry challenges and solutions, offering valuable insights that I
                                            can apply in my career. The interactive discussions during the case
                                            study sessions were enriching and fostered a deeper understanding of
                                            DevOps.
                                            <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- End testimonial item -->. */}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MySwiper;
