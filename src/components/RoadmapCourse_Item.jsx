import React from 'react';

function RoadmapCourse_Item({roadCourse_img , roadCourse_title}) {
    return (
        <li>
            <a href="#" className="roadmap-course_item">                                    
                    <div className="roadmap-item_img">
                        <img src={roadCourse_img} alt=""/>
                    </div>
                    <div className="roadmap-item_title">
                        <span>{roadCourse_title}</span>
                    </div>                                    
            </a>
        </li>
    );
}

export default RoadmapCourse_Item;