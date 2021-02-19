import React, { useEffect } from 'react';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className='aboutContainer'>
      <div className='aboutTitle'>
        <h1 className='aboutHeader'>About</h1>
        <hr className='aboutUnderline'/>
      </div>
      <div className='headShotContainer'>
        <div data-aos='fade-right' className='profilePicture'></div>
        <p data-aos='fade-left' className='aboutMe'>
          Hello, I'm Cody Mullen. I am a full stack web developer with a strong background in 
          problem solving and work ethic.  I have recently earned a certificate in full stack web development 
          from the University of California Riverside. Known to be creative and passionate to learn, 
          with a primary focus on functionality and design. With each project, I strive to provide my audience 
          with eye-catching applications and a user friendly process. 
        </p>
        <p data-aos='fade-right' className='skillsHead'>Skills</p>
        <hr className='skillsUnderline'/>
        <p data-aos='fade-left' className='skillsList'>JS | CSS | HTML5 | MongoDB | GitHub | MySQL | Express | React | Node | Handlebars | jQuery | Bootstrap | Adobe PS | Adobe Illustrator</p>
      </div>   
    </div>
  )
}

export default About
