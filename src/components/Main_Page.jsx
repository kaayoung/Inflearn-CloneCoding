import React from 'react';

function Main_Page(props) {
    return (
        <main>            
            <section id="ad">
                <div className="ad-banner flex">
                    <a href="#" className="ad-banner_slide flex">
                        <div className="ad-img"></div>
                        <img src="https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif" alt=""/>
                    </a>
                    <a href="#" className="ad-banner_slide flex">
                        <div className="ad-img"></div>
                        <img src="https://cdn.inflearn.com/public/main_sliders/78e964ab-3fdf-45be-ad2a-c8f425df9c98/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_628.png" alt=""/>
                    </a>
                    <a href="#" className="ad-banner_slide flex">
                        <div className="ad-img"></div>
                        <img src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif" alt=""/>
                    </a>
                </div>
                <div className="ad-button">
                    <div id="ad-btn-container" className="flex">
                        <div className="ad-btn_left flex">
                            <div className="add-btn_page flex">
                                <div className="add-btn_index">
                                    <span className="add-page_curIdx">1</span>
                                    <span>/</span>
                                    <span className="add-page_totalIdx">3</span>
                                </div>
                                <div className="add-btn_move">
                                    <span><iconify-icon icon="ep:arrow-left-bold"></iconify-icon></span>
                                    <span><iconify-icon icon="fe:pause"></iconify-icon></span>
                                    <span><iconify-icon icon="ep:arrow-right-bold"></iconify-icon></span>
                                </div>
                            </div>
                            <div className="add-btn_divider"></div>
                        </div>
                        <div className="ad-btn_right flex">
                            <ul className="add-btn_list flex">
                                <li className="add-btn_name">Top50</li>
                                <li className="add-btn_name">퀀트 투자</li>
                                <li className="add-btn_name">플러터 중급</li>
                            </ul>
                            <div className="add-btn_moreBtn flex">
                                <iconify-icon icon="ep:arrow-down"></iconify-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="search">
                <div className="search-container">
                    <h1 className="search-title">
                        배우고, 나누고, 성장하세요
                    </h1>
                    <div className="search-input ">
                        <input type="text" name="main-search" id="main-search" placeholder="배우고 싶은 지식을 입력해보세요."/>
                        <span><iconify-icon icon="carbon:search"></iconify-icon></span>
                    </div>
                    <div class="search-tag_container">
                        <ul class="search-tags flex">
                            <li className="search-tag_item">#MVC</li>
                            <li className="search-tag_item">#SpringBoot</li>
                            <li className="search-tag_item">#JPA</li>
                            <li className="search-tag_item">#Python</li>
                            <li className="search-tag_item">#Java</li>
                            <li className="search-tag_item">#Spring</li>
                            <li className="search-tag_item">#JavaScript</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="freeCourse">
                <div className="course_container">
                    <div className="course-title flex">
                        <h2>무료강의? 오히려 좋아✨</h2>
                        <a href="#"><iconify-icon icon="ep:arrow-right"></iconify-icon></a>
                    </div>
                    <div className="course-subtitle">
                        <h3>무료 강의부터 가볍게 시작해 보세요.</h3>
                    </div>
                    <div className="course-item_container">
                        <ul className="course-list flex">
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327126/cover/13b0e441-4a3d-44cb-acbb-d86af2412e18/327126-eng-2.png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                            <p>업데이트</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/course-324063-cover/3c856a69-e213-4394-8317-1469386b82cc" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/324059/cover/7ac25dbb-9193-4c7d-98fb-22b8bb4eba54" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>                            
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/328577/cover/d7cd62c2-db07-45d8-af8d-a3fa728cd8e7/inflearn-logo.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div class="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                        </ul>
                        
                    </div>
                    <div className="course-arrow_next">                            
                                <iconify-icon icon="ep:arrow-right"></iconify-icon>                            
                        </div>
                    <div className="course-arrow_prev">                            
                            <iconify-icon icon="ep:arrow-left"></iconify-icon>                            
                    </div>
                </div>
            </section>

            <section id="basicCourses">
                <div className="course_container">
                    <div className="course-title flex">
                        <h2>왕초보도 할 수 있어요💪</h2>
                        <a href="#"><iconify-icon icon="ep:arrow-right"></iconify-icon></a>
                    </div>
                    <div className="course-subtitle">
                        <h3>이미 검증된 쉽고 친절한 입문 강의!!</h3>
                    </div>
                    <div className="course-item_container">
                        <ul className="course-list flex">
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/329214/cover/0d3f339b-06de-40c3-a41a-8633df325ade/329214-eng.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                            <p>업데이트</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/324504/course_cover/1ba6aa0e-a276-4d62-9979-c5a29e690c51/m_3ds_basic.png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>                            
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/328376/cover/6baa63b8-8f8f-473d-9b55-9047a521037e/328376-eng.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div claclassNamess="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                        </ul>
                        
                    </div>
                    <div className="course-arrow_next">                            
                        <iconify-icon icon="ep:arrow-right"></iconify-icon>                            
                    </div>
                    <div className="course-arrow_prev">                            
                            <iconify-icon icon="ep:arrow-left"></iconify-icon>                            
                    </div>
                </div>
            </section>

            <section id="roadmap">
                <div className="roadmap_container course_container">
                    <div className="course-title flex">
                        <h2>기본부터 실무까지 제시해주는 로드맵🏃🏻‍♀️ <span>RoadMap!!</span></h2>
                        <a href="#"><iconify-icon icon="ep:arrow-right"></iconify-icon></a>
                    </div>
                    <div className="course-subtitle">
                        <h3>이미 검증된 쉽고 친절한 입문 강의!!</h3>
                    </div>

                    <div className="roadmap-course_container">
                        <ul className="roadmap-course_list flex">
                            <li>
                                <a href="#" className="roadmap-course_item">                                    
                                        <div className="roadmap-item_img">
                                            <img src="https://cdn.inflearn.com/public/roadmaps/29efab75-3480-4482-8ad8-4e984a4022f8/roadmap-38.png" alt=""/>
                                        </div>
                                        <div className="roadmap-item_title">
                                            <span>R로 정복하는 데이터 분석</span>
                                        </div>                                    
                                </a>
                            </li>  

                            <li>
                                <a href="#" className="roadmap-course_item">                                    
                                        <div className="roadmap-item_img">
                                            <img src="https://cdn.inflearn.com/public/roadmaps/fa1e0dbf-1786-4d81-bd22-d412b7937500/roadmap-77.png" alt=""/>
                                        </div>
                                        <div className="roadmap-item_title">
                                            <span>R로 정복하는 데이터 분석</span>
                                        </div>                                    
                                </a>
                            </li> 

                            <li>
                                <a href="#" className="roadmap-course_item">                                    
                                        <div className="roadmap-item_img">
                                            <img src="https://cdn.inflearn.com/public/roadmaps/c86d5f8f-2e37-4ee4-b3a9-cf39026d5fc4/roadmap-130.png" alt=""/>
                                        </div>
                                        <div className="roadmap-item_title">
                                            <span>R로 정복하는 데이터 분석</span>
                                        </div>                                    
                                </a>
                            </li> 

                            <li>
                                <a href="#" className="roadmap-course_item">                                    
                                        <div className="roadmap-item_img">
                                            <img src="https://cdn.inflearn.com/public/roadmaps/375/cover/14921546-8764-4962-bc0a-ac4383e9424f/roadmap-163.png" alt=""/>
                                        </div>
                                        <div className="roadmap-item_title">
                                            <span>R로 정복하는 데이터 분석</span>
                                        </div>                                    
                                </a>
                            </li> 
                        </ul>
                        
                    </div>
                    <div className="course-arrow_next">                            
                            <iconify-icon icon="ep:arrow-right"></iconify-icon>                            
                    </div>
                    <div className="course-arrow_prev">                            
                            <iconify-icon icon="ep:arrow-left"></iconify-icon>                            
                    </div>
                </div>
            </section>

            <section id="reading">
                <div className="reading_container course_container">
                    <div className="course-title flex">
                        <h2>읽어보기</h2>
                        <a href="#"><iconify-icon icon="ep:arrow-right"></iconify-icon></a>
                    </div>
                    <div className="reading-course_container">
                        <ul className="reading-course_list flex">
                            <li>
                                <a href="#" className="reading-course_item">                                    
                                        <div className="reading-item_img">
                                            <img src="https://cdn.inflearn.com/public/files/pages/180fc479-e7f7-4da1-be59-a4da13fdf3c1/curation-infcon2022-story-main.png" alt=""/>
                                        </div>
                                        <div className="reading-item_title">
                                            [큐레이션] INFCON 2022 기념 릴레이 할인 통합편!
                                        </div>                                    
                                        <div className="reading-item_subtitle">
                                            🌱 🏃 🎫 인프런의 첫 번째 오프라인 콘퍼런스,INFCON 2022! 인프콘 발표자분들 중엔인프런 지식공유자가 많다는 사실, 아시나요? 오늘은
                                        </div>                                    
                                </a>
                            </li>
                            <li>
                                <a href="#" className="reading-course_item">                                    
                                        <div className="reading-item_img">
                                            <img src="https://cdn.inflearn.com/public/files/pages/180fc479-e7f7-4da1-be59-a4da13fdf3c1/curation-infcon2022-story-main.png" alt=""/>
                                        </div>
                                        <div className="reading-item_title">
                                            [큐레이션] INFCON 2022 기념 릴레이 할인 통합편!
                                        </div>                                    
                                        <div className="reading-item_subtitle">
                                            🌱 🏃 🎫 인프런의 첫 번째 오프라인 콘퍼런스,INFCON 2022! 인프콘 발표자분들 중엔인프런 지식공유자가 많다는 사실, 아시나요? 오늘은
                                        </div>                                    
                                </a>
                            </li>
                            <li>
                                <a href="#" className="reading-course_item">                                    
                                        <div className="reading-item_img">
                                            <img src="https://cdn.inflearn.com/public/files/pages/180fc479-e7f7-4da1-be59-a4da13fdf3c1/curation-infcon2022-story-main.png" alt=""/>
                                        </div>
                                        <div className="reading-item_title">
                                            [큐레이션] INFCON 2022 기념 릴레이 할인 통합편!
                                        </div>                                    
                                        <div className="reading-item_subtitle">
                                            🌱 🏃 🎫 인프런의 첫 번째 오프라인 콘퍼런스,INFCON 2022! 인프콘 발표자분들 중엔인프런 지식공유자가 많다는 사실, 아시나요? 오늘은
                                        </div>                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="newCourses">
                <div className="course_container">
                    <div className="course-title flex">
                        <h2>따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️ <span>NEW!!</span></h2>
                        <a href="#"><iconify-icon icon="ep:arrow-right"></iconify-icon></a>
                    </div>
                    <div className="course-item_container">
                        <ul className="course-list flex">
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/329214/cover/0d3f339b-06de-40c3-a41a-8633df325ade/329214-eng.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/329444/cover/4a3f32ef-f73b-4f47-a682-1e282d01012d/329444-eng.png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div class="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                            <p>업데이트</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/329398/cover/5e613ac4-cfe3-4a97-ac6d-929d9cd49647/329398-eng.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div class="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/329275/cover/5173e069-8ce9-45e8-905a-f0f5f345899c/329275-b-eng.png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>                            
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/328376/cover/6baa63b8-8f8f-473d-9b55-9047a521037e/328376-eng.jpg" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                            <a href="#" className="flex">
                                <div className="course-hover">
                                    <span className="course-hover_title">이것이 진짜 크롤링이다</span>
                                    <div className="course-hover_des flex">
                                        <span>입문</span>
                                        <span>데이터 수집, 처리, 데이터 분석</span>
                                        <span>Python, 웹 크롤링</span>
                                    </div>
                                </div>
                                <li className="course-item">
                                    <div className="course-item_top">
                                        <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png" alt=""/>
                                        <h5>이것이 진짜 크롤링이다</h5>
                                    </div>
                                    <div className="course-item_bottom">
                                        <span>스타트코딩</span>
                                        <div className="course_rate">⭐️⭐️⭐️⭐️⭐️(240)</div>
                                        <div className="course_price">무료</div>
                                        <div className="course_info flex">
                                            <p>+5100명</p>
                                        </div>
                                    </div>
                                </li>
                            </a>
                        </ul>
                        
                    </div>
                    <div className="course-arrow_next">                            
                        <iconify-icon icon="ep:arrow-right"></iconify-icon>                            
                    </div>
                    <div className="course-arrow_prev">                            
                            <iconify-icon icon="ep:arrow-left"></iconify-icon>                            
                    </div>
                </div>
            </section>


            <section id="courseReveiw">
                <div className="courseReview_container flex">
                    <div className="courseReview-left_container">
                        <div className="courseReview-title">
                            <div> <span>951,930 </span>명이</div>
                            <div>인프런과 함께합니다.</div>                        
                        </div>
                        <div className="courseReview-subtitle">
                            <div>학교에서 배우기 어렵거나 큰 비용을</div>
                            <div>지불해야만 배울 수 있는 전문적인 지식들을 제공합니다.</div>
                            <div>오픈 플랫폼의 이점을 통해 다양성과 경제성을 모두 높입니다.</div>    
                        </div>                        
                        <div className="courseReview-moreLink">
                            <a href="#" className="courseReview_link">수강평 더보기 </a>
                            <a href="#" className="courseReview_link">기능/강좌 요청하기 </a>
                        </div>
                    </div>
                    
                    <div className="courseReview-right_container">
                        <div className="courseReview-review_item">
                            <div className="review-writer">박우진 님(수강생) <span>5시간 전</span></div>
                            <h5 className="review-title">실무자가 알려주는  Git - 입문편 </h5>
                            <p className="review-content">Git에 대해서 잘 몰랐었는데, 많은 도움이 되었습니다.</p>
                        </div>
                        <div className="courseReview-review_item">
                            <div className="review-writer">박우진 님(수강생) <span>5시간 전</span></div>
                            <h5 className="review-title">실무자가 알려주는  Git - 입문편 </h5>
                            <p className="review-content">Git에 대해서 잘 몰랐었는데, 많은 도움이 되었습니다.</p>
                        </div>
                        <div className="courseReview-review_item">
                            <div className="review-writer">박우진 님(수강생) <span>5시간 전</span></div>
                            <h5 className="review-title">실무자가 알려주는  Git - 입문편 </h5>
                            <p className="review-content">Git에 대해서 잘 몰랐었는데, 많은 도움이 되었습니다.</p>
                        </div>
                        <div className="courseReview-review_item">
                            <div className="review-writer">박우진 님(수강생) <span>5시간 전</span></div>
                            <h5 className="review-title">실무자가 알려주는  Git - 입문편 </h5>
                            <p className="review-content">Git에 대해서 잘 몰랐었는데, 많은 도움이 되었습니다.</p>
                        </div>
                        <div className="courseReview-review_item">
                            <div className="review-writer">박우진 님(수강생) <span>5시간 전</span></div>
                            <h5 className="review-title">실무자가 알려주는  Git - 입문편 </h5>
                            <p className="review-content">Git에 대해서 잘 몰랐었는데, 많은 도움이 되었습니다.</p>
                        </div>
                    </div>
                
                </div>
            </section>

            <section id="bottomBanner">
                <div className="bottomBanner_container">
                    <div className="bottomBanner-content flex">
                        <div className="bottomBanner-title">
                            <div>지식을 나눠주세요.</div>
                            <div>쉽게 시작하고 합당한 보상을 받을 수 있어요.</div>
                        </div>
                        <a href="#" className="bottomBanner-goLink">
                            지식공유 알아보기
                        </a>
                    </div>
                    <div className="bottomBanner-arrows">
                        <span className="bottomBanner-arrow_left"><iconify-icon icon="ep:arrow-left"></iconify-icon></span>
                        <span className="bottomBanner-arrow_right"><iconify-icon icon="ep:arrow-right"></iconify-icon></span>
                    </div>
                </div>
            </section>

            <section id="group">
                <div className="group_container">
                    <div className="group-title">이미 많은 기업 구성원들이 인프런에서 성장하고 있어요.</div>
                    <div className="group-companies_list flex">
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/c085de89-e640-4bc0-afad-efd1e96dbb58/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/0add4321-40e2-46db-9aac-3222b25a69c4/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6%E1%84%83%E1%85%B3%E1%86%AF.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/34618dc7-2862-4db0-9bbc-631ca0c8f5b5/sk.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/1429748f-8c44-4941-8913-752071578eaf/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/e7dd4c2a-8496-4708-b9fd-ae66317e40ad/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%86%AB.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/10b49bf2-cd9a-4501-ac3c-84059d04f171/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/a041f2fa-7f40-4517-bdb7-822fc7800d80/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/b47b4ead-5141-46ec-8003-81c6dbc2e5b7/LG.png" alt=""/>
                        </div>
                        <div className="group_company">
                            <img src="https://cdn.inflearn.com/public/group_logo/0/4aa479b9-4e05-4f8e-84b3-1fb7edb60c0c/nc.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="apply">
                <div className="apply_container">
                    <div className="apply-header">
                        <h3>다양한 서비스를 신청하세요.</h3>
                        <p>인프런의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.</p>
                    </div>
                    <div className="apply-content flex">
                        <div className="apply-content_box flex">
                            <h4 className="apply-content_title">지식공유자 되기</h4>
                            <p className="apply-content_sub">9개월간 온라인 기술 강의로만 1억원!
                                나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.</p>
                            <a className="apply-content_link" href="#">지식공유자 참여하기 →</a>
                        </div>
                        <div className="apply-content_box flex">
                            <h4 className="apply-content_title">지식공유자 되기</h4>
                            <p className="apply-content_sub">9개월간 온라인 기술 강의로만 1억원!
                                나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.</p>
                            <a className="apply-content_link" href="#">지식공유자 참여하기 →</a>
                        </div>
                        <div className="apply-content_box flex">
                            <h4 className="apply-content_title">지식공유자 되기</h4>
                            <p className="apply-content_sub">9개월간 온라인 기술 강의로만 1억원!
                                나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.</p>
                            <a className="apply-content_link" href="#">지식공유자 참여하기 →</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main_Page;