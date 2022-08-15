import React from 'react'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
        <ul className='footer-links'>
          <img src='images/logo-bookmark-white.svg' alt="" /> 
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
        <div className='footer-social'>
            <FaFacebookSquare className='social-icon' /> 
            <FaTwitter className='social-icon' /> 
        </div>
    </footer>
  )
}

export default Footer