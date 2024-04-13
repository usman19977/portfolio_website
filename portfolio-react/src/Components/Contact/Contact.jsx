import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';

import mailIcon from '../../assets/mail_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import callIcon from '../../assets/call_icon.svg';

export const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to sent me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mailIcon} alt="" /><p>usman.amir48@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={callIcon} alt="" /><p>+92-339-411-1997</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationIcon} alt="" /><p>Sharjah, United Arab Emirates | Karachi, Pakistan</p>
                        </div>

                    </div>
                </div>

                <form className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />

                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />

                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows="8" placeholder='Enter your message'></textarea>

                    <button className="contact-submit" type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}
