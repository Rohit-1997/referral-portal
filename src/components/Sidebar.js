import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { SidebarContainer, ProfileSection, ProfileAvatarSection, ProfileInfoSection, ProfileAvatar, NavigationSection, NavigationSectionItem } from './Sidebar.styled'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { selectUser, selectUserName, selectUserId, selectAppliedJobs, selectCompany, selectWishlistedJobs, selectShowAppliedJobs, toggleShowAppliedJobs, fetchAppliedJobs } from '../features/appSlice';
import HistoryHandler from '../utils/HistoryHandler';
import userJobsData from "../utils/JobsHelper";
import { setAppliedJobsCount } from "../features/appSlice";

function Sidebar() {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectUserName)
    const userAppliedJobs = useSelector(selectAppliedJobs)
    const company = useSelector(selectCompany)
    const wishlistedJobs = useSelector(selectWishlistedJobs)
    const history = useHistory();


    useEffect(() => {
       userJobsData.loadAppliedJobs(userId)
        .then((result) => {
            console.log("Double promise return : ", result);
            dispatch(setAppliedJobsCount({
                "appliedJobsCount": result.data.length
            }));
        })
        .catch((error) => {
            console.log("Double promise fails: ", error);
        })
    }, [userId])


    const handlePostJob = () => {
        dispatch(selectUser({
            userId: userId,
            userName: userName,
            postjob: true,
            company: company
        }))
    }

    const showAppliedJobs = () => {
        console.log("Showing applied job")
        HistoryHandler.showAppliedJobs(history, userId);
    }



    return (
        <SidebarContainer>
            <ProfileSection className='profileSection'>
                <ProfileAvatarSection className='profileAvatarSection'>
                    <img src='https://images.unsplash.com/photo-1529917365646-d9b0d968d713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' alt='image data' />
                    <ProfileAvatar />
                    <h3>{userName}</h3>
                    <p>SDE at {company}</p>
                </ProfileAvatarSection>
            </ProfileSection>
            <hr />
            <NavigationSection>
                <NavigationSectionItem>
                    <p>Create Job Posting</p>
                    <CreateIcon onClick={handlePostJob} style={{ color: "#3E6375", fontSize: "24px", marginRight: "10px", cursor: "pointer" }} />
                </NavigationSectionItem>
            </NavigationSection>
            <hr />
            <NavigationSection>
                <NavigationSectionItem onClick={showAppliedJobs}>
                    <p>Applied Jobs</p>
                    <p style={{ color: "#0081CB", fontSize: "12px", marginRight: "10px" }}>{userAppliedJobs}</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p>Wishlist</p>
                    <p style={{ color: "#0081CB", fontSize: "12px", marginRight: "10px" }}>{wishlistedJobs}</p>
                </NavigationSectionItem>
            </NavigationSection>


            <hr />
            <NavigationSection>
                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Microsoft</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Netflix</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Google</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p style={{ fontSize: "15px", color: "#337599", fontWeight: "300" }}># Software Engineer</p>
                </NavigationSectionItem>
            </NavigationSection>
        </SidebarContainer>
    )
}

export default Sidebar
