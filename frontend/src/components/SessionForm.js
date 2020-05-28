import React, { Component } from 'react'

export default class SessionForm extends Component {
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime-local" value={this.state.datetime} onChange={this.handleChange} />
                    </label> <br/>

                    <label>
                        Board:
                        <input type="text" value={this.state.board} onChange={this.handleChange} />
                    </label><br/>

                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={this.handleChange} />
                    </label><br/>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>  
            </div>
        )
    }
}
