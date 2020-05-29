import React, { Component } from 'react'

export default class SessionForm extends Component {
    
    
    render(props) {
        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime-local" value={props.state.datetime} onChange={props.handleChange} />
                    </label> <br/>

                    <label>
                        Board:
                        <input type="text" value={props.state.board} onChange={props.handleChange} />
                    </label><br/>

                    <label>
                        Description:
                        <input type="text" value={props.state.description} onChange={props.handleChange} />
                    </label><br/>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>  
            </div>
        )
    }
}
