import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LeftBar({noContact, noPap, coursePage, blogPage}) {
  useEffect(() => {
    const popupElement = document.querySelector('.popup');
  
    if (popupElement) {
      setTimeout(function () {
        popupElement.classList.remove('pop-ani');
      }, 2000);
  
      setInterval(function () {
        popupElement.classList.add('pop-ani');
      }, 5000);
  
      setInterval(function () {
        popupElement.classList.remove('pop-ani');
      }, 10000);
    }
  }, []);
  

  return (
    <div className="position-fixed z-3 bottom-0 d-flex align-items-center flex-column justify-content-center overflow-visible">
      <div className="h-250px">
        <div
          className="bell d-none overflow-visible position-relative"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          {/* dotlottie-player code */}
          <span className="position-absolute top-0 start-50 d-none translate-middle badge rounded-pill bg-danger">
            New
          </span>
          <div className="cloud">
            <Link
              to="/pap"
              className="shadow1 cloud-text primary-text py-3 py-1 rounded-3 text-decoration-none d-block text-light"
            >
              Pay After Placement
              <i className="fa-solid fa-caret-left" />
            </Link>
          </div>
        </div>
        <Link to="/pap" className={`popup pop-ani text-decoration-none ${noPap && 'd-none'}`}>
          <span>P</span>
          <span>a</span>
          <span>y</span>
          <span> </span>
          <span>A</span>
          <span>f</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <span> </span>
          <span>P</span>
          <span>l</span>
          <span>a</span>
          <span>c</span>
          <span>e</span>
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
        </Link>
        <div
          className={`overflow-visible class-ico ${noContact && 'd-none'}`}
          data-aos="fade-right"
          data-aos-duration={1000}
          data-bs-toggle="modal"
          data-bs-target="#contact"
        >
          <dotlottie-player
            title="contact"
            src="https://lottie.host/a335969b-c315-4035-be6b-d18bed4b5831/l73y30ZFSl.json"
            background="transparent"
            speed={1}
            style={{ width: '80px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      <Link
        to="https://api.whatsapp.com/send/?phone=%2B917845721438&text&app_absent=0"
        target="_blank"
        id="wa"
        className="cursor"
      >
        {/* WhatsApp link */}
        <img
          src={`${coursePage ? `../../` : blogPage ? `../`:` `}./assets/imagesandvectors/vectors/whatsapp.png`}
          alt="whatsapp"
          className="img-fluid"
          style={{ width: 70 }}
        />
      </Link>
    </div>
  );
}
