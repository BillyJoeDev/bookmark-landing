import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='faq-wrapper'>
        <div className='faq-header-container'>
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className='faq-container'>
            <div className='faq'>
                <h1 className='faq-header'>What is Bookmark?</h1>
                <img src='images/icon-arrow.svg' />
            </div>
            <div className='faq'>
                <h1 className='faq-header'>How can I request a new browser?</h1>
                <img src='images/icon-arrow.svg' />
            </div>
            <div className='faq'>
                <h1 className='faq-header'>Is there a mobile app?</h1>
                <img src='images/icon-arrow.svg' />
            </div>
            <div className='faq'>
                <h1 className='faq-header'>What about other Chromium browsers?</h1>
                <img src='images/icon-arrow.svg' />
            </div>
        </div>
        <button>More Info</button>
    </div>
  )
}

export default FAQ