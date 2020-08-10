import React, { useState, useEffect } from "react";
import axios from "axios";
import Beach from './Beach'

export default function Beaches() {
  const [beaches, setBeaches] = useState([]);


  useEffect(() => {
    const fetchBeaches = async () => {
      const result = await axios("http://localhost:3000/beaches");
      setBeaches(result.data);
    };
    fetchBeaches();
  }, []);


  return (
    <ul>
      {beaches.map((beach) => (
        <Beach key={beach.id} beach={beach} />
      ))}
    </ul>
  );
}