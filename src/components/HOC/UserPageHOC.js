import React from 'react';
import Sidebar from '../Sidebar';
import HeaderComponent from '../HeaderComponent';
import styled from "styled-components";


function UserPageHOC(WrappedComponent) {
    return (props) => {
        return (
            <MainDiv>
                <HeaderComponent />
                <FeedContainer>
                    <Sidebar />
                    <WrappedComponent {...props} />
                </FeedContainer>
            </MainDiv>
        );
    }
}

export default UserPageHOC;


const MainDiv = styled.div `
flex: 1; 
flex-direction: row;
`;

const FeedContainer = styled.div `
display: flex;
flex: 1;
padding: 5px 0px;
background-color: #F3F2EF;
`;