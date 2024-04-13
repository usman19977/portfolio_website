import React from 'react'
import './Hero.css';
import profileImg from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
    return (
        <div className='hero' id="home">
            <img src={profileImg} alt="" />
            <h1><span>I'm Usman Bashir,</span> fullstack software engineer based in PAK.</h1>
            <p>A seasoned fullstack engineer with over 7+ years of experience, I excel as a leader, mentor, and technology enthusiast. I am eager to collaborate on innovative ideas and projects. My track record demonstrates a history of success in the information technology and services industry.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With me </AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}
