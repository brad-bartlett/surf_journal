import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Beach from './Beach';

export default function Beaches() {
    const [data, setData] = useState({beaches: []})
    // const [hasError, setErrors] = useState(false)

   
        useEffect(() => {
            const fetchBeaches = async () => {
                const result = await axios('http://localhost:3000/beaches');
                setData(result.data);}
                fetchBeaches();
            }, [])
                
        console.log(data)


    return (

        <div>
            {data.map(beach => (
                <button>{beach.name}</button>
            ))}
        </div>
    )
}
