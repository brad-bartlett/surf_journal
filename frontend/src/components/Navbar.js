import React from 'react'
import {
    BrowserRouter as Router, 
    // Switch,
    // Route,
    Link} from "react-router-dom";
import BeachesContainer from '../containers/BeachesContainer';



export default function Navbar() {
    return (
    <Router>
        <div className="navbar">
            <nav>
                
                <Link to='/'>Home</Link>
                   
                <Link to='/journal' render={BeachesContainer} >Session Journal</Link>

                


                 
            </nav>
        </div>
    </Router>
    )
}

