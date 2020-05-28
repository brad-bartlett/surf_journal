import React, { Component } from 'react'

export default class Surf extends Component {
    
    constructor(props) {
    super(props)
    this.state={
        datetime: '',
        board: '',
        description: ''}

        this.handleChange = this.handleChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime" value={this.state.datetime} onChange={this.handleChange} />
                    </label>

                    <label>
                        Board:
                        <input type="text" value={this.state.board} onChange={this.handleChange} />
                    </label>

                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={this.handleChange} />
                    </label>

                    <button type="submit" value="Submit"></button>

                </form>  
            </div>
        )
    }
}
