import React from 'react';

function Swiper() {
    const buttonStyle = {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: 'gray',
    };
    return (
        <div className='container text-center'>
            <p className='text-center text-capitalize mb-3 display-6 linear-gradient-text fw-semibold'>Genuine Feedback</p>
            <p className='text-center mt-2'>Outcome Of Our Quality Training</p>
            <div id="carouselExampleInterval" class="carousel slide pb-5 mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators d-flex mt-5 pt-5">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" style={buttonStyle} class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" style={buttonStyle} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" style={buttonStyle} aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" style={buttonStyle} aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" style={buttonStyle} aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner py-2">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <h5 className='text-center'>Ananya M</h5>
                        <p className='text-center'>
                            ATIT's focus on collaboration and team dynamics within DevOps was exceptional. Learning to work efficiently in a team has been a game-changer for me in my professional journey. The course projects encouraged teamwork and problem-solving, preparing us for real-world work environments.
                        </p>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <h5 className='text-center'>Priya R</h5>
                        <p className='text-center'>
                            The hands-on labs in the ATIT DevOps course were incredibly useful. Real-world scenarios helped me understand the practical application of DevOps principles. The instructors were always available to clarify doubts, making the learning experience highly engaging.
                        </p>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <h5 className='text-center'>Rajesh S</h5>
                        <p>
                            The mentorship program at ATIT stood out. The personalized guidance I received throughout the course ensured I stayed on track and grasped the concepts effectively. The mentors were experienced and approachable, providing valuable insights into the industry.
                        </p>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <h5 className='text-center'>Deepak K</h5>
                        <p>
                            The flexibility in learning pace was great. ATIT allowed me to
                            balance my job and studies seamlessly, making the DevOps course
                            accessible and achievable. The course materials were comprehensive,
                            making self-paced learning a breeze.
                        </p>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <h5 className='text-center'>Arjun N</h5>
                        <p>
                            The case studies were enlightening. They provided a deep dive into
                            industry challenges and solutions, offering valuable insights that I
                            can apply in my career. The interactive discussions during the case
                            study sessions were enriching and fostered a deeper understanding of
                            DevOps.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Swiper;
