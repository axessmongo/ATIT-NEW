import React from 'react'
import { useState } from 'react'

export default function ContactForm() {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        
          const [errors, setErrors] = useState({
            name: '',
            email: '',
            phone: '',
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
        
            // Perform validation
            validateField(name, value);
          };
        
          const validateField = (name, value) => {
            switch (name) {
              case 'name':
                setErrors({
                  ...errors,
                  name: value.length === 0 || /\d/.test(value) ? 'Invalid name' : '',
                });
                break;
              case 'email':
                setErrors({
                  ...errors,
                  email:
                    value.length === 0 ||
                    !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
                      ? 'Invalid email'
                      : '',
                });
                break;
              case 'phone':
                setErrors({
                  ...errors,
                  phone:
                    value.length !== 10 || !/^\d+$/.test(value) ? 'Invalid phone' : '',
                });
                break;
              default:
                break;
            }
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            // Check if there are no errors
            if (Object.values(errors).every((error) => error === '')) {
              // Process the form data
              console.log('Form submitted:', formData);
            } else {
              console.log('Form has errors. Please correct them.');
            }
          };





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
                        <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required=""
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name">
                                    Name <span className="text"> *</span>
                                </label>
                            </div>
                            <span style={{ color: 'red' }}>{errors.name}</span>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required=""
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email">
                                    Email <span className="text"> *</span>
                                </label>
                            </div>
                            <span style={{ color: 'red' }}>{errors.email}</span>
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
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label htmlFor="phone">
                                    Phone Number <span className="text"> *</span>
                                </label>
                            </div>
                            <span style={{ color: 'red' }}>{errors.phone}</span>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Enter your message"
                                    style={{ height: 80 }}
                                    defaultValue={""}
                                    value={formData.message}
                                    onChange={handleChange}
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

          </div>
    )
}
