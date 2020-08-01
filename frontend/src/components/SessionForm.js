import React, { Component } from 'react'


export default class SessionForm extends Component {
    
 
    handleSubmit(e) {
        alert('Submitted:' + this.state.value);
        e.preventDefault()
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime-local" value={this.props.datetime} onChange={this.handleChange.bind(this)} />
                    </label> <br/>

                    <label>
                        Board:
                        <input type="text" value={this.props.board} onChange={this.handleChange.bind(this)} />
                    </label><br/>

                    <label>
                        Description:
                        <input type="text" value={this.props.description} onChange={this.handleChange.bind(this)} />
                    </label><br/>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>  
            </div>
        )
    }
}
