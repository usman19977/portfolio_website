import React from 'react'
import './Footer.css';
import footerLogo from '../../assets/logo.png';
import userIcon from '../../assets/user_icon.svg';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerLogo} alt="" width={110} height={60} />
                    <p>I am a fullstack software engineer from Pakistan with 7+ years of experience worked with multiple national and multi national firms.</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={userIcon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    @ 2024 Usman Bashir. All rights reserved
                </p>
                <div className="footer-bottom-right">
                    <p>Terms & Services</p>
                    <p>Privacy & Policy</p>
                    <p>Connect with me</p>

                </div>
            </div>
        </div>
    )
}
