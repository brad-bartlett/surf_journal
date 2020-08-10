import React, { Component } from 'react'
import Sessions from '../components/Sessions'
import SessionForm from '../components/SessionForm'
import {connect} from 'react-redux'
import {fetchSessions} from '../actions/fetchSessions'

export class SessionsContainer extends Component {

    componentDidMount() {
        this.props.fetchSessions()
    }


    render() {
        return (
            <div className="sessions">
                <SessionForm />
                <Sessions sessions={this.props.sessions}/>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sessions: state.sessions
    }
}
export default connect(mapStateToProps, {fetchSessions})(SessionsContainer)
