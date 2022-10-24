import React from 'react';

function RightCards({props}) {
    return (
        <>
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
                            <li>지식 공유자 : {props.educator}</li>
                            <li>총 0개의 수업</li>
                            <li>수강기한 : 무제한</li>
                            <li>난이도 : {props.level}</li>
                        </ul>
                        <div className='courseDetailCard-canAnswer'>
                            지식공유자 답변이 제공되는 강의입니다
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightCards;