import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'
import {selectUserId, selectUserName, selectUser, selectCompany, clearWishlist} from '../features/appSlice'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Grid } from '@material-ui/core'
import UserPageHOC from './HOC/UserPageHOC';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 500,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    },
}));



function AppliedJobsComponent() {

const dispatch = useDispatch()
const userId = useSelector(selectUserId)
const classes = useStyles();
const theme = useTheme();
const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(async () => {
        // {
        //     "jobId": "71ac4d80-477d-442a-9546-02b8f9a3df44",
        //     "jobTitle": "React ",
        //     "location": "Australia",
        //     "experienceRequired": 2,
        //     "tags": "",
        //     "company": "Amazon",
        //     "positionOpen": 3
        // }

        var getAllAppliedJobs = "https://test-referralportal-api20210514150629.azurewebsites.net/api/jobapplications/jobs/" + userId;

        const response = await fetch(getAllAppliedJobs)
        const data = await response.json()


        axios.get(getAllAppliedJobs)
            .then(function (res) {
                if (res.status === 200) {
                    var jobsApplied = res.data;
                    setAppliedJobs(jobsApplied)
                }
            });
        console.log("appliedjobs");
        console.log(appliedJobs);
    }, [])

    

    return (
        <AppliedJobsDiv>
            <Grid container spacing={4} className={classes.gridContainer}>
                {
                    appliedJobs.map(function(appliedJob, index){
                        return <Grid item xs={12} key={appliedJob.jobId}>
                                    {
                                        appliedJob.jobId !== '00000000-0000-0000-0000-000000000000' & appliedJob.company !== null ? (
                                            <Card className={classes.root}>
                                                <div className={classes.details}>
                                                    <CardContent className={classes.content}>
                                                    <Typography component="h5" variant="h5">
                                                        {appliedJob.company}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        {appliedJob.location}
                                                    </Typography>
                                                    </CardContent>
                                                </div>
                                            </Card>
                                        ) : 
                                        (
                                            <Card className={classes.root}>
                                                <div className={classes.details}>
                                                    <CardContent className={classes.content}>
                                                    <Typography component="h5" variant="h5">
                                                        NA
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        NA
                                                    </Typography>
                                                    </CardContent>
                                                </div>
                                            </Card>
                                        )
                                    }
                                </Grid>
                    })
                }
            </Grid>
            
    </AppliedJobsDiv>
  );
}

export default UserPageHOC(AppliedJobsComponent);

const AppliedJobsDiv = styled.div`
flex: 0.7;
margin: 0px 20px;
`