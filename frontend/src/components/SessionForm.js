import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {addSession} from '../actions/addSession'


export default class SessionForm extends Component {
    state={
        date: '',
        board: '',
        description: ''
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSession(this.state)
        this.setState({
          date: '',
          board: '',
          description: ''
        })
      }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime-local" value={this.props.datetime} name="date" onChange={this.handleChange} />
                    </label> <br/>

                    <label>
                        Board:
                        <input type="text" value={this.props.board} name="board" onChange={this.handleChange} />
                    </label><br/>

                    <label>
                        Description:
                        <input type="text" value={this.props.description} name="description" onChange={this.handleChange} />
                    </label><br/>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>  
            </div>
        )
    }
}
