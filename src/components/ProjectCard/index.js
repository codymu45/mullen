import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div className='card'>
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
