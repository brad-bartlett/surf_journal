import React, {useState} from 'react';
import axios from 'axios';
import Beach from './Beach';

export default function Beaches() {
    const [beaches, setBeaches] = useState({})


    function getBeaches(){
        let res = axios.get('http://localhost:3000/beaches');
        console.log(res)
        let beaches = res.data;
        console.log(beaches)
        
    }


    return (


        <div>
            {beaches.map(beach => 
                
                <Beach beach={beach} />
                
            )}
        </div>
    )
}
