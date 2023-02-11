import React from 'react';

function SerachResult_CourseItem_Main({link , img , title, educator , keyword}) {



    function highlightKeyword(title , keyword) {
        const titleArr = title.split(" ") ; // ["react" , "course"]
        let arr = []
        titleArr.forEach(x=> {                        
            if(x==keyword) {                
                let temp =  (<p className='highlight' style={{color : '#1dc078'}}>{x} &nbsp;</p>)
                console.log('temp : ',temp)
                arr.push(temp)
            } else {
                let temp = (<>{ x}</>)
                arr.push(temp)
            }
        })        
        return arr ;
    }

    return (
        <a href={link} className='course-result_item flex'>
            <img src={img} alt="img" />
            <div className="search-course_info flex">                
                <h4 className='flex'> {(highlightKeyword(title , keyword))}</h4>
                <p className='search-info_edu'>{educator}</p>
            </div>
        </a>
    );
}

export default SerachResult_CourseItem_Main;