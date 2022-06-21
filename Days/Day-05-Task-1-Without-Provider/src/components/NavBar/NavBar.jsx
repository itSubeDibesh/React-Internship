import React from 'react';
import { NavLink } from 'react-router-dom'
export default function NavBar({ userDetails }) {
    const isClassActive = (e) => {
        return e.isActive ? 'bg-purple' : 'bg-orange'
    }
    return <nav className='box p-1'>
        <ul>
            <li><strong className='header'>Without Providers</strong></li>
            <li><NavLink to="/" className={isClassActive} >Basic Info</NavLink></li>
            {userDetails !== null ? <li><NavLink to="confirm" className={isClassActive} >Confirm Info</NavLink></li> : null}
        </ul>
    </nav>
}