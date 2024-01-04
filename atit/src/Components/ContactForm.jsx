import React from 'react'

export default function ContactForm() {
    return (
        <div><div
            className="modal fade"
            id="contact"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered p-3 p-md-5">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5 linear-gradient-text text-center"
                            id="exampleModalLabel"
                        >
                            Contact Form
                        </h1>
                        <button
                            type="button"
                            className="btn-close shadow-none"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body p-3">
                        <form id="contactForm" name="contactForm">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required=""
                                />
                                <label htmlFor="name">
                                    Name <span className="text"> *</span>
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required=""
                                />
                                <label htmlFor="email">
                                    Email <span className="text"> *</span>
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxLength={10}
                                    required=""
                                />
                                <label htmlFor="phone">
                                    Phone Number <span className="text"> *</span>
                                </label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Enter your message"
                                    style={{ height: 80 }}
                                    defaultValue={""}
                                />
                                <label htmlFor="message">
                                    Message <span>(Optional)</span>
                                </label>
                            </div>
                            <div id="output" className="text-center" />
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <button className='primary-btn d-none' data-bs-toggle="modal" data-bs-target="#contact">OPen</button>
        </div>
    )
}
