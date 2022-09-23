import React from 'react';

function Course_Item({title , level , topic , goal , educator, rate, reviewTotal , price, count , img}) {
    return (
        <a href="#" className="flex">
            <div className="course-hover">
                <span className="course-hover_title">{title}</span>
                <div className="course-hover_des flex">
                    <span>{level}</span>
                    <span>{topic}</span>
                    <span>{goal}</span>
                </div>
            </div>
            <li className="course-item">
                <div className="course-item_top">
                    <img src={img} alt=""/>
                    <h5>{title}</h5>
                </div>
                <div className="course-item_bottom">
                    <span>{educator}</span>
                    <div className="course_rate">{"⭐️".repeat(rate)}({reviewTotal})</div>
                    <div className="course_price">₩{price}</div>
                    <div className="course_info flex">
                        <p>+{count}명</p>
                    </div>
                </div>
            </li>
        </a>
    );
}

export default Course_Item;