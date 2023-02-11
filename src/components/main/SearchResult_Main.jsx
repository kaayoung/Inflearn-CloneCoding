import React, { useEffect, useState } from 'react';
import SerachResult_CourseItem_Main from './SerachResult_CourseItem_Main'
import axios from 'axios';

function SearchResult_Main(keyword) { // keyword

    const [data, setData] = useState([])

    const word = keyword.keyword
    
    function handleFilterData (data) {        
        return data.filter(x => {
            if (x != null) {

                return x.title.replace(" ","").toLowerCase().includes(word.replace(" ","").toLowerCase()) 
            }
        })        
    }

    useEffect(()=> {
        const fetchData = async() => {
            const res = await axios.get("https://inflearn-clone-3aab6-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json")
            return res.data ;
        }
        fetchData().then((r) => {            
            setData((r)) ;            
        })
    },[])

    return (
        <div className="search-result">
            <div className="search-result_list">
                <h3>강의</h3>
                <div className="course-result_list">                  
                    {handleFilterData(data).map((x) => {return (
                        <SerachResult_CourseItem_Main keyword={x.courseID} link={x.link} img={x.img} title={x.title} educator={x.educator} />
                    )})}
                </div>                
            </div>

            
        </div>
        // 
        
    );
}

export default SearchResult_Main;
