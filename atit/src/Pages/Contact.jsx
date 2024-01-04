import React from 'react'
import Navbar from '../Components/Navbar'
function Contact() {
  return (
    <div>Contact
      <Navbar/>
      <section class="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5">
        <div class="container z-3 text-center">
            <div class="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
                <div>
                    <h1 data-aos="fade-up" data-aos-duration="500" class="primary-header">
                        Contact <span class="primary-color">Us</span>
                    </h1>
                    <p class="text-light fs-6 text-capitalize fw-light" data-aos="fade-up" data-aos-duration="700">Thank
                        you for your interest in getting in touch with us. We value your feedback, questions, and
                        suggestions.</p>
                    <nav data-aos="fade-up" data-aos-duration="800"
                        style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                        aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active text-white" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact