import React from 'react'

const Company = () => {
  return (
    <div class="container company-logos mb-5 overflow-hidden">
        <p
          class="text-center text-capitalize justify-content-center mt-4 display-6 linear-gradient-text fw-semibold"
          data-aos="fade-up"
          data-aos-duration="7000"
        >
          Our Trained Students are Hired By
        </p>
        <div class="row">
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/1.png" class="img-fluid" alt="company " />
          </div>
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/2.png" class="img-fluid" alt="company " />
          </div>
          <div class="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/img/3.png" class="img-fluid" alt="company " />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/4.png" class="img-fluid" alt="company " />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/5.png" class="img-fluid" alt="company " />
          </div>
          <div class="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/img/6.png" class="img-fluid" alt="company " />
          </div>
        </div>
      </div>
  )
}

export default Company