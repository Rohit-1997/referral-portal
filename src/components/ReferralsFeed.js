import React from 'react'
import styled from 'styled-components'
import FeedInput from './FeedInput'
import JobReferral from './JobReferral'
import UserPageHOC from './HOC/UserPageHOC';
import { useState, useEffect } from 'react';
import axios from "axios";
import { ContactSupportOutlined } from '@material-ui/icons';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ReferralCard from './ReferralCard';
import { getAllJobReferrals } from '../network/lib/jobsClient';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    },
});


function ReferralsFeed() {
    const [referrals, setReferrals] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllJobReferrals()
            .then((res) => {
                if (res.status === 200) {
                    var referrals_received = res.data;
                    setReferrals(referrals_received)
                }
            })
            .catch((error) => {
                console.log("Exception in fetching job feed: ", error);
            })
    }, []);

    return (
        <ReferralsFeedContainer>
            <Grid container spacing={4} className={classes.gridContainer}>
                {
                    referrals.map(function(referral, index){
                        return <Grid item xs={12} sm={6} md={3} key={referral.jobReferralId}>
                                    <ReferralCard Referral={referral}/>
                                </Grid>
                    })
                }
            </Grid>
        </ReferralsFeedContainer>
    )
}

export default ReferralsFeed

const ReferralsFeedContainer = styled.div`
flex: 0.7;
margin: 0px 20px;
`;
