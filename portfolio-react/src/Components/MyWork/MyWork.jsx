import React from 'react'
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import myWorkData from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg';

export const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {myWorkData.map((work, index) => {
                    return <img src={work.w_img} alt="" key={index} />
                })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
    )
}
