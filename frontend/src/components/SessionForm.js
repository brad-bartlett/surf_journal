import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addSession} from '../actions/addSession'


class SessionForm extends Component {

    
 constructor(props) {
     super(props);
     this.state= {
        date: '',
        board: '',
        description: ''
    }
 }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
          date: '',
          board: '',
          description: ''
        })

        const request = {
            ...this.state,
            beach: this.props.currentBeach.id
        }
        this.props.addSession(request)
      }

    

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {

        const {currentBeach} = this.props;

        return (
            <div className="row ml-5 mt-4">
                <div className="row">
                    <h1 className="col-12">{currentBeach.name}</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date & time:
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