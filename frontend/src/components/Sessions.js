import React from "react";
import Session from './Session'


export default function Sessions({sessions}) {

  return (
    <>
        You have logged {sessions.length} sessions
        <ul>
            {sessions.map(session => (
            <Session key={session.id} session={session} />
            ))}
        </ul>
    </>
  );
}