import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import "../css/animation.css"
import Company from '../Components/Company'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import LeftBar from '../Components/LeftBar'
import Rocket from '../Components/Rocket'

import { useState } from 'react'
function Contact() {
  const scriptURLAdmin = "https://script.google.com/macros/s/AKfycbyxtcehxZwNx77I0QYUOqLC8ZAOG9jWRVZIDoP_24nR0bWKUR2FQN7YQ8AuSuQZUT2x/exec"
  const scriptURLMD = "https://script.google.com/macros/s/AKfycbzFSSWqyZDoefkXarZgjDd26X2J4tPzotfkEpHsq_Oy7ES2neY8OXxTykxAroOKANWu/exec"
  const jaiurl = "https://script.google.com/macros/s/AKfycbxHha_XQ3qKAYbsGZoeK0VtaMJsIvkW1i0yaMqYtsQLPcd9q_Y5N_bYJNJT2ug1p-LaXg/exec"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    value = value.trim()
    setFormData({
        ...formData,
        [name]: value,
    });
    validateField(name, value);
};

const validateField = (name, value) => {
    switch (name) {
        case 'name':
            setErrors({
                ...errors,
                name: value.length === 0 ?  'Name is required': /\d/.test(value) ? 'Invalid name' : '',
            });
            break;
        case 'email':
            setErrors({
                ...errors,
                email:
                    value.length === 0 ?  'Email is required':
                        !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
                        ? 'Invalid email'
                        : '',
            });
            break;
        case 'phone':
            setErrors({
                ...errors,
                phone:
                value.length === 0
                ? 'Phone number is required'
                :  value.length !== 10 || !/^[6-9]\d+$/.test(value)? 'Invalid phone' : '',
            });
            break;
        default:
            break;
    }
};
const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.name || errors.email || errors.phone) return
    if (!formData.name || !formData.email || !formData.phone) {
      setErrors({
        name: !formData.name ? 'Name is required.' : '',
        email: !formData.email ? 'Email is required.' : '',
        phone: !formData.phone ? 'Phone is required.' : '',
      });
      return;
    }
    setErrors({
      name: '',
      email: '',
      phone: '',
    });

    setLoading(true);

    try {
      // Make the first API call
      const responseAdmin = await fetch(scriptURLAdmin, { method: 'POST', body: new FormData(e.target) });
      const resultAdmin = await responseAdmin.json();
      const responseMD = await fetch(scriptURLMD, { method: 'POST', body: new FormData(e.target) });
      const resultMD = await responseMD.json();

      // Make the second API call
      const responseJai = await fetch(jaiurl, { method: 'POST', body: new FormData(e.target) });
      const resultJai = await responseJai.json();
     
      // Check the results of both API calls
      if ( resultAdmin.result === 'success' && resultMD.result === 'success' && resultJai.result === 'success') {
        alert('Thank you! Your form is submitted successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Error in request');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      alert('Error in request');
    } finally {
      setLoading(false);
    }
  };




  return (
    <div>
      <Navbar />
      <section
        style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
        className ="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5">
        <div className ="container z-3 text-center">
          <div className ="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
            <div>
              <h1 data-aos="fade-up" data-aos-duration="500" className ="primary-header">
                Contact <span className ="primary-color">Us</span>
              </h1>
              <p className ="text-light fs-6 text-capitalize fw-light" data-aos="fade-up" data-aos-duration="700">Thank
                you for your interest in getting in touch with us. We value your feedback, questions, and
                suggestions.</p>
              <nav
                data-aos="fade-up"
                data-aos-duration="800"
                style={{
                  '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")'
                }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* form section*/}
      <section className="contact-form mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-3">
              <div className="contact-form mb-2" data-aos="fade-up" data-aos-duration="700">
                <h2 className="text-center mb-4 linear-gradient-text">Contact Us</h2>
                <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Name <span className="text"> *</span></label>
                    <div style={{ position: "absolute", zIndex: "2", left: "50%", transform: "translateX(-50%)", color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.name}</div>

                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email <span className="text"> *</span></label>
                    <div style={{ position: "absolute", zIndex: "2", left: "50%", transform: "translateX(-50%)", color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>

                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      maxLength="10"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone Number <span className="text"> *</span></label>
                    <div style={{ position: "absolute", zIndex: "2", left: "50%", transform: "translateX(-50%)", color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>

                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      placeholder="Enter your message"
                      style={{ height: '80px' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message">Message <span>(Optional)</span></label>
                  </div>
                  <div id="output" className="text-center"></div>
                  <div className="text-center pt-2">

                    <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 mt-3" data-aos="zoom-in" data-aos-duration="700">
              <div id="map" className="h-100">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7227190712797!2d80.2460233746738!3d12.989578514484684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d48aabc65c1%3A0x6f54da323bd9c8d0!2sATIT!5e0!3m2!1sen!2sin!4v1701325976498!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our trained students */}
      <Company />
      {/* footer */}
      <Footer />
      {/* contact form */}
      <ContactForm />
      {/* leftbar */}
      <LeftBar noContact={true} />
      {/* Rocket */} 
      <Rocket />
    </div>
  )
}

export default Contact