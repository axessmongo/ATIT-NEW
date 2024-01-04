import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer id="footer" className="footer pt-5 pb-3">
                <div className="container">
                    <div className="position-relative d-none d-lg-block">
                        <div className="comet row">
                            <div className="col-lg-3"><div className=""></div></div>
                            <div className="col-lg-3 cometlines"><div className="cometline"></div></div>
                            <div className="col-lg-3 cometlines"><div className="cometline"></div></div>
                            <div className="col-lg-3 cometlines"><div className="cometline"></div></div>
                        </div>
                    </div>
                    <div className="lines d-lg-none">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="row gy-3 mt-3">
                        <div className="col-lg-3 col-md-6 d-flex address" data-aos="fade-up" data-aos-duration="700">
                            <i className="bi bi-geo-alt icon"></i>
                            <div>
                                <h4>Address</h4>
                                <p>
                                    <Link href="https://maps.app.goo.gl/Cx14du1boxQ4R8MY9" target="_blank" className="map text-decoration-none">
                                        Tidel Park, GF-04,<br />
                                        No-4, Rajiv Gandhi Salai,<br />
                                        Taramani,<br />
                                        Chennai - 600113.<br />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="800">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Connect</h4>
                                <p>
                                    <strong>Phone:</strong><Link href="tel:7845721438">78457 21438</Link>
                                    <br />
                                    <strong>Phone:</strong> <Link href="tel:7358107180">73581 07180</Link>
                                    <br />
                                    <strong>Email:</strong><Link href="mailto:info@turn-ai.in">info@turn-ai.in</Link><br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="900">
                            <i className="bi bi-book-half icon"></i>
                            <div className="text-decoration-none">
                                <h4>Courses</h4>
                                <div className="text-decoration-none courses-links">
                                    <Link href="courses.html" onClick={() => sessionStorage.setItem('courseList', '2')} className="text-decoration-none"><strong>Software Developement</strong></Link>
                                    <br />
                                    <Link href="courses.html" onClick={() => sessionStorage.setItem('courseList', '1')} className="text-decoration-none"><strong>Software Testing</strong></Link>
                                    <br />
                                    <Link href="courses.html" onClick={() => sessionStorage.setItem('courseList', '3')} className="text-decoration-none"><strong>Devops</strong></Link>
                                    <br />
                                    <Link href="courses.html" onClick={() => sessionStorage.setItem('courseList', '4')} className="text-decoration-none"><strong>Machine Learning & AI</strong></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links " data-aos="fade-up" data-aos-duration="1000">
                            <h4 className="text-center text-md-start">Follow Us</h4>
                            <div className="social-links d-flex justify-content-center justify-content-md-start">
                                {/* <Link href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                                <Link href="https://www.facebook.com/atitchennai/" target="_blank" className="facebook"><i className="bi bi-facebook"></i></Link>
                                <Link href="https://www.instagram.com/atitchennai/" target="_blank" className="instagram"><i className="bi bi-instagram"></i></Link>
                                <Link href="https://www.youtube.com/@ATITchennai" target="_blank" className="youtube"><i className="bi bi-youtube"></i></Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        Copyrights  &copy; <strong><span>ATIT. </span></strong>All Rights Reserved. <Link href="./privacy-policy.html" className="d-block d-md-inline position-relative">Privacy policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer