import React from 'react';

function CourseReview_item({name , hours, course_title , review_content}) {
    return (
        <div className="courseReview-review_item">
            <div className="review-writer">{name} 님(수강생) <span>{hours}시간 전</span></div>
            <h5 className="review-title">{course_title} </h5>
            <p className="review-content">{review_content}</p>
        </div>
    );
}

export default CourseReview_item;