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
        <div className='features-section-info'>
          <div className='features-section-image-wrapper'>
            <img src='images/illustration-features-tab-1.svg' />
          </div>
          <div className='features-section-content'>
            <h1>Bookmark in one click</h1>
            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            <button>More info</button>
          </div>
        </div>
    </div>
  )
}

export default Features