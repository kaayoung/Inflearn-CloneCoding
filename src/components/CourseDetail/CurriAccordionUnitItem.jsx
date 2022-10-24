import React from 'react';
import styled from 'styled-components';

/**
 * 
 * @param {*} props title  hasPreview   
 * @returns 
 */

function CurriAccordionUnitItem({unitName , preview}) {
    return (
        <CurAccorUnitItem href="#" target="__blank" className='flex' preview={preview}>            
            <span><iconify-icon icon="fa6-regular:circle-play"></iconify-icon></span>
            <h4>{unitName}</h4>
            <div className='curr-accorUnit_play flex-row_center'>
                <span>미리보기</span>
                <span>00 : 00</span>
            </div>
        </CurAccorUnitItem>
    );
}

export default CurriAccordionUnitItem;

const CurAccorUnitItem = styled.a`
    width: 100%;
    padding: 14px 20px;
    border-bottom: 1px solid #f1f3f5;
    align-items: center;
    span:first-child {
        margin-right: 8px;
        color: #495057;
    }

    .curr-accorUnit_play {
        margin-left: auto;
        height: 26px;
        display: ${props => props.preview || "none"};
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