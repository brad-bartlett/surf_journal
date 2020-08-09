import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Beaches() {
  const [beaches, setBeaches] = useState([]);
  // const [hasError, setErrors] = useState(false)

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
        <button key={beach.id}>{beach.name}</button>
      ))}
    </ul>
  );
}