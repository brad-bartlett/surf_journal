import React from 'react';

export default function Beach({beach, onClick}) {
    return (
        <li className="d-inline float-left ml-3 mb-3">
            <button className="btn btn-secondary" key={beach.id} onClick={onClick}>{beach.name}</button>
        </li>            
    )
}
