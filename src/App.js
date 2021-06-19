import styled from "styled-components";
import LoginComponent from './components/LoginComponent'
import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserPageComponent from "./components/UserPageComponent";
import AppliedJobsComponent from "./components/AppliedJobsComponent";
import { Provider } from "react-redux";
import store from './app/store';

function App() {
  const [error, setError] = useState("")

  useEffect(() => {
    console.log('The store object: ', store);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Provider store={store}>
              <AppBody>
                <LoginComponent Error={error}></LoginComponent>
              </AppBody>
            </Provider>
          </Route>
          <Route exact path="/user/:userId/appliedJobs">
            <Provider store={store}>
              <AppliedJobsComponent />
            </Provider>
          </Route>
          <Route exact path="/user/:userId">
            <Provider store={store}>
              <UserPageComponent />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--app-color);
`;

const MainDiv = styled.div`
height: 100vh;
display: flex;
`;

