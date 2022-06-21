import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { DetailContext } from '../../providers/DetailProvider';

export default function NavBar() {
    const
        { userDetails } = useContext(DetailContext),
        isClassActive = (e) => {
            return e.isActive ? 'bg-purple' : 'bg-orange'
        }
    return <nav className='box p-1'>
        <ul>
            <li><strong className='header'>With Providers</strong></li>
            <li><NavLink to="/" className={isClassActive} >Basic Info</NavLink></li>
            {userDetails !== null ? <li><NavLink to="confirm" className={isClassActive} >Confirm Info</NavLink></li> : null}
        </ul>
    </nav>
}