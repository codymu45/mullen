import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='contactTitle'>
        <h1 className='contactHeader'>Contact</h1>
        <hr className='contactUnderline'/>
      </div>
      <div className='contactForm'>
        <label for='inputName' id='nameLabel'>Name</label><br/>
        <input type='text' id='inputName'/>
        <label for='inputEmail' id='emailLabel'>Email</label><br/>
        <input type='email' id='inputEmail'/>
        <label for='inputMessage' id='messageLabel'>Message</label><br/>
        <input type='text' id='inputMessage'/>
        <button type='submit' id='contactSubmit'>
          Send!
        </button>
      </div>
      <div className='contactLinks'>
        <p>placeholder for my links/icons</p>
        <p>linkedin</p>
        <p>github</p>
        <p>instagram</p>
        <p>resume</p>
      </div>
    </div>
  )
}

export default Contact;
