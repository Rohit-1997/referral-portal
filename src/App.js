import styled from "styled-components";
import LoginComponent from './components/LoginComponent'
import React, { useState } from "react"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import UserPageComponent from "./components/UserPageComponent";
import { Provider } from "react-redux";
import store from './app/store'
import FeedInput from "./components/FeedInput";


function App() {

  const admin = {
    username: "Kranthi"
  }

  const [user, setUser] = useState({ name: "" })
  const [error, setError] = useState("")

  const history = useHistory();

  const Login = details => {
    console.log("details logged in with : " + details);
    

    if (details.name == admin.username) {
      console.log("logged in")
      setUser({
        name: details.name,
      });
    }
    else {
      console.log("details do not match")
      setError("Details do not match")
    }
  }

  const Logout = () => {
    console.log("logout")
    
    setUser({
      name: "",
      email: ""
    })
  }


  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" >
              <Provider store={store}>
                <AppBody>
                  <LoginComponent Login={Login} Error={error}></LoginComponent>
                </AppBody>
              </Provider>
            </Route>
            <Route path="/user">
              <Provider store={store}>
                <UserPageComponent Logout={Logout}/>
              </Provider>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div `
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #67CDD6;
`;

const MainDiv = styled.div `
height: 100vh;
display: flex;
`;

