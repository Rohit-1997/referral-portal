import styled from 'styled-components';

import ShareIcon from '@material-ui/icons/Share';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import React, { useState, useEffect } from 'react';
import { borders } from '@material-ui/system';
import { Box } from '@material-ui/core';

function JobReferral({JobTitle, CompanyName, Location, NoOfYears, PositionsOpen}) {

    return (
        <JobReferralContainer>
            <h3>{JobTitle}</h3>
            <h5>{CompanyName}</h5>

            <DataContainer>
                <ReferralInfoContainer>
                    <Box>
                    <h4>Location</h4>
                    <p>{Location}</p>
                    </Box>
                </ReferralInfoContainer>
                <ReferralInfoContainer>
                    <h4>NoOfYears</h4>
                    <p>{NoOfYears}</p>
                </ReferralInfoContainer>
                <ReferralInfoContainer>
                    <h4>PositionsOpen</h4>
                    <p>{PositionsOpen}</p>
                </ReferralInfoContainer>
            </DataContainer>

            <ActionContainer>
                <ActionItem>
                    <ArrowUpwardIcon />
                    {/* <p>Apply</p> */}
                </ActionItem>
                <ActionItem>
                    <BookmarkBorderIcon/>
                    {/* <p>Save for later</p> */}
                </ActionItem>
                <ActionItem>
                    <ShareIcon/>
                    {/* <p>Share</p> */}
                </ActionItem>
            </ActionContainer>
        </JobReferralContainer>   
    )
}

export default JobReferral

const ReferralInfoContainer = styled.div`
/* display: flex; */
/* justify-content: flex-start; */
/* border: 1px #FFFFFF 2px; */

> h4{
    padding: 3px;
    padding: 3px;
    margin-right: 5px;
}

> p{
    padding: 3px;
}

>Box{
    display: flex;
}
`;

const JobReferralContainer = styled.div`
background-color: #FFFFFF;
min-height: 150px;
padding: 10px;
margin-bottom: 10px;
border-radius: 10px;
text-align: left;
`;

const DataContainer = styled.div`
padding:15px 0px;
`;

const ActionContainer = styled.div`
display: flex;
justify-content: left;
`;

const ActionItem = styled.div`
padding: 2px 2px; 
cursor: pointer;
border-radius: 10px;
margin-right: 25px;


> .MuiSvgIcon-root{
    /* margin-left: auto; */
    margin: 3px;
    size: large;
    color: #666666;
}

:hover{
    background-color: #DADADA;
}
`;
