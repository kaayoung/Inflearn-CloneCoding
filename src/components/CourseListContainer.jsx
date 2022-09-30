import React from 'react';
import { courseListData } from '../data/mainCourse_data' ;
import Course_Item from './Course_Item';

function CourseListContainer(props) {    

    return (
        <div id='courseListContainer' className='flex'>
            <ul className='flex'>            
                {courseListData.map(x => {
                    return (<Course_Item title={x.title} level={x.level} topic={x.topic} goal={x.goal} educator={x.educator} rate={x.rate} reviewTotal={x.reviewTotal} price={x.price} count={x.count} img={x.img}/>)
                    // return (<Course_Item title={x.title} level={x.level} topic={x.topic} goal={x.goal} educator={x.educator} rate={x.rate} reviewTotal={x.reviewTotal} price={x.price} count={x.count} img={x.img}/>)
                })}
            </ul>
        </div>
    );
}

export default CourseListContainer;