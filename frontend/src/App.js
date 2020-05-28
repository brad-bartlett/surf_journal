import React from 'react'
import './App.css';
import Navbar from './layout/Navbar';
import Surf from './components/SessionForm'


class App extends React.Component() {
  
  constructor() {
    super()
    this.state={
        datetime: `${new Date()}`,
        board: '',
        description: ''}

      
  }
    

    handleSubmit(e) {
        alert('Submitted:' + this.state.value);
        e.preventDefault()
    }

    handleChange(e) {
        this.setState({
            datetime: e.target.datetime,
            board: e.target.board,
            description: e.target.description
        })
    }


  render() {
    return (
    <div className="App">
      <Navbar />
      <Surf handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    </div> 
  );
}}

export default App;
