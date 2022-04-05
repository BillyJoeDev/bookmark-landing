import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
        <img src='images/logo-bookmark.svg'/>
        <ul className='navbar-links'>
            <li className='navbar-link'>FEATURES</li>
            <li className='navbar-link'>PRICING</li>
            <li className='navbar-link'>CONTACT</li>
            <li className='navbar-button'>LOGIN</li>
        </ul>
    </nav>
  )
}

export default Navbar