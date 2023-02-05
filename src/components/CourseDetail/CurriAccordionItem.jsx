import { useRef } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { accorAllClose } from '../../recoil/AcoorAllClose';
import CurriAccordionUnitItem from './CurriAccordionUnitItem';


/**
 * 
 * @param {*} props secTitle , total , unit (array) 
 * @returns 
 */
// (!accorOpen ? "unit-open" : "unit-close")

function CurriAccordionItem({secTitle , total , unit , allClose}) {
    
    const unitRef = useRef() ;

    // const isAllClosed = useRecoilValue(accorAllClose) ;

    const [unitOpen , setUnitOpen] = useState(true) ;    
    // const [accorOpen , setAccorOpen] = useRecoilState(accorAllClose) ;

    function clickAccorSection() {
        setUnitOpen(x => !x)
        
        // if(accorOpen=="open") {
        //     setAccorOpen("close") ;            
        // } else if (accorOpen == "close") {
        //     setAccorOpen("open") ;
        // }
        // console.log(accorOpen)
    }
// className={"curr-accordion_unit " + (!accorOpen ? "unit-open" : "unit-close") }

    return (
        <div className="curr-accordion">
            <CurrAccorSection opened={unitOpen} className="curr-accordion_section flex" onClick={(e) => {clickAccorSection(e.target)}}>                
                <span className='flex-row_center'><iconify-icon icon="dashicons:arrow-up-alt2"></iconify-icon></span>
                <h3 className='flex-row_center'>{secTitle}</h3>
                <span className='curr-section_totalInfo'>{total}</span>
            </CurrAccorSection>            
            <div ref={unitRef} className={"curr-accordion_unit " + (!unitOpen ? "unit-open" : "unit-close") }>                
                {unit.map(element => {                                                        
                    return (<CurriAccordionUnitItem key={element.unitName} unitName={element.unitName} preview = {element.preview}/>)
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

