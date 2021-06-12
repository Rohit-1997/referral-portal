import React from 'react'
import styled from 'styled-components'
import FeedInput from './FeedInput'
import JobReferral from './JobReferral'
import { useState, useEffect } from 'react';
import axios from "axios";
import { ContactSupportOutlined } from '@material-ui/icons';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ReferralCard from './ReferralCard'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    },
});


function ReferralsFeed() {
    const [referrals, setReferrals] = useState([])
    const classes = useStyles();

    useEffect(async () => {
        var getAllJobReferrals = "https://test-referralportal-api20210514150629.azurewebsites.net/api/jobreferrals";

        const response = await fetch(getAllJobReferrals)
        const data = await response.json()


        axios.get(getAllJobReferrals)
            .then(function (res) {
                if (res.status === 200) {
                    var referrals_received = res.data;
                    setReferrals(referrals_received)
                }
            });
        console.log("referrals");
        console.log(referrals);
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
