import React, {Component} from 'react'
import Navbar from './components/Navbar';
import Sessions from './components/Sessions'
import {connect} from 'react-redux'
import FetchBeaches from './actions/FetchBeaches'



class App extends Component {
  
  constructor() {
    super()
    this.state={
        datetime: `${new Date()}`,
        board: '',
        description: ''}
        
  }
    

  render() {
    return (
    <div className="App">
      <Navbar />
      <Sessions />
      
    </div> 
  );
}}



export default connect(null, {FetchBeaches})(App);
