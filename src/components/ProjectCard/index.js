import React, { useEffect } from 'react';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProjectCard(props) {
  useEffect(() => {
    Aos.init({duration: 800});
  }, []);
  return (
    <div data-aos='flip-right' className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <a href={props.ghLink}>Github</a>
          </li>
          <li>
            <a href={props.dLink}>Deployed App</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard;
