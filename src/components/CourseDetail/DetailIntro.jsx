import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


function DetailIntro(props) {

    const {state} = useLocation() ;

    return (
        <>
            <div className="detail-intro_sum">
                <DetailContentsTitle className="detailIntro-sum_title">
                    <h1><b>입문자</b>를 위한 <br/> <b>[{state.topic}] 강의입니다. </b> </h1>
                    <span>크롤링을 처음 배우는 분들을 위해 ① 가장 쉽고 ② 가장 친절하게 설명해 드립니다. 크롤링은 정말로 재미있습니다. 제가 책임지겠습니다. 믿고 따라와 보세요.</span>
                </DetailContentsTitle>
                <DetailBox className="detailIntro-sum_learn flex">
                    <div className="detailIntro-sum_learnTxt">
                        <span><iconify-icon icon="noto:writing-hand"></iconify-icon></span>
                        <span>이런 걸 배워요!</span>
                    </div>
                    <div className="detailIntro-sum_learnList">
                        <ul>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                        </ul>
                    </div>
                </DetailBox>
            </div>
            <DetailContents className="detail-intro_main">
                <span>
                    크롤링을 공부하기 위해 책, 인터넷 강의 찾아보는 시간, 아까우시죠? <br/> 여러분의 시간은 소중합니다.<br/>  이것이 진짜 크롤링이다 - 기본편과 실전편으로 <br/> 크롤링을 학습하는 데 필요한 시간을 2배이상 단축시켜 드립니다. 
                    <br/> <br/> <br/> <br/> 
                    웹 사이트에서 데이터를 수집해보신 적 있으신가요?<br/> 데이터를 얻기 위해 손으로 복사하고 붙여넣고, 복사하고 붙여넣고…<br/> 굳이 사람이 하지 않아도 되는 반복작업을 하고 있으니
                    <br/> 정말 힘들고, 귀찮고, 재미없죠.<br/><br/>  크롤링을 통해 데이터 수집을 자동화할 수 있다는 이야기는 들어봤었는데. <br/> 막상 배우는 데 시간이 더 걸릴 것 같았죠?
                    <br/><br/>  스타트코딩의 커리큘럼을 따라 오시면 남들보다 2배 빨리 배울 수 있답니다. <br/> 가장 쉽고, 가장 친절한 크롤링 강의를 통해 시간의 자유를 얻어보세요.
                </span>
            </DetailContents>

            <div className="detail-intro_tips">
                <DetailContentsTitle>
                    <h1>지식공유자가 알려주는  <br/> <b>강의 수강 꿀팁!</b></h1>
                </DetailContentsTitle>
                <DetailBox>
                <div className="detailIntro-sum_learnTxt">
                        <span><iconify-icon icon="noto:writing-hand"></iconify-icon></span>
                        <span>이런 분들께 <br/>추천드려요!</span>
                    </div>
                    <div className="detailIntro-sum_learnList">
                        <ul>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                        </ul>
                    </div>
                </DetailBox>

                <DetailBox>
                <div className="detailIntro-sum_learnTxt">
                        <span><iconify-icon icon="noto:writing-hand"></iconify-icon></span>
                        <span>선수 지식, <br/>필요한가요?</span>
                    </div>
                    <div className="detailIntro-sum_learnList">
                        <ul>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                            <li>네이버 뉴스 데이터 수집 방법</li>
                        </ul>
                    </div>
                </DetailBox>
            </div>
            <div className="detail-intro_edu">
                <DetailContentsTitle>
                    <div className='detail-titleAndImg flex'>
                        <h1>안녕하세요 <br/> <a target='_blank' href="#">{state.educator}</a> 입니다</h1>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div>
                    </div>
                    <div className='flex-column'>                                        
                        <span>코딩 유튜브 크리에이터 (스타트코딩 채널운영)</span>
                        <span>한국능률협회(KMA) 강사</span>
                        <span>KT, 대상그룹, 에스오일 등 기업교육 강사</span>
                        <span>알파코(Alpaco) K-디지털트레이닝 강사</span>
                        <span>동신대, 대구한의대, 초등학교,중학교 코딩 특강</span>
                        <span>패스트캠퍼스 파이썬 기본, 심화 문법 강사</span>
                        <span>인프런 이것이 진짜 크롤링이다 강사</span>
                        <span>위즈라이브 SSAFY 특강</span>
                        <span>HELLO IT 파이썬" 서적 집필 중</span>
                        <span>전) NICE I&T 웹 프로그래머</span>
                        <span>전) 아주대학교 소프트웨어학과 졸업</span>                                        
                    </div>
                </DetailContentsTitle>
            </div>
        </>
    );
}

export default DetailIntro;

const DetailContentsTitle = styled.div`
margin-bottom: 20px;
width: 670px;
h1 {
    font-size: 22px;
    color: #343a40;
    margin-bottom: 20px;
    line-height: 32px;
}
h1 b {
    font-weight: 700;
    color: black;
}
h1 a {
    text-decoration: underline;
}
h1 a::after {
    content: " ";
    background-image: url("https://cdn-icons-png.flaticon.com/512/7514/7514804.png");            
    background-size: 15px 15px;
    width: 15px;
    height: 15px;
    display: inline-block;
}
img {
    width: 50px;
    height: 50px;
}
span {
    font-size: 16px;
    color: #495057;
    line-height: 27px;
}
.detail-titleAndImg {
    width: 100%;
    justify-content: space-between;
}

`

const DetailBox = styled.div`
display: flex;
width: 100%;
padding: 32px 24px 32px 16px;
border: 1px solid #e9ecef;
border-radius: 8px;
margin-bottom: 20px;

div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 130px;
    
    margin-right: 16px;
}
div:nth-child(2) {
    flex-basis: calc(100% - 130px);
    
}
li {
    margin-top: 10px;
    line-height : 24px ;
    color : #343a40;
}
li::before {
    content: "✔ ";
    color: #81daa7;
}
li:first-child {
    margin-top: 0;
}

`;

const DetailContents = styled.div`
margin: 40px 0 ;
color: #495057;
line-height: 27px;        
`