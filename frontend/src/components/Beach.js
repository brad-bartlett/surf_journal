import React from 'react'

export default function Beach({beach}) {
    
    
    return (
        <div>
            <button key={beach.id}>{beach.name}</button>
        </div>
    )
}
