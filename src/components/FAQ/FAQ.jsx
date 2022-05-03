import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
        question: "What is Bookmark?",
        awnser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
        open: true,
        index: 0,
    },
    {
        question: "How can I request a new browser?",
        awnser: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
        open: false,
        index: 1,
    },
    {
        question: "Is there a mobile app?",
        awnser: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
        open: false,
        index: 2
    },
    {
        question: "What about other Chromium browsers?",
        awnser: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
        open: false,
        index: 3
    }
  ]);

  const handleFaq = (index) => {
    const array = Array.from(faqs);
    array.map(result => {
        if (result.index == index) {
            result.open = !result.open;
        } else {
            result.open = false;
        }
    });
    setFaqs(array);
  }

  return (
    <div className='faq-wrapper'>
        <div className='faq-header-container'>
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className='faq-container'>
            {faqs.map(faq => (
                <div className={faq.open ? 'faq open' : 'faq'} onClick={() => handleFaq(faq.index)}>
                    <div className='faq-heading'>
                        <h1 className='faq-header'>{faq.question}</h1>
                        <img src='images/icon-arrow.svg' />
                    </div>
                    <p>{faq.awnser}</p>
                </div>
            ))}
        </div>
        <button>More Info</button>
    </div>
  )
}

export default FAQ