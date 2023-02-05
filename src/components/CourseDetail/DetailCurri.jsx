import React from 'react';
// import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { accorAllClose } from '../../recoil/AcoorAllClose';
import CurriAccordion from '../CourseDetail/CurriAccordion'

function DetailCurri(props) {

    // const [allClose , setAllClose] = useRecoilState(accorAllClose) ;
    
    const isAllClosed = useRecoilValue(accorAllClose) ;

    // const [allClose , setAllClose] = useState(false)

    function onClickAllClose() {
        // setAllClose(true) ;
        isAllClosed(true)
    }


    return (
        <>
            <TitleTemplate>
                <div className='title-box flex'>
                    <h2>커리큘럼</h2>
                    <p>총 19 개 ˙ 2시간 34분의 수업</p>
                </div>
                <div className="subtitle-box flex">
                    <p>이 강의는 영상, 수업 노트가 제공됩니다. 미리보기를 통해 콘텐츠를 확인해보세요.</p>
                    <button type='button' onClick={onClickAllClose}>모두 접기</button>
                </div>
            </TitleTemplate>

            <CurriAccordion allClose={onClickAllClose}/>
        </>
    );
}

export default DetailCurri;

const TitleTemplate = styled.div`
    .title-box {
        margin-bottom: 20px;
        align-items: flex-end;
    }
    h2{
        color: #343a40;
        font-size: 22px;
        font-weight: 700;
        margin-right: 10px;
    }
    p {
        color: #adb5bd;
        font-weight: 500;
    }
    .subtitle-box {
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .subtitle-box p {
        color: #495057;
        font-size: 15px;            
    }
    button {
        background-color: white;
        padding: 0 12px;
        border: 1px solid #d5dbe2;
        color: #495057;
        width: 76.32px;
        height: 40px;
    }
`