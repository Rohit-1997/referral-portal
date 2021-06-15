import React from 'react'
import {HeaderContainer, HeaderLeft, HeaderAvatar, HeaderCenter, HeaderRight} from './Header.Styled'
import SearchIcon from '@material-ui/icons/Search'
import {selectUserId, selectUserName, selectUser} from '../features/appSlice'
import {useSelector, useDispatch} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
  } from "react-router-dom";


const HeaderComponent = () => {

    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectUserName)

    const history = useHistory();
    
    console.log("HeaderComponent :: userId " + userId)
    console.log("HeaderComponent :: userName " + userName)

    const clearHistory = () => {
        history.push("/");
    }

    const onLogoutClick = function(){
        dispatch(selectUser({
            userId: null,
            userName : null
        }))
        clearHistory();
    }

    const goToHome = () => {
        dispatch(selectUser({
            userId: userId,
            userName: userName,
            postjob : false
        }))
    }


    console.log("inside headercomponent");

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar onClick={goToHome}/>
                <h3>{userName}</h3>
                <p>{userId}</p>
            </HeaderLeft>

            <HeaderCenter>
                <input type="text" name="searchbox" id="searchbox" placeholder="search"/>
                <SearchIcon/>
            </HeaderCenter>

            <HeaderRight>
                <button onClick={onLogoutClick}>logout</button>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default HeaderComponent
