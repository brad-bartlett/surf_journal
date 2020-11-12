import React, {Component} from 'react'
import Navbar from './components/Navbar';
import {connect} from 'react-redux'
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BeachesContainer from "./containers/BeachesContainer";
import { SessionsContainer } from "./containers/SessionsContainer";
// import { Home } from "./components/Home";


class App extends Component {
  

  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
          <Switch>
          {/* <Route
              path={`/`}
              component={Home}
              exact={true}
            /> */}
            <Route
              path={`/sessions`}
              component={SessionsContainer}
              exact={true}
            />
            <Route
              path={`/beaches`}
              component={BeachesContainer}
              exact={true}
            />
          </Switch>
        </BrowserRouter>
    </div> 
  );
}}



export default connect()(App);
