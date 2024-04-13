import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/about_profile.jpg'
export const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profileImg} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            With over 7 years of experience as a seasoned fullstack engineer, I thrive in leadership roles, excel as a mentor, and am deeply passionate about technology. I eagerly seek opportunities to collaborate on cutting-edge projects and bring innovative ideas to fruition. Throughout my career in the information technology and services industry, I have consistently delivered successful outcomes, demonstrating a track record of achievement.</p>
                        <p>My track record in the information technology and services industry reflects a history of delivering exceptional results, driven by my passion for advancing technology and solving complex challenges.</p>

                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "100%" }} />
                        </div>

                        <div className="about-skill">
                            <p>Node JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>

                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Vite</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Express JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MERN Stack</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Fullstack Development</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Nest JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Rest API</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>GraphQL API</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>CI / CD DevOps </p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Amazon Web Services</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Laravel | PHP</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JSON</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Typescript</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Suitescript</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Oracle</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Netsuite</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>ERP Development</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Technical Consultancy</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Problem Solving</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>NO SQL</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MySql</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Websockets</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Redis</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>OAuth | JWT | SSO </p>
                            <hr style={{ width: "100%" }} />
                        </div>

                        <div className="about-skill">
                            <p>Sanity</p>
                            <hr style={{ width: "100%" }} />
                        </div>

                        <div className="about-skill">
                            <p>Serverless</p>
                            <hr style={{ width: "100%" }} />
                        </div>









                    </div>



                </div>

            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>

    )
}
