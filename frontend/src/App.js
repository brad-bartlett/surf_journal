import React, {Component} from 'react'
import Navbar from './components/Navbar';
import {connect} from 'react-redux'
import BeachesContainer from './containers/BeachesContainer';



class App extends Component {
  

  render() {
    return (
    <div className="App">
      <Navbar />
      <BeachesContainer />
      
    </div> 
  );
}}



export default connect()(App);
