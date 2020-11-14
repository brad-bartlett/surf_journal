import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="ml-5 mt-5">
            <h1>Welcome to Surf Journal</h1>
            <h2 className="mt-5">To add a new session click <Link to='/beaches'>here</Link>  or if you'd like to relive your past sessions click <Link to='/sessions'>here</Link></h2>
        </div>
    )
}



