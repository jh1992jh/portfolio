import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({projectURL, projectImage, projectTitle}) => {
  return (
    <Link to={projectURL} className="projectCard">
          <img src={projectImage} alt="desktop"/>
          <h3>{projectTitle}</h3>
        </Link>
  )
}

export default ProjectCard;