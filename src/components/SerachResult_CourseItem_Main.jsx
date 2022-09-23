import React from 'react';

function SerachResult_CourseItem_Main({link , img , title, educator}) {
    return (
        <a href={link} className='course-result_item flex'>
            <img src={img} alt="img" />
            <div className="search-course_info flex">
                <h4>{title}</h4>
                <p>{educator}</p>
            </div>
        </a>
    );
}

export default SerachResult_CourseItem_Main;