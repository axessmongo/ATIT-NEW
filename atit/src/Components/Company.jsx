import React from 'react'

const Company = () => {
  return (
    <div className="container company-logos mb-5 overflow-hidden">
      <p
        className="text-center text-capitalize justify-content-center mt-4 display-6 linear-gradient-text fw-semibold"
        data-aos="fade-up"
        data-aos-duration="7000"
      >
        Our Trained Students are Hired By
      </p>
      <div className="row">
        <div className="col-md-2" data-aos="fade-right" data-aos-duration="1000">
          <img src="./assets/img/1.png" className="img-fluid" alt="company " />
        </div>
        <div className="col-md-2" data-aos="fade-right" data-aos-duration="1000">
          <img src="./assets/img/2.png" className="img-fluid" alt="company " />
        </div>
        <div className="col-md-2" data-aos="fade-right" data-aos-duration="1000">
          <img src="./assets/img/3.png" className="img-fluid" alt="company " />
        </div>
        <div className="col-md-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="./assets/img/4.png" className="img-fluid" alt="company " />
        </div>
        <div className="col-md-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="./assets/img/5.png" className="img-fluid" alt="company " />
        </div>
        <div className="col-md-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="./assets/img/6.png" className="img-fluid" alt="company " />
        </div>
      </div>
      <div className="border-bottom mt-4 mb-5"></div>
      <div className='upper-footer-content text-center'>
        <p className="text-center text-capitalize justify-content-center my-4 display-6 linear-gradient-text fw-semibold"
          data-aos="fade-up"
          data-aos-duration="7000">Key Program Partners and Supporters</p>
        <div className="row justify-content-center">
          <div className="col-md-2" data-aos="fade-right" data-aos-duration="1000">
            <img src="./assets/imagesandvectors/partners/partner1.png" alt="./assets/imagesandvectors/partners/partner1.png"/>
          </div>
          <div className="col-md-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="./assets/imagesandvectors/partners/partner2.png" alt="./assets/imagesandvectors/partners/partner2.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company