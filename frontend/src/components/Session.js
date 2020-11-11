import React from 'react';

const Session = ({session}) => {
    
    return (
        <React.Fragment>
        <ul>
            <ul key={session.id}>
            Session {session.id}:
            <li>Beach: {session.beach.name}</li>
            <li>Board: {session.board}</li>
            <li>Date: {session.date}</li>
            <li>Description: {session.description}</li>
            </ul>
        </ul>
        </React.Fragment>
    )
}


export default Session