import React from 'react';
import { useLocation } from 'react-router-dom';
import {courseDetailIntroduce , courseDetailCurriculum} from '../data/mainCourse_data' ;

function CourseDetail_page(props) {

    const {state} = useLocation() ;

    return (
        <main id='courseDetail_wholePage'>            
            <section className='courseDetail-top'>
                <div className="courseDetail-top_container flex">
                    <div className="courseDetailTop-left flex">
                        <div className="courseDetailTop-img">
                            <img src="https://cdn.inflearn.com/public/courses/329211/cover/ea485515-6665-4e5c-acd7-157c2b8b08f3/infcon-apply-main.png" alt="" />
                        </div>
                        <div className="courseDetailTop-preview flex">
                            <span><iconify-icon icon="ant-design:play-circle-outlined"></iconify-icon></span>
                            <span>2개</span>
                            <span>미리보기</span>
                        </div>
                    </div>
                    <div className="courseDetailTop-right flex">
                        <div className="courseDetailTop-title_wrap flex">
                            <div>{state.topic + " > " + state.goal}</div>
                            <h2>{state.title}</h2>
                        </div>
                        <div className="courseDetailTop-info_wrap">
                            <div className="courseDetailTop-info_students">
                                <span className='courseDetailTop_rates_star'>★★★★★</span>
                                <span className='courseDetailTop_rates_cnt'>({Number.parseFloat(state.rate).toFixed(1)})</span>
                                <span className='courseDetailTop_reviewCnt'> {state.reviewTotal} 개의 수강평</span>
                                <span className='courseDetailTop_studentsCnt'>· {courseDetailIntroduce.studentsCnt}명의 수강생</span>
                            </div>
                            <div className="courseDetailTop-info_educator flex">
                                <span><iconify-icon icon="eva:person-outline"></iconify-icon></span>
                                <span>{state.educator}</span>
                                <span><iconify-icon icon="fa-solid:crown"></iconify-icon></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='courseDetail-middle'>
                <div className="courseDetailMid-nav">
                    <div className="courseDetailMid-nav_wrap flex">
                        <span className="courseDetailMid-nav_intro detail-nav_active">강의소개</span>
                        <span className="courseDetailMid-nav_curri">커리큘럼</span>
                        <span className="courseDetailMid-nav_review">수강평 <span>{state.reviewTotal}</span> </span>
                        <span className="courseDetailMid-nav_commu">커뮤니티</span>
                        <span className="courseDetailMid-nav_news">새소식</span>
                    </div>
                    <div className="courseDetailMid-contents_container flex">
                        <div className="courseDetailMid-contents_left"></div>
                        <aside className="courseDetailMid-contents_right">
                            <div className="courseDetailMid-studentFrom flex">
                                <div className="courseDetailMid-studentFrom_wrap grid">
                                    <span className="studentFrom-img flex">
                                        <img src="https://play-lh.googleusercontent.com/W607uSRreW4h6Ar4reYPYCtYXID0_AIsd9m2fgWwdAN7JyZGG3WVM782wa5CfCvKZVM" alt="" />
                                    </span>
                                    <span className="studentFrom-company flex">
                                        <span className="studentFrom_where flex">
                                            <span>토스</span>
                                            <span className="studentFrom-certi flex">
                                                <p>인증</p>
                                                <p>{">"}</p>
                                            </span>
                                        </span>
                                        <span className='studentFrom_text flex'>지금 이 회사에 <p> 관심있는</p>사람들도 듣는 중 !</span>                                        
                                    </span>
                                </div>
                            </div>
                            <div className="courseDetailMid-card">
                                <div className="courseDetailMid-card_container">
                                    <div className="courseDetailCard-top">
                                        <div className="courseDetailCard-top_wrap">
                                            <h4 className='courseDetailCard-price'>1000 원</h4>
                                            <button type='button'>바로 학습하기</button>
                                            <div className="courseDetailCard-subBtn flex">
                                                <span className="courseDetailCard_addFolder flex">
                                                    <span><iconify-icon icon="ep:folder-add"></iconify-icon></span>
                                                    <span>폴더에 추가</span>
                                                </span>
                                                <p>|</p>
                                                <span className="courseDetailCard_likes flex">
                                                    <span><iconify-icon icon="bi:heart"></iconify-icon></span>
                                                    <span>222</span>
                                                </span>
                                                <p>|</p>
                                                <span className="courseDetailCard_share flex">
                                                    <span><iconify-icon icon="ant-design:share-alt-outlined"></iconify-icon></span>
                                                    <span>공유</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div className="courseDetailCard-bottom">
                                        <ul className='courseDetailCard-infoList'>
                                            <li>지식 공유자 : {state.educator}</li>
                                            <li>총 0개의 수업</li>
                                            <li>수강기한 : 무제한</li>
                                            <li>난이도 : {state.level}</li>
                                        </ul>
                                        <div className='courseDetailCard-canAnswer'>
                                            지식공유자 답변이 제공되는 강의입니다
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <section className='courseDetail-bottom'></section>
        </main>
    );
}

export default CourseDetail_page;