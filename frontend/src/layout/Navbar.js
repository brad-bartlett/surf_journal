import React from 'react'
import {
    BrowserRouter as Router, 
    // Switch,
    // Route,
    Link} from "react-router-dom"



export default function Navbar() {
    return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link exact to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/surf'>Session Journal</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </Router>
    )
}

