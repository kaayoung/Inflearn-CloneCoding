import React from 'react';
import CourseListContainer from './CourseListContainer';


function CourseListSearch(props) {
    return (
        <section id='courseListSearch'>
            <div id="course-search flex">
                <div className="course-search_container">
                    <div className="course-search_inputWrap flex">
                        <input type="text" id='course-search-input' placeholder='강의 검색하기' />
                        <button type="submit">검색</button>
                    </div>
                </div>
                <div className="courseSearch-tag_container">
                    <h3>전체</h3>
                    <div className="courseSearch-tags flex">
                        <ul className='flex'>
                            <li className="tagSearch">
                                <input type="text" id='courseSearch-tagSearch' placeholder='기술검색'/>
                                <button type="reset"><iconify-icon icon="fa6-solid:x"></iconify-icon></button>
                            </li>
                            <li className='tagSearch_result'>Python</li>
                            <li className='tagSearch_result'>JavaScript</li>
                            <li className='tagSearch_result'>Java</li>
                            <li className='tagSearch_result'>Html/CSS</li>
                            <li className='tagSearch_result'>C++</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                            <li className='tagSearch_result'>Spring</li>
                        </ul>                        
                    </div>
                </div>
                <div className="courseSearch-filter flex">
                    <div className="search-filter">
                        <div className="filter-result_container flex">
                            <h4 className='flex'><iconify-icon icon="akar-icons:settings-horizontal"></iconify-icon>필터</h4>
                            <div className="filter-results flex">
                                <div className="filter-results_price flex">
                                    <p> 유료 </p>  ·
                                    <p> 무료 </p>  ·
                                    <p> 할인중</p> 
                                </div>
                                <div className="result-divider">|</div>
                                <div className="filter-results_level flex">
                                    <p>입문 </p>  ·
                                    <p>초급 </p>  ·
                                    <p>중급이상</p>
                                </div>
                            </div>
                        </div>
                        <div className="filter-choose_container hidden flex">                                                        
                        </div>
                    </div>
                    <div className="search-sort">
                        <label htmlFor="course-sort">                            
                            <select name="course-sort" id="course-sort">
                                
                                <option value="recommend">추천순</option>
                                <option value="popular">인기순</option>
                                <option value="latest">최신순</option>
                                <option value="likes">좋아요순</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <CourseListContainer />
        </section>
    );
}

export default CourseListSearch;