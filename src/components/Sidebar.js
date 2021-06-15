import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import {SidebarContainer, ProfileSection, ProfileAvatarSection, ProfileInfoSection, ProfileAvatar, NavigationSection, NavigationSectionItem} from './Sidebar.styled'
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { selectUser, selectUserName,  selectUserId, selectAppliedJobs, selectCompany, selectWishlistedJobs, selectShowAppliedJobs, toggleShowAppliedJobs, fetchAppliedJobs} from '../features/appSlice';

function Sidebar() {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectUserName)
    const userAppliedJobs = useSelector(selectAppliedJobs)
    const company = useSelector(selectCompany)
    const wishlistedJobs = useSelector(selectWishlistedJobs)
    const showAppliedJobsSelectorVal = useSelector(selectShowAppliedJobs)
    const [appliedJobs, setAppliedJobs] = useState(0)


    const refreshAppliedJobs = () => {
        if(userId !== null){
            var getAllAppliedJobs = "https://test-referralportal-api20210514150629.azurewebsites.net/api/jobapplications/jobs/" + userId;

            // const response = await fetch(getAllAppliedJobs)
            // const data = await response.json()


            axios.get(getAllAppliedJobs)
                .then(function (res) {
                    if (res.status === 200) {
                        var jobsApplied = res.data;
                        setAppliedJobs(jobsApplied.length)
                    }
                });
        }
        else{
            // Need to fetch the userId
            console.log("The user id in the redux is : " + userId)
        }
    }
    
    const handlePostJob = () => {
        dispatch(selectUser({
            userId: userId,
            userName: userName,
            postjob : true,
            company: company
        }))
    }

    const showAppliedJobs = () => {
        dispatch(toggleShowAppliedJobs())
        console.log("Showing applied job")
        console.log(showAppliedJobsSelectorVal)
    }

    

    return (
        <SidebarContainer>
            <ProfileSection className='profileSection'>
                <ProfileAvatarSection className='profileAvatarSection'>
                    <img src='https://images.unsplash.com/photo-1529917365646-d9b0d968d713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' alt='image data'/>
                    <ProfileAvatar />
                    <h3>{userName}</h3>
                    <p>SDE at {company}</p>
                </ProfileAvatarSection>
            </ProfileSection>
            <hr/>
            <NavigationSection>
                {
                    refreshAppliedJobs()
                }
                <NavigationSectionItem>
                    <p>Create Job Posting</p>
                    <CreateIcon onClick={handlePostJob} style={{color: "#3E6375", fontSize:"24px", marginRight: "10px", cursor: "pointer" }}/>
                </NavigationSectionItem>
            </NavigationSection>
            <hr/>
            <NavigationSection>
                <Link to="/user/appliedJobs">
                <NavigationSectionItem>
                    <p>Applied Jobs</p>
                    <p style={{color: "#0081CB", fontSize:"12px", marginRight: "10px"  }}>{appliedJobs}</p>
                </NavigationSectionItem>
                </Link>

                <NavigationSectionItem>
                    <p>Wishlist</p>
                    <p style={{color: "#0081CB", fontSize:"12px", marginRight: "10px" }}>{wishlistedJobs}</p>
                </NavigationSectionItem>
            </NavigationSection>


            <hr/>
            <NavigationSection>
                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Microsoft</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p  style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Netflix</p>
                </NavigationSectionItem>
                
                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Google</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p  style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Software Engineer</p>
                </NavigationSectionItem>
            </NavigationSection>
        </SidebarContainer>
    )
}

export default Sidebar
