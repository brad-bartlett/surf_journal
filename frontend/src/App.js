import React, {Component} from 'react'
import Navbar from './components/Navbar';
import {connect} from 'react-redux'
import BeachesContainer from './containers/BeachesContainer';
import SessionsContainer from './containers/SessionsContainer';



class App extends Component {
  

  render() {
    return (
    <div className="App">
      <Navbar />
      <BeachesContainer />
      <SessionsContainer />
      
    </div> 
  );
}}



export default connect()(App);
