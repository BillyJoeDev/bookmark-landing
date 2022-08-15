import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <header className='hero-wrapper'>
        <div className='hero-info'>
            <h1>A Simple Bookmark Manager</h1>
            <p> A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className='hero-info-buttons'>
                <button className='hero-button-primary'>Get it on Chrome</button>
                <button className='hero-button-secondary'>Get it on Firefox</button>
            </div>
        </div>
        <div className='hero-image-wrapper'>
          <div className='hero-bullet-background' />
          <img src='images/illustration-hero.svg' alt="" />
        </div>
    </header>
  )
}

export default Hero