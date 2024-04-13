import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underLineImg from '../../assets/nav_underline.svg';

export default function Navbar() {
    const [menu, setMenu] = useState("home");
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li><p onClick={() => setMenu("home")}>Home</p>{menu === 'home' ? <img src={underLineImg} alt="" /> : <></>}</li>
                <li><p onClick={() => setMenu("about")}>About Me</p>{menu === 'about' ? <img src={underLineImg} alt="" /> : <></>}</li>
                <li><p onClick={() => setMenu("services")}>Services</p>{menu === 'services' ? <img src={underLineImg} alt="" /> : <></>}</li>
                <li><p onClick={() => setMenu("portfolio")}>Portfolio</p>{menu === 'portfolio' ? <img src={underLineImg} alt="" /> : <></>}</li>
                <li><p onClick={() => setMenu("contact")}>Contact</p>{menu === 'contact' ? <img src={underLineImg} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}
