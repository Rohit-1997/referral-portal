import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { CardMedia } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import { selectAppliedJobs, applyJob } from '../features/appSlice';


import mslogo from '../images/mslogo.jpg';
import amazonlogo from '../images/Amazon logo.png'
import googlelogo from '../images/google_logo.png'
import netflixlogo from '../images/netflix_logo.png'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        minWidth: 145,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {
        height: 0,
        paddingTop: '50.25%', // 16:9
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export default function ReferralCard({ Referral }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bull = <span className={classes.bullet}>•</span>;


    const GetCompanyLogo = (companyName) => {
        var logo = ""
        console.log("Getting company logo")
        console.log("inside switch: " + companyName)
        switch (companyName) {
            case "Microsoft": logo = mslogo
                break;
            case "Amazon": logo = amazonlogo;
                break;
            case "Netflix": logo = netflixlogo;
                break;
            case "Google": logo = googlelogo;
                break;
            default: logo = "";
            break;
        }

        console.log("returning logo : " + logo)
        return logo;
    }


    const handleApplyIconClick = () => {
        console.log("Favorite Icon handler called", Referral);
        var postJobObject = Referral;
        axios.post("https://test-referralportal-api20210514150629.azurewebsites.net/api/jobapplications/apply", postJobObject)
            .then((response) => {
                console.log("Job post success");
                alert("Job Posted successfully");
                dispatch(applyJob());

            })
            .catch((response) => {
                console.log("failure to post the job");
            })
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia
                className={classes.media}
                image={GetCompanyLogo(Referral.company)}
                title="Company Name"
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {Referral.jobTitle}
                </Typography>
                <Typography variant="h5" component="h2">
                    {Referral.company}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {Referral.location}
                </Typography>
                <Typography variant="body2" component="p">
                    There are currently {Referral.positionOpen} open positions.
            These positions are for atleast {Referral.experienceRequired} years experienced.
        </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="apply" onClick={handleApplyIconClick}>
                    <ArrowUpwardIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}