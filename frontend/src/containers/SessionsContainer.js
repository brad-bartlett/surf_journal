import React, { Component } from 'react'
import Sessions from '../components/Sessions'
import SessionForm from '../components/SessionForm'

export class SessionsContainer extends Component {
    render() {
        return (
            <div>
                <Sessions />
                <SessionForm />
            </div>
        )
    }
}

export default SessionsContainer
