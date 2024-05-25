import React from 'react'
import phoneIcon from "../../assets/icons/formPhoneIcon.png"
import emailIcon from "../../assets/icons/formEmailIcon.png"
import locationIcon from "../../assets/icons/formLocationIcon.png"
import formShape from "../../assets/images/formShape.png"
const ContactUs = () => {
    return (
        <div className='contact-us-main-con'>
            <div className='contact-us-heading'>
                <h1>Contact Us</h1>
                <p>Any question or remarks? Just write us a message!</p>
            </div>
            <div className='contact-us-form-con'>
                <div className='form-info'>
                    <div className="form-heading">
                        <h2>Contact Information</h2>
                        <p className='heading-text'>Say something to start a live chat!</p>
                        <div className='side-details'>
                            <div className='info'>
                                <span>
                                    <img src={phoneIcon} alt="" />

                                </span>
                                <p>+92 xxxxxxxxxx</p>
                            </div>
                            <div className='info'>
                                <span>
                                    <img src={emailIcon} alt="" />

                                </span>
                                <p>demo@gmail.com</p>
                            </div>
                            <div className='info'>
                                <span>
                                    <img src={locationIcon} alt="" />

                                </span>
                                <p>Lahore, Pakiistan</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-shape'>
                        <img src={formShape} alt="" />
                    </div>
                </div>
                <div className='form-con'>

                    <form action="" className='contact-us-form'>
                        <div className='input-con-1'>
                            <div className='firstName'>
                                <p className='contact-us-input-label'>First Name</p>
                                <input type="text"
                                    name="firstName"
                                />
                            </div>
                            <div className='lastName'>
                                <p className='contact-us-input-label'>Last Name</p>
                                <input
                                    type="text"
                                    name="lastName"
                                />
                            </div>

                        </div>
                        <div className='input-con-2'>
                            <div className='email'>
                                <p className='contact-us-input-label'>Email</p>
                                <input type="email"
                                    name="email"
                                />
                            </div>
                            <div className='phoneNumber'>
                                <p className='contact-us-input-label'>Phone Number</p>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                />
                            </div>


                        </div>
                        <div className='message'>
                            <p className='contact-us-input-label'>Message</p>
                            <textarea name="message" id="" placeholder='Write your message..' />

                        </div>
                        <button
                            type="submit"
                            className='contact-us-submit-btn'>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs