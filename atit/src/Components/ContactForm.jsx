import React from 'react'
import { useState } from 'react'

export default function ContactForm() {
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
        const { name, value } = e.target;
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
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const isNameEmpty = formData.name.trim() === '';
        const isEmailEmpty = formData.email.trim() === '';
        const isPhoneEmpty = formData.phone.trim() === '';
    
        if (isNameEmpty || isEmailEmpty || isPhoneEmpty) {
          setErrors({
            name: isNameEmpty ? 'Name is required.' : '',
            email: isEmailEmpty ? 'Email is required.' : '',
            phone: isPhoneEmpty ? 'Phone is required.' : '',
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
          if (resultAdmin.result === 'success' && resultMD.result === 'success' && resultJai.result === 'success') {
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
                                <div style={{position:"absolute",zIndex:"2",left:"50%",transform:"translateX(-50%)" , color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.name}</div>

                            </div>
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
                                <div style={{ position:"absolute",zIndex:"2",left:"50%",transform:"translateX(-50%)" ,color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>
                           
                            </div>
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    maxLength={10}
                                    required=""
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label htmlFor="phone">
                                    Phone Number <span className="text"> *</span>
                                </label>
                                <div style={{position:"absolute",zIndex:"2",left:"50%",transform:"translateX(-50%)" , color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>
                          
                            </div>
                             <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Enter your message"
                                    style={{ height: 80 }}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <label htmlFor="message">
                                    Message <span>(Optional)</span>
                                </label>
                            </div>
                           
                            <div className="text-center">
                                <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                                    {loading ? 'Submitting...' : 'Submit'}
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
