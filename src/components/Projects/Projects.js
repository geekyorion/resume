import { useState } from 'react';
import './Projects.css';

const Projects = ({ data }) => {
  const [projectState] = useState(data);

  return (
    <div className="project-wrapper">
      <h3 className="project-header-text">Projects</h3>
      {projectState.map((project, index) => (
        <div className="project" key={`project-${index}`}>
          <div className="project-name">{project.name}</div>
          <div className="project-desc">{project.desc}</div>
          <div className="project-technologies">
            <div className="project-technologies-label">Technologies Used: </div>
            <div className="project-technologies-values">
              {project.technologies.join(', ')}
            </div>
          </div>
          <div className="project-link">
            [ <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a> ]
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
