import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import {SidebarContainer, ProfileSection, ProfileAvatarSection, ProfileInfoSection, ProfileAvatar, NavigationSection, NavigationSectionItem} from './Sidebar.styled'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser, selectUserName,  selectUserId_redux, selectAppliedJobs} from '../features/appSlice';

function Sidebar() {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId_redux)
    const userName = useSelector(selectUserName)
    const userAppliedJobs = useSelector(selectAppliedJobs)
    
    const handlePostJob = () => {
        dispatch(selectUser({
            userId_redux: userId,
            userName: userName,
            postjob : true
        }))
    }

    return (
        <SidebarContainer>
            <ProfileSection className='profileSection'>
                <ProfileAvatarSection className='profileAvatarSection'>
                    <img src='https://images.unsplash.com/photo-1529917365646-d9b0d968d713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' alt='image data'/>
                    <ProfileAvatar />
                    <h3>{userName}</h3>
                    <p>SDE at Microsoft</p>
                </ProfileAvatarSection>

                {/* <CreateIcon onClick={handlePostJob} /> */}
            </ProfileSection>
            <hr/>
            <NavigationSection>
                <NavigationSectionItem>
                    <p>Applied Jobs</p>
                    <p style={{color: "#0081CB", fontSize:"12px", marginRight: "10px"  }}>{userAppliedJobs}</p>
                </NavigationSectionItem>

                <NavigationSectionItem>
                    <p>Wishlist</p>
                    <p style={{color: "#0081CB", fontSize:"12px", marginRight: "10px" }}>0</p>
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
