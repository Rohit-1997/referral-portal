import React, { useState, useMemo } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components";
import {Grid, TextField, Paper, MenuItem, Button, Typography} from '@material-ui/core';
import countryList from 'react-select-country-list'
import { makeStyles } from '@material-ui/core/styles';
import {selectUserId_redux, selectUserName, selectUser} from '../features/appSlice'
import { ContactSupportOutlined } from '@material-ui/icons';
import axios from "axios";


function FeedInput() {
    
    const userId = useSelector(selectUserId_redux)

    const [referralPost, setReferralPost] = useState({ jobTitle: "", userId: userId, location: "", experienceRequired: "", tags: "", company: "", positionOpen: "" })

    const postReferral = (e) => {
        e.preventDefault();
        console.log("posting job referral")
        const requestBody = 
        {
            "jobTitle": referralPost.jobTitle,
            "userId": referralPost.userId,
            "location": referralPost.location,
            "experienceRequired": parseInt(referralPost.experienceRequired),
            "tags": referralPost.tags,
            "company": referralPost.company,
            "positionOpen": parseInt(referralPost.positionOpen)
        }
        const postUrl = "https://test-referralportal-api20210514150629.azurewebsites.net/api/jobreferrals";
        const headers = {'Content-Type': 'application/json'};
        console.log(requestBody)
        axios({
            method: 'post',
            url: postUrl,
            data: requestBody,
            headers: headers
          }).then((response) => {
              console.log("response is :")
              console.log(response)
          }).catch((exception) => {
              console.log("Exception in posting the jobs: ", exception);
          });

        // const postData = { data: requestBody };
        // axios.post(postUrl,postData,).then((response) => {
        //     console.log("Response is: ", response);
        // })

    }

    const handleChange = event => {
        console.log("handling change")
        console.log(referralPost)
    }

    const PaperStyle = {
        padding: 20,
        height: '70vh',
        width: '30vw',
        margin: "20px auto",
        borderRadius: '30px'
    }

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
          marginTop: 20,
          marginLeft: 0,
        }

      }));
    
    const TextFieldStyle = {
        marginTop: 20,
        marginBottom: 2,
    }

    const companies = [
        {
            value: 'Microsoft',
            label: 'M'
        },
        
        {
            value: 'Amazon',
            label: 'A'
        },
        
        {
            value: 'Google',
            label: 'G'
        },
        
        {
            value: 'Netflix',
            label: 'N'
        },
        
        
        {
            value: 'Other',
            label: 'O'
        }
    ]
    
    const countries = useMemo(() => countryList().getData(), [])
    const classes = useStyles();
    return (
        <FeedInputContainer>
            <Grid>
                <Paper elevation={10} style={PaperStyle}>
                    <Typography variant="h3" gutterBottom >Post a Job Referral</Typography>
                    <TextField label="Job Title" placeholder="Enter the job Title" style={TextFieldStyle}
                    value={referralPost.jobTitle}
                    onChange={e => setReferralPost({ ... referralPost, 'jobTitle': e.target.value})}
                     fullWidth required />
                    <TextField
                    id="company-name"
                    select
                    label="Select Company"
                    style={TextFieldStyle} 
                    value={referralPost.company}
                    onChange={e => setReferralPost({ ... referralPost, 'company': e.target.value})}
                    fullWidth required
                    >
                    {companies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}

                    </TextField>
                    <TextField
                    id="country-name"
                    select
                    label="Select Country"
                    style={TextFieldStyle} 
                    value={referralPost.location}
                    onChange={e => setReferralPost({ ... referralPost, 'location': e.target.value})}
                    fullWidth required
                    >
                    {countries.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField label="Experience Required" type="number" 
                    placeholder="Enter the experience required" style={TextFieldStyle}
                    value={referralPost.experienceRequired}
                    onChange={e => setReferralPost({ ... referralPost, 'experienceRequired': e.target.value})}
                    fullWidth required/>
                    <TextField 
                    label="Postions Open" type="number" placeholder="Enter the no of postions open" style={TextFieldStyle}
                    value={referralPost.positionOpen}
                    onChange={e => setReferralPost({ ... referralPost, 'positionOpen': e.target.value})}
                    fullWidth required/>
                    
                    <Button variant="outlined" size="large" className={classes.margin}>
                        Reset
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={postReferral}>
                        Submit
                    </Button>
                </Paper>

            </Grid>
        </FeedInputContainer>
    )
}

export default FeedInput


const FeedInputContainer = styled.div`
padding: 16px;
padding-bottom: 20px;
border-radius: 10px;
margin-bottom: 20px;
max-width : 600;
margin: auto;
`;

const FormContainer = styled.div`
border: 1px solid lightgray;
border-radius: 30px;
display: flex;
padding: 10px;
color: gray;
padding-left: 15px;
background-color: white;

> form {
    display: flex;
    width: 100%;
}

> form > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
}

> form > Button {
    display: none !important;
}
`;

const FeedInputIconsContainer = styled.div`
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
`;