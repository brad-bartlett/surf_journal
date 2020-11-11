import React from "react";
import Session from './Session'


export default function Sessions({sessions}) {

    return (
        <div>
          {sessions && sessions.length && (
            <>
              <p>You have logged {sessions.length} sessions</p>
              <ul>
                {sessions.map((session) => (
                  <Session key={session.id} session={session} />
                ))}
              </ul>
            </>
          )}
        </div>
      );
}