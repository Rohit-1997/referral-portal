import React from 'react'
import HeaderComponent from "./HeaderComponent";
import Sidebar from './Sidebar'
import ReferralsFeed from './ReferralsFeed'
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'
import {selectUserId_redux, selectUserName, selectUser, selectJobPosting} from '../features/appSlice'
import FeedInput from './FeedInput';

function UserPageComponent({Logout}) {

    const isPostJob = useSelector(selectJobPosting)

    return (
        <MainDiv>
            <HeaderComponent logout={Logout} />
            <FeedContainer>
                <Sidebar />
                {
                    isPostJob == true ? <FeedInput/> : <ReferralsFeed/>
                }
            </FeedContainer>
        </MainDiv>
    )
}

export default UserPageComponent


const MainDiv = styled.div `
flex: 1; 
`;

const FeedContainer = styled.div `
display: flex;
flex: 1;
padding: 5px 0px;
background-color: #F3F2EF;
`;
