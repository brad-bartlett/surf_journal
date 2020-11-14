import React from 'react';

const Session = ({session}) => {
    
    return (
        <React.Fragment>
        <ul className="mt-2">
            <li key={session.id}>
            Session {session.id}:
            <ul>Beach: {session.beach.name}</ul>
            <ul>Board: {session.board}</ul>
            <ul>Date: {session.date}</ul>
            <ul>Description: {session.description}</ul>
            </li>
        </ul>
        </React.Fragment>
    )
}


export default Session