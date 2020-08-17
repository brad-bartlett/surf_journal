import React from 'react';

const Sessions = ({currentBeach}) => {
    return (
        <React.Fragment>
        <div>
            {/* You have logged {props.sessions.length} sessions
            {props.sessions.map(session => 
            <ul key={session.id}>
            Session {session.id}:
            <li>Beach: {session.beach.name}</li>
            <li>Board: {session.board}</li>
            <li>Date: {session.date}</li>
            <li>Description: {session.description}</li>
            </ul>)} */}
            {/* {currentBeach.sessions.date} */}
        </div>
        </React.Fragment>
    )
}

export default Sessions