import React from 'react'
import {
    BrowserRouter as Router, 
    // Switch,
    // Route,
    Link} from "react-router-dom"



export default function Navbar() {
    return (
    <Router>
        <div className="navbar">
            <nav>
                
                <Link to='/'>Home</Link>
                   
                <Link to='/surf'>Session Journal</Link>
                 
            </nav>
        </div>
    </Router>
    )
}

