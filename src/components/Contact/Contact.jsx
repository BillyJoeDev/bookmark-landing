import React, { useRef, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const email = useRef();
  const [showError, setShowError] = useState(false);

  function handleInput() {
    if (showError) setShowError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(email.current.value)) {
      setShowError(false);
      email.current.value = '';
    } else {
      setShowError(true);
    }
  }

  return (
    <div className='contact-wrapper'>
        <h1 className='space-header'>35,000+ ALREADY JOINED</h1>
        <h1 className='contact-header'>Stay up-to-date with what we're doing</h1>
        <form className='contact-container' onSubmit={handleSubmit}>
            <div className='contact-error-container'>
              <input className={showError ? 'error' : null} placeholder='Enter your email address' type='text' ref={email} required onInput={handleInput} />
              { showError ? <i>Whoops, make sure its an email.</i> : null }
            </div>
            <button>Contact Us</button>
        </form>
    </div>
  )
}

export default Contact