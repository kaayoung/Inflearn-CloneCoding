import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Ad_Main from '../components/main/Ad_Main';
import Apply_Main_Item from '../components/main/Apply_Main_Item';
import Course_Container from '../components/main/Course_Container';
import ReadingMain_Item from '../components/main/ReadingMain_Item';
import Review_Main_Item from '../components/main/Review_Main_Item';
import RoadmapCourse_Item from '../components/main/RoadmapCourse_Item';
import SearchLoading_Main from '../components/main/SearchLoading_Main';
import SearchResult_Main from '../components/main/SearchResult_Main';
// import Search_Main from '../components/Search_Main';
import {mainSectionItems, mainRoadmapItems, mainReadingItems , mainReviewItems , mainApplyItems }  from '../data/mainCourse_data'

function Main_Page(props) {

    const adSlides = [
        "https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif" ,
        "https://cdn.inflearn.com/public/main_sliders/78e964ab-3fdf-45be-ad2a-c8f425df9c98/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_628.png",
        "https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif"
    ]
    
    const [search , setSearch] = useState("") ;
    const [searchLoading, setSearchLoading] = useState(false) ;
    const [currentIdx , setCurrentIdx]  = useState(0) ; // 광고 배너 슬라이드 
    
    
    const searchInputRef = useRef(null) ;

    function handleInputSth(e) {
        setSearch(e.target.value) ;
    }

    useEffect(() => {
        setSearchLoading(true) ;
        setTimeout(() => {
            setSearchLoading(false)
        }, 1000);
    },[search])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleBannerSwipe(1);
        }, 2000);
        return () => clearTimeout(timeoutId);
    })


    function searchFocus(e) {
        searchInputRef.current?.scrollIntoView({behavior : 'smooth'}) ;
    }

    function handleBannerSwipe(direction) {
        // setCurrentIdx(currentIdx => currentIdx + direction) ;
        handleSlide(currentIdx + direction)
    }

    function handleSlide (idx) {
        if (idx < 0) {
            idx = adSlides.length -1 ;            
        } else if (idx > adSlides.length-1) {
            idx = 0
        }
        setCurrentIdx(idx)
    }

    return (
        <main>            
            <section id="ad">
                <div className="ad-banner flex">
                    <div className="ad-banner_track flex" style={{ transform: `translateX(${(-100 ) * ( currentIdx)}%)`}}>
                        {adSlides.map((img, idx) => {
                            return (<Ad_Main img={img} key={idx} />)
                        })}
                    </div>                    
                </div>
                <div className="ad-button">
                    <div id="ad-btn-container" className="flex">
                        <div className="ad-btn_left flex">
                            <div className="add-btn_page flex">
                                <div className="add-btn_index">
                                    <span className="add-page_curIdx">{currentIdx+1}</span>
                                    <span>/</span>
                                    <span className="add-page_totalIdx">3</span>
                                </div>
                                <div className="add-btn_move">
                                    <span onClick={() => handleBannerSwipe(-1)}><iconify-icon icon="ep:arrow-left-bold"></iconify-icon></span>
                                    <span><iconify-icon icon="fe:pause"></iconify-icon></span>
                                    <span onClick={() => handleBannerSwipe(1)}><iconify-icon icon="ep:arrow-right-bold"></iconify-icon></span>
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

            <section ref={searchInputRef} id="search">
                <div className="search-container">
                    <h1 className="search-title">
                        배우고, 나누고, 성장하세요
                    </h1>
                    <div className="search-input ">
                        <input autocomplete='off' onFocus={searchFocus} onChange={handleInputSth} className={(search ? "inputSth" : "inputDefault")} type="text" value={search} name="main-search" id="main-search" placeholder="배우고 싶은 지식을 입력해보세요."/>
                        <span><iconify-icon icon="carbon:search"></iconify-icon></span>
                        {search && (
                            <>
                            
                                {searchLoading ? <SearchLoading_Main/> : <SearchResult_Main keyword={search} /> }
                            </>
                        )}
                        
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
                    <Course_Container dataArr={mainSectionItems}/>
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
                    <Course_Container dataArr={mainSectionItems}/>
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
                            {mainRoadmapItems.map((d) => (<RoadmapCourse_Item 
                            roadCourse_img={d.roadCourse_img} roadCourse_title={d.roadCourse_title}/>))}

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
                            {mainReadingItems.map((x) => {return (<ReadingMain_Item img={x.img} title={x.title} subtitle={x.subtitle} />)})}                            
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
                    <Course_Container dataArr={mainSectionItems}/>
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
                        {mainReviewItems.map((x)  => {return (<Review_Main_Item name={x.name} hours={x.hours} title={x.title} content={x.content} />)})}                        
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
                        {mainApplyItems.map((x) => {
                            return (<Apply_Main_Item title={x.title} content={x.content} apply={x.apply}/>)
                        })}
                        
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main_Page;