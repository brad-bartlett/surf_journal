import React from 'react'

const Sessions = (props) => {
    return (
        <div>
            {props.sessions.map((session) => 
            <li key={session.id}> 
            {session.beach} 
            {session.board} 
            {session.date} 
            {session.description}
            </li>)}
        </div>
    )
            }

export default Sessions