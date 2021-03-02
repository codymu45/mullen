import React, { useEffect } from 'react';
import './style.css';
import './contactForm.php';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFileText } from 'react-icons/ai';

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div id='contactContainer'>
      <div className='contactTitle'>
        <h1 className='contactHeader'>Contact</h1>
        <hr className='contactUnderline'/>
      </div>
      <form action='contactForm.php' className='contactForm'>
        <label data-aos='fade-right' for='inputName' id='nameLabel'>Name:</label><br/>
        <input data-aos='fade-left' type='text' id='inputName'/>
        <label data-aos='fade-right' for='inputEmail' id='emailLabel'>Email:</label><br/>
        <input data-aos='fade-left' type='email' id='inputEmail'/>
        <label data-aos='fade-right' for='inputMessage' id='messageLabel'>Message:</label><br/>
        <input data-aos='fade-left' type='text' id='inputMessage'/>
        <button data-aos='fade-right' type='submit' id='contactSubmit'>
          Send!
        </button>
      </form>
      <Router>
        <div className='footContainer'>
          <div className='contactLinks'>
            <a className='footLogo' href='https://www.linkedin.com/in/codymu/' target='_blank' rel='noreferrer'><AiFillLinkedin id='linkedInLogo' />LinkedIn</a>
            <a className='footLogo' href='https://github.com/codymu45' target='_blank' rel='noreferrer'><AiFillGithub id='githubLogo' />Github</a>
            <a className='footLogo' href='https://www.instagram.com/c_murren/' target='_blank' rel='noreferrer'><AiFillInstagram id='instagramLogo' />Instagram</a> 
            <a className='footLogo' href='https://docs.google.com/document/d/1pt4XwT198rftlTEp9oAScGZCWY0UyKX9_7We-1WaW10/edit' target='_blank' rel='noreferrer'><AiFillFileText id='resumeLogo' />Resume</a> 
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Contact;
