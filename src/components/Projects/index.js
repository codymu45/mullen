import React, { Component } from "react";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import projects from "./projects.json";
import './style.css';

class Projects extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div className='projectContainer'>
        <div className='projectTitle'>
          <h1 className='projectHeader'>Projects</h1>
          <hr className='projectUnderline'/>
      </div>
      <Wrapper>
        {this.state.projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            ghLink={project.ghLink}
            dLink={project.dLink}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default Projects;