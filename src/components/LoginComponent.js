import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import styled from "styled-components";
import axios from "axios";
import xtype from "xtypejs";
import {selectUser} from '../features/appSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const LoginComponent = ({ Login, Error }) => {

    const [details, setDetails] = useState({ name: "", password: ""})
    const [userId, setUserId] = useState();

    const history = useHistory();
    const dispatch = useDispatch()

    const handleHistory = () => {
        history.push("/user");
    }

  

    const submitHandler = e => {
        e.preventDefault();
        console.log("username : " + details.name)
        var username = details.name
        var getAllUsers = "https://test-referralportal-api20210514150629.azurewebsites.net/api/users"

        axios.get(getAllUsers)
        .then(function(res){
            if(res.status === 200){
                console.log("Received all users data, looping to get userId for username: " + username)
                res.data.forEach(element => {
                    if(element["name"] === username){
                        console.log("found required user: " + element["userId"])
                        var curr_userId = element["userId"]
                        setUserId(curr_userId)

                        console.log("Set userId: " + curr_userId);
                        if(curr_userId !== ""){
                            var getUri = "https://test-referralportal-api20210514150629.azurewebsites.net/api/users/" + curr_userId
                            console.log("GetURI is : " + getUri)
                
                            axios.get(getUri) 
                                .then(function(res) {
                                    if(res.status === 200){
                                        console.log(res.data)
                                        Login(details)
                                        handleHistory();
                                        console.log("Login Component, details : " + details)
                                        dispatch(selectUser({
                                            "userId": curr_userId,
                                            "userName": details.name
                                        }))
                                    }
                                });
                
                        }
                    }
                });
            }
            else{
                console.log("The API returned failure response: "+ res.status)
            }
        });

       
    }


    return (
        <Form onSubmit={submitHandler}>
            <FormInner>
                <h2>Login!</h2>
                {(Error != "") ?
                    (<div className="Error">
                        {Error}
                    </div>) : <></>
                }
                <FormGroup>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} placeholder="username"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} placeholder="password"/>
                </FormGroup>
                <button type="submit">Login</button>
            </FormInner>
        </Form>
    )
}

export default LoginComponent

const FormInner = styled.div`
    position: relative;
    display: block;
    background-color: transparent;
    padding: 30px;
    z-index: 2;

    > h2{
        color: #CADBC2;
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 30px;
    }
    

    > button {
        display: inline-block;
        padding: 10px 50px;
        border-radius: 8px;
        background-color: #208475; 
        transition: 0.4s;
        color: #CADBC2;
        font-weight: 700;
        cursor: pointer;
    }

    > button:hover{
        background-position: 100% 0%;
    }
`;
const FormGroup = styled.div`
    display: block;
    width: 15vw;
    margin-bottom: 15px;

    > label {
        margin-right: 10px;
        color: #666;
        font-size: 20px;
        margin-bottom: 5px;
        transition: 0.4s;
    }

    > label:focus-within {
        color: #FE4880;
    } 

     > input {
        width: 100%;
        margin-top: 5px;
        padding: 10px 15px;
        background-color: #F8F8F8F8;
        border-radius: 8px;
        transition: 0.4s;
    }

    > input:focus{
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }

    

    > input[type="submit"]{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, #FE4880);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;
    color: #FFF;
    font-weight: 700;
    cursor: pointer;
    }


    >input[type="submit"]:hover{
    background-position: 100% 0%;
    }
`;

const Form = styled.form`
    display: block;
    position: relative;

    :after {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        bottom: -5px;
        right: -5px;
        left: -5px;
        z-index: 1;
        border-radius: 30px;
        background-image: linear-gradient(to bottom right, #217076, #011627);
    }
`;



