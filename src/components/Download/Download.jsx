import React from 'react'
import './Download.css'

const Download = () => {
  return (
    <div className='download-wrapper'>
        <div className='download-wrapper-header'>
            <h1>Download the extension</h1>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className='downloads-wrapper'>
            <div className='download'>
                <img src='images/logo-chrome.svg' className='download-logo' />
                <h1>Add to Chrome</h1>
                <p>Minimum version 62</p>
                <img src='images/bg-dots.svg' className='download-dots' />
                <button>Add & Install Extension</button>
            </div>
            <div className='download two'>
                <img src='images/logo-firefox.svg' className='download-logo' />
                <h1>Add to Firefox</h1>
                <p>Minimum version 55</p>
                <img src='images/bg-dots.svg' className='download-dots' />
                <button>Add & Install Extension</button>
            </div>
            <div className='download three'>
                <img src='images/logo-opera.svg' className='download-logo' />
                <h1>Add to Opera</h1>
                <p>Minimum version 46</p>
                <img src='images/bg-dots.svg' className='download-dots' />
                <button>Add & Install Extension</button>
            </div>
        </div>
    </div>
  )
}

export default Download