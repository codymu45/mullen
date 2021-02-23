import React from 'react'
import './style.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFileText } from 'react-icons/ai';

const Footer = () => {
  return (
    <Router>
      <div className='footContainer'>
        <div className='contactLinks'>
          <a href='https://www.linkedin.com/in/codymu/' target='_blank' rel='noreferrer'><AiFillLinkedin id='linkedInLogo' /></a>
          <a href='https://github.com/codymu45' target='_blank' rel='noreferrer'><AiFillGithub id='githubLogo' /></a>
          <a href='https://www.instagram.com/c_murren/' target='_blank' rel='noreferrer'><AiFillInstagram id='instagramLogo' /></a> 
          <a href='https://docs.google.com/document/d/1pt4XwT198rftlTEp9oAScGZCWY0UyKX9_7We-1WaW10/edit' target='_blank' rel='noreferrer'><AiFillFileText id='resumeLogo' /></a> 
        </div>
      </div>
    </Router>
  )
}

export default Footer
