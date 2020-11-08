import React, { useState } from "react";
import Beach from './Beach'
import SessionsContainer from '../containers/SessionsContainer'

export default function Beaches({beaches}) {

const [currentBeach, setCurrentBeach] = useState('')


  return (
    <div>
        <ul>
            {beaches.map(beach => (
            <Beach key={beach.id} beach={beach} onClick={() => 
              setCurrentBeach(beach)
            } />
            ))}
        </ul>
        <div className="sessions-container">
            <SessionsContainer currentBeach={currentBeach}/> 
        </div>
    </div>
  );
}