import React, { useState } from "react";
import Beach from './Beach'
import SessionForm from './SessionForm'

export default function Beaches({beaches}) {

const [currentBeach, setCurrentBeach] = useState('')


  return (
    <div>
        <ul className="row mt-4">
            {beaches.map(beach => (
            <Beach key={beach.id} beach={beach} onClick={() => 
              setCurrentBeach(beach)
            } />
            ))}
        </ul>
        {currentBeach && (<div className="session-form">
            <SessionForm currentBeach={currentBeach}/> 
        </div>)}
    </div>
  );
}