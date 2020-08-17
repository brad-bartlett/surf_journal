import React, { useState, useEffect } from "react";
import axios from "axios";
import Beach from './Beach'
import SessionsContainer from '../containers/SessionsContainer'

export default function Beaches({beaches}) {
const [currentBeach, setCurrentBeach] = useState('')


//   useEffect(() => {
//     const fetchBeaches = async () => {
//       const result = await axios("http://localhost:3000/beaches");
//       setBeaches(result.data);
//     };
//     fetchBeaches();
//   }, []);


  return (
    <div>
        <ul>
            {beaches.map(beach => (
            <Beach key={beach.id} beach={beach} onClick={() => setCurrentBeach({beach})} />
            ))}
        </ul>
        <div className="sessions-container">
            <SessionsContainer currentBeach={currentBeach}/>
        </div>
    </div>
  );
}