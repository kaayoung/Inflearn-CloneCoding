import React from 'react';
import Course_Item from './Course_Item';

function Course_Container(dataArr) {
// {title , level , topic , goal , educator, rate, reviewTotal, price, count , img}

    return (
        <div className="course-item_container">            
            <ul className="course-list flex">
                {dataArr.dataArr.map((d) => {                      
                    return (<Course_Item title={d.title} level={d.level} topic={d.topic} goal={d.goal} educator={d.educator} rate={d.rate} 
                    reviewTotal={d.reviewTotal} price={d.price} count={d.count} img="https://cdn.inflearn.com/public/courses/324504/course_cover/1ba6aa0e-a276-4d62-9979-c5a29e690c51/m_3ds_basic.png"/>)
                })}
            </ul>
        </div>
    );
}

export default Course_Container;