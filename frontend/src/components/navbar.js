import React from 'react'
import {
    BrowserRouter as Router, 
    // Switch,
    // Route,
    Link} from "react-router-dom"



export default function navbar() {
    return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link exact to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/surf'>Surf Report</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </Router>
    )
}

