import React, {Component} from 'react'
import './App.css';
import Navbar from './layout/Navbar';
import SessionForm from './components/SessionForm'


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
      <SessionForm datetime={this.state.datetime} board={this.state.board} description={this.state.description}/>
    </div> 
  );
}}

export default App;
