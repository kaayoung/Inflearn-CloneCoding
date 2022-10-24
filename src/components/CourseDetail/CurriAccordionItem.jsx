import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CurriAccordionUnitItem from './CurriAccordionUnitItem';


/**
 * 
 * @param {*} props secTitle , total , unit (array) 
 * @returns 
 */


function CurriAccordionItem({secTitle , total , unit}) {    
    const arr = Object.entries(unit)

    const [accorOpen , setAccorOpen] = useState(true)

    function clickAccorSection() {
        setAccorOpen(open => !open)
    }

    return (
        <div className="curr-accordion">
            <CurrAccorSection opened={accorOpen} className="curr-accordion_section flex" onClick={(e) => {clickAccorSection(e.target)}}>
                <span className='flex-row_center'><iconify-icon icon="dashicons:arrow-up-alt2"></iconify-icon></span>
                <h3 className='flex-row_center'>{secTitle}</h3>
                <span className='curr-section_totalInfo'>{total}</span>
            </CurrAccorSection>                
            <div className={"curr-accordion_unit " + (accorOpen ? "unit-open" : "unit-close") }>                 
                {unit.map(element => {                                                        
                    return (<CurriAccordionUnitItem unitName={element.unitName} preview = {element.preview}/>)
                })}                
            </div>
        </div>
    );
}

export default CurriAccordionItem;

const CurrAccorSection = styled.div`
    background-color: #F8F9FA;
    padding: 15px 20px;
    display: flex;
    border-bottom : 1px solid #f1f3f5 ;
    line-height: 26px ;
    cursor: pointer;    
    
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

