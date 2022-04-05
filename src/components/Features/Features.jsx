import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='features-wrapper'>
        <div className='features-header'>
            <h1>Features</h1>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className='features-section-buttons'>
            <button className='active'>Simple Bookmarking</button>
            <button>Speedy Searching</button>
            <button>Easy Sharing</button>
        </div>
    </div>
  )
}

export default Features