import React from 'react';
// import { Link } from 'react-router-dom'
import './navBar.css'
export default function NavBar() {
    return <nav>
        <div>
            <ul>
                <li className='left'><strong>Api Handler</strong></li>
                {/* <li className='right'><Link to="/">Basic Info</Link></li> */}
            </ul>
        </div>
    </nav>
}