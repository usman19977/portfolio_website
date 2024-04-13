import React, { useState } from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/about_profile.jpg'
import skillData from '../../assets/skills_data';
import arrowIcon from '../../assets/arrow_icon.svg';

export const About = () => {
    const [showMore, setShowMore] = useState(false);
    const displayedSkills = showMore ? skillData : skillData.slice(0, 5);
    return (
        <div className='about' id="about">
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
                        {displayedSkills.map((skill, index) => {
                            return <div className="about-skill" key={index}>
                                <p>{skill.name}</p>
                                <hr style={{ width: skill.percentage }} />
                            </div>
                        })}
                    </div>
                    {!showMore && skillData.length > 5 && (
                        <div className="about-skill-showmore" onClick={() => setShowMore(true)}>
                            <p>Show More</p>

                        </div>
                    )}
                    {showMore && (
                        <div className="about-skill-showless" onClick={() => setShowMore(false)}>
                            <p>Show Less</p>

                        </div>
                    )}



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
