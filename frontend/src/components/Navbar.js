import React from 'react'
import { Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to='/'>Home</Link>  
                <Link className="ml-5" to='/beaches'>Log Session</Link> 
                <Link className="ml-5" to='/sessions'>Sessions</Link>
            </nav>
        </div>
    )
}

