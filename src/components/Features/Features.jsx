import React, { useState } from 'react'
import './Features.css'

const Features = () => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const features = [
    {
      "title": "Bookmark in one click",
      "desc": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      "image": "images/illustration-features-tab-1.svg"
    },
    {
      "title": "Intelligent search",
      "desc": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      "image": "images/illustration-features-tab-2.svg"
    },
    {
      "title": "Share your bookmarks",
      "desc": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      "image": "images/illustration-features-tab-3.svg"
    }
  ]

  return (
    <div className='features-wrapper'>
        <div className='features-header'>
            <h1>Features</h1>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className='features-section-buttons'>
            <button className={featureIndex == 0 ? 'active' : null} onClick={()=>setFeatureIndex(0)}>Simple Bookmarking</button>
            <button className={featureIndex == 1 ? 'active' : null} onClick={()=>setFeatureIndex(1)}>Speedy Searching</button>
            <button className={featureIndex == 2 ? 'active' : null} onClick={()=>setFeatureIndex(2)}>Easy Sharing</button>
        </div>
        <div className='features-section-info'>
          <div className='features-section-image-wrapper'>
            <div className='features-section-bullet' />
            <img src={features[featureIndex].image} />
          </div>
          <div className='features-section-content'>
            <h1>{features[featureIndex].title}</h1>
            <p>{features[featureIndex].desc}</p>
            <button>More info</button>
          </div>
        </div>
    </div>
  )
}

export default Features