import React from 'react';

const Sessions = ({currentBeach}) => {
    console.log('session', currentBeach);
    if (currentBeach) {
    return (
        <React.Fragment>
        <div>
            You have logged {currentBeach.sessions.length} sessions
            {currentBeach.sessions.map(session => 
            <ul key={session.id}>
            Session {session.id}:
            <li>Beach: {session.beach.name}</li>
            <li>Board: {session.board}</li>
            <li>Date: {session.date}</li>
            <li>Description: {session.description}</li>
            </ul>)}
        </div>
        </React.Fragment>
    )
    } else {
        return null
    }
}

export default Sessions