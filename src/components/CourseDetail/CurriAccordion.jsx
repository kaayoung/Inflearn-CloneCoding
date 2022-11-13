import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { curriData } from '../../data/courseDetail_data';
import CurriAccordionItem from './CurriAccordionItem';

function CurriAccordion({allClose}) {



    return (
        <CurriTable >
            {curriData.map(x => {                                         
                return (<CurriAccordionItem key={x.id} secTitle={x.secTitle} total = {x.total} unit = {x.unit} allClose={allClose} />)
            })}                        
        </CurriTable>
    );
}

export default CurriAccordion;

// Style Components 

const CurriTable = styled.div`
    width: 100%;

    .unit-open {
        display: inline;
    }
    .unit-close {
        display: none;
    }

`

