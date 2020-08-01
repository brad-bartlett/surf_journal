import React from 'react';

const Sessions = (props) => {
    return (
        <div>
            {props.sessions.map(session => 
            <ul key={session.id}>
            Session {session.id}:
            <li>{session.beach.name}</li>
            <li>{session.board}</li>
            <li>{session.date}</li>
            <li>{session.description}</li>
            </ul>)}
        </div>
    )
            }

export default Sessions