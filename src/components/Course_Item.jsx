import React from 'react';
import { useNavigate } from 'react-router-dom';

// title , level , topic , goal , educator, rate, reviewTotal , price, count , img
function Course_Item(props) {
    
    const navigate = useNavigate() ;
    
    function clickCourseItem() {
        navigate(`/courseList/${props.title}`, {
            state : props 
        }) ;
    }

    return (        
        <div className="courseItem flex" onClick={clickCourseItem}>            
            <div className="course-hover">
                <span className="course-hover_title">{props.title}</span>
                <div className="course-hover_des flex">
                    <span>{props.level}</span>
                    <span>{props.topic}</span>
                    <span>{props.goal}</span>
                </div>
            </div>            
            <div className="course-item">
                <div className="course-item_top">
                    <img src={props.img} alt=""/>
                    <h5>{props.title}</h5>
                </div>
                <div className="course-item_bottom">
                    <span>{props.educator}</span>
                    <div className="course_rate">{"⭐️".repeat(props.rate)}({props.reviewTotal})</div>
                    <div className="course_price">{props.price ? "₩" + props.price : "무료"}</div>
                    <div className="course_info flex">
                        <p>+{props.count}명</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course_Item;