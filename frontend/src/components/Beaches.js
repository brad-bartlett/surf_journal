import React from 'react';

export default function Beaches(props) {
    return (
        <div>
            {props.beaches.map(beach => 
                
                <button key={beach.id} className="">{beach.name}</button>
                
            )}
        </div>
    )
}
