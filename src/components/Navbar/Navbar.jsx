import React from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
        <img src='images/logo-bookmark.svg' alt=""/>
        <FaBars className='mobile-nav' />
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