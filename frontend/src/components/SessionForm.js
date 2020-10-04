import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addSession} from '../actions/addSession'


class SessionForm extends Component {

    

    state= {
        beach: this.props.currentBeach.name,
        date: '',
        board: '',
        description: ''
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
        beach: '',
          date: '',
          board: '',
          description: ''
          
        })
        this.props.addSession(this.state)
        
      }

    

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <div className="session-container ml-5">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input className="ml-2 mt-2" type="datetime-local" value={this.props.datetime} name="date" onChange={this.handleChange} />
                    </label> <br/>

                    <label>
                        Board:
                        <input className="ml-2 mt-3" type="text" value={this.props.board} name="board" onChange={this.handleChange} />
                    </label><br/>

                    <label>
                        Description:
                        <input className="ml-2 mt-3" type="text" value={this.props.description} name="description" onChange={this.handleChange} />
                    </label><br/>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>

                </form>  
            </div>
        )
    }
}

export default connect(null, {addSession})(SessionForm)