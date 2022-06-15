import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/calculator">Calculator</Link>
            </li>
        </ul>
    </nav>
}