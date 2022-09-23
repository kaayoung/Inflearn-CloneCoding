import React from 'react';

function Review_Main_Item({name , hours , title , content}) {
    return (
        <div className="courseReview-review_item">
            <div className="review-writer">{name} 님(수강생) <span>{hours}시간 전</span></div>
            <h5 className="review-title">{title} </h5>
            <p className="review-content">{content}</p>
        </div>
    );
}

export default Review_Main_Item;