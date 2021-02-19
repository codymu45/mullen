import React, { useEffect } from 'react';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className='contactContainer'>
      <div className='contactTitle'>
        <h1 className='contactHeader'>Contact</h1>
        <hr className='contactUnderline'/>
      </div>
      <div className='contactForm'>
        <label data-aos='fade-right' for='inputName' id='nameLabel'>Name</label><br/>
        <input data-aos='fade-left' type='text' id='inputName'/>
        <label data-aos='fade-right' for='inputEmail' id='emailLabel'>Email</label><br/>
        <input data-aos='fade-left' type='email' id='inputEmail'/>
        <label data-aos='fade-right' for='inputMessage' id='messageLabel'>Message</label><br/>
        <input data-aos='fade-left' type='text' id='inputMessage'/>
        <button data-aos='fade-right' type='submit' id='contactSubmit'>
          Send!
        </button>
      </div>
    </div>
  )
}

export default Contact;
