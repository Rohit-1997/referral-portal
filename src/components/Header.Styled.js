import styled from "styled-components"
import { Avatar } from "@material-ui/core"



const HeaderContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0px;
background-color: var(--app-color);
color: white;
border-radius: 5px;
box-shadow: 1px 1px 3px black;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;

> h3 {
    padding: 3px;
    margin-left: 5px;
    color: var(--font-color);
}

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}

> p {
    font-weight: 100;
    font-size: 10px;
    padding: 5px;
    text-align: left;
    margin-top: 5px;
}

`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8;
}
`;

const HeaderCenter = styled.div`
flex: 0.4;
display: flex;
text-align:center;
padding: 0 50px;
border-radius: 6px;
border-color: #421f44;

> input{
    background-color: transparent;
    border: black;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
}
`;

const HeaderRight = styled.div `
flex: 0.3;
display: flex;
align-items: flex-end;

> button {
    background-color: var(--btn-background);
    margin-left: auto;
    margin-right: 20px;
    color: var(--font-color);
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 8px;
    cursor: pointer;
}
`;

export { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderCenter, HeaderRight };