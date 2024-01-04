import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="nav-holder">
                <nav className="navbar navbar-expand-lg py-0 col-lg-10 mx-auto">
                    <div
                        className="container-fluid p-0 d-flex align-items-start"
                        data-aos="fade-down"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="500"
                    >
                        <NavLink
                            className="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white shadow1"
                            to="/"
                        >
                            <img
                                src="assets/imagesandvectors/vectors/atit_logo.png"
                                alt="logo"
                            />
                        </NavLink>
                        <button
                            className="navbar-toggler d-none shadow-none ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button
                            className="d-lg-none ms-auto ms-md-0 canvas-bar bg-primary border-0 p-3"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbar"
                            aria-controls="navbar"
                        >
                            <i className="fa-solid fa-bars fa-xl text-white"></i>
                        </button>
                        <div
                            className="collapse navbar-collapse position-relative"
                            id="navbarSupportedContent"
                        >
                            <ul
                                className="navbar-nav shadow1 ms-auto mb-0 bg-light overflow-hidden rounded-bottom-3"
                            >
                                <li className="nav-item">
                                    
                                    <NavLink
                                exact
                                activeClassName="navbar__link--active"
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink                               
                                activeClassName="navbar__link--active"
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="navbar__link--active" to="/Contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="navbar__link--active" to="/Courses">Courses</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        title="Pay after Placement"
                                        className="nav-link"
                                        activeClassName="navbar__link--active"
                                        to="/Pap"
                                    >PAP
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="navbar__link--active" to="/Blog">Blog</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div
                className="offcanvas offcanvas-start"
                tabindex="-1"
                id="navbar"
                aria-labelledby="navbar"
            >
                <div className="offcanvas-header p-0 px-2">
                    <NavLink
                        className="navbar-brand fw-semibold fs-4 rounded-bottom-3 text-white"
                        to="index.html"
                    >
                        <img src="assets/imagesandvectors/vectors/atit_logo.png" alt="logo" />
                    </NavLink>
                    <button
                        type="button"
                        className="m-2 p-0 btn shadow-none border-0 text-danger me-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="fa-solid fa-xmark fa-xl"></i>
                    </button>
                </div>
                <div className="offcanvas-body px-0 py-5 text-center">
                    <ul className="navbar-nav ms-auto overflow-hidden mb-0 rounded-bottom-3">
                        <li className="nav-item">
                            {/* <NavLink className="nav-link active" aria-current="page" to="index.html"
                            >Home
                            </NavLink> */}
                            <NavLink
                                exact
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            {/* <NavLink className="nav-link" to="about.html">About</NavLink> */}
                            <NavLink
                            
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to="contact.html">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to="courses.html">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to="./pay-after-placement.html">PAP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"activeClassName="navbar__link--active"  to="blog.html">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar