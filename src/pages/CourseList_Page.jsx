import React from 'react';
import CourseListSearch from '../components/main/CourseListSearch';
// import CourseListContainer from '../components/CourseListContainer';
import SideNav_CourseList from '../components/main/SideNav_CourseList';

function CourseList(props) {
    return (
        <main id='courseList_page' className='flex'>
            <div className="container flex">

                <SideNav_CourseList/>
                <CourseListSearch />
                {/* <CourseListContainer /> */}
            </div>
        </main>
    );
}

export default CourseList;