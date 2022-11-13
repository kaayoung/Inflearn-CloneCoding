import React from 'react';
import SerachResult_CourseItem_Main from './SerachResult_CourseItem_Main'
import {searchDummyData} from '../../data/mainCourse_data'

function SearchResult_Main(keyword) { // keyword

    const word = keyword.keyword
    const filterCourseTitle = searchDummyData.filter(x => {
        return x.title.replace(" ","").toLowerCase().includes(word.replace(" ","").toLowerCase())
    })

    return (
        <div className="search-result">
            <div className="search-result_list">
                <h3>강의</h3>
                <div className="course-result_list">                  
                    {filterCourseTitle.map((x) => {return (
                        <SerachResult_CourseItem_Main keyword={keyword.keyword} link={x.link} img={x.img} title={x.title} educator={x.educator} />
                    )})}
                </div>                
            </div>

            
        </div>
        // 
        
    );
}

export default SearchResult_Main;
