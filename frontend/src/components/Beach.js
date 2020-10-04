import React from 'react';



export default function Beach({beach, onClick}) {


    return (
        
        <ul>
            <button className="btn btn-secondary" key={beach.id} onClick={onClick}>{beach.name}</button>
        </ul>
        
    )
}
