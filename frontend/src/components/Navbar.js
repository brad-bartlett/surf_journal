import React from 'react'
import {
    BrowserRouter as Router, 
    // Switch,
    // Route,
    Link} from "react-router-dom";
import SessionsContainer from '../containers/SessionsContainer';



export default function Navbar() {
    return (
    <Router>
        <div className="navbar">
            <nav>
                
                <Link to='/'>Home</Link>
                   
                <Link className="ml-5" to='/sessions' render={SessionsContainer}>Sessions</Link>




                 
            </nav>
        </div>
    </Router>
    )
}

