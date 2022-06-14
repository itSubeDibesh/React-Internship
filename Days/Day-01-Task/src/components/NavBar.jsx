import React from 'react';
import { Link } from 'react-router-dom'
import './navBar.css'
export default function NavBar() {
    return <nav>
        <div>
            <ul>
                <li className='left'><strong>Demo Application</strong></li>
                <li className='right'><Link to="/other">Other Info</Link></li>
                <li className='right'><Link to="/">Basic Info</Link></li>
            </ul>
        </div>
    </nav>
}