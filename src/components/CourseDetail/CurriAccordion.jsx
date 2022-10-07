import React from 'react';
import styled from 'styled-components';

function CurriAccordion(props) {
    return (
        <CurriTable>
            <div className="curr-accordion">
                <CurrAccorSection className="curr-accordion_section flex">
                    <span className='flex-row_center'><iconify-icon icon="dashicons:arrow-up-alt2"></iconify-icon></span>
                    <h3 className='flex-row_center'>섹션 0. 강의소개</h3>
                    <span className='curr-section_totalInfo'>3강 6분</span>
                </CurrAccorSection>
                <div className="curr-accordion_unit">
                    <CurAccorUnitItem href="#" target="__blank" className='flex'>
                        <span><iconify-icon icon="fa6-regular:circle-play"></iconify-icon></span>
                        <h4>강의소개</h4>
                        <div className='curr-accorUnit_play flex-row_center'>
                            <span>미리보기</span>
                            <span>00 : 00</span>
                        </div>
                    </CurAccorUnitItem>
                    <CurAccorUnitItem href="#" target="__blank" className='flex'>
                        <span><iconify-icon icon="fa6-regular:circle-play"></iconify-icon></span>
                        <h4>강의소개</h4>
                        <div className='curr-accorUnit_play flex-row_center'>
                            <span>미리보기</span>
                            <span>00 : 00</span>
                        </div>
                    </CurAccorUnitItem>
                </div>
            </div>
        </CurriTable>
    );
}

export default CurriAccordion;

// Style Components 

const CurriTable = styled.div`
width: 100%;

`

const CurrAccorSection = styled.div`
    background-color: #F8F9FA;
    padding: 15px 20px;
    display: flex;
    border-bottom : 1px solid #f1f3f5 ;
    line-height: 26px ;    
    
    span:first-child {
        margin-right: 8px;
        transform: ${props => props.opened ? 0 : "rotate(180deg)"};
    }
    h3 {
        font-size: 15px;
        color: #343a40;
        font-weight: 700;
        line-height : 22px ;        
    }
    .curr-section_totalInfo {
        margin-left: auto;
        color: #343a40;
    }
`

const CurAccorUnitItem = styled.a`
    width: 100%;
    padding: 14px 20px;
    border-bottom: 1px solid #f1f3f5;
    span:first-child {
        margin-right: 8px;
        color: #495057;
    }

    .curr-accorUnit_play {
        margin-left: auto;
        
    }
    .curr-accorUnit_play span:first-child {
        color: #00c471;
        font-size: 13px;
        padding: 0 7px;
        border: 1px solid #00c471;
        border-radius: 4px;
        line-height: 26px;
        height: 26px;
        
    }
    .curr-accorUnit_play span:last-child {
        color: #343a40;
        font-size: 15px;
    }
`

