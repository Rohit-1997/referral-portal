import styled from "styled-components"
import { Avatar } from "@material-ui/core"



const SidebarContainer = styled.div`
max-width: 260px;
max-height: 700px;
border-radius: 10px;
flex: 0.3;
margin-left: 3px;
background-color: white;


> hr {
        border: 0.5px solid lightgray;
        margin-left: 10px;
        margin-right: 10px;
    }

`;


const ProfileSection = styled.div`
    margin: 5px 5px;
`;

const ProfileAvatarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
    padding-bottom: 10px;


    > .MuiSvgIcon-root{
        font-size: 1000px;
        width: 200px;
        height: 200px;
        align-items: center;
        color: var(--font-color);
    }

    > img {
        width: 100%;
        height: 100px;
        margin-bottom: -20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
    }


`;


const ProfileInfoSection = styled.div`
    flex: 0.4;
    align-items: center;
    justify-content: center;
`;


const ProfileAvatar = styled(Avatar)`
    margin-bottom: 15px;
`;


const NavigationSection = styled.div`
    display: flex;
    margin-left: 5px;
    flex-direction: column;
    padding-top: 5px;
`;


const NavigationSectionItem = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: space-between;

    >p {
        color: black;
        font-size: 18px;
        font-weight: 700;
        padding: 3px 3px;
        cursor: pointer;
    }

`;



export {SidebarContainer, ProfileSection, ProfileAvatarSection, ProfileInfoSection, ProfileAvatar, NavigationSection, NavigationSectionItem};