import React from 'react'
import HeaderComponent from "./HeaderComponent";

import Sidebar from './Sidebar'
import UserPageHOC from './HOC/UserPageHOC';
import ReferralsFeed from './ReferralsFeed'
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'
import {selectUserId, selectUserName, selectUser, selectJobPosting} from '../features/appSlice'
import FeedInput from './FeedInput';
import { Switch, Route, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../app/store';


function UserPageComponent() {

    const isPostJob = useSelector(selectJobPosting)

    return (
        <React.Fragment>
            {
                isPostJob == true ? <FeedInput/> : <ReferralsFeed/>
            }
        </React.Fragment>
    )
}

export default UserPageHOC(UserPageComponent)





