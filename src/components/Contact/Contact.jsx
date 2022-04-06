import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <h1 className='space-header'>35,000+ ALREADY JOINED</h1>
        <h1 className='contact-header'>Stay up-to-date with what we're doing</h1>
        <div className='contact-container'>
            <input placeholder='Enter your email address' type='email' />
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default Contact