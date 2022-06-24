import { useState } from 'react';
import { getDateFormat } from '../../utils/dates';
import './Experience.css';

const Experinece = ({ data }) => {

  const [expState] = useState(data);
  
  return (
    <div className="experience-wrapper">
      <h3 className="experience-header-text">Work Experience</h3>
      {expState.map((exp, index) => (
        <div className="experience" key={`exp-${index}`}>
          <p className="company-name">{exp.company}</p>
          <div className="exp-info">
            <p className="exp-duration">
              {getDateFormat(exp.duration.from, 'MMM, YYYY')}
              {' - '}
              {exp.duration.to === 'present'
                ? 'Present'
                : getDateFormat(exp.duration.to, 'MMM, YYYY')
              }
            </p>
            <p>{exp.location}</p>
          </div>
          
          {exp.work.map((work, workIndex) => (
            <div className="work-wrapper" key={`exp-${index}-work-${workIndex}`}>
              <div className="work-info">
                <p className="work-role">{work.role}</p>
                <p className="exp-duration">
                  {getDateFormat(work.duration.from, 'MMM, YYYY')}
                  {' - '}
                  {work.duration.to === 'present'
                    ? 'Present'
                    : getDateFormat(work.duration.to, 'MMM, YYYY')
                  }
                </p>
              </div>
              {work.showDescription && (
                <ul className="work-desc">
                  {work.description.map((desc, descIndex) => (
                    <li className="desc" key={`desc-${index}-${workIndex}-${descIndex}}`}>
                      { desc }
                    </li>
                  ))}
                </ul>
              )}
              <div className="projects">
                <ul className="project-list">
                  {work.projects.map((project, projectIndex) => (
                    <li className="project" key={`project-${project.name}-${projectIndex}`}>
                      <div className="project-name">{project.name}</div>
                      <div className="project-technologies">
                        <div className="project-technologies-label">Technologies Used: </div>
                        <div className="project-technologies-values">
                          {project.technologies.join(', ')}
                        </div>
                      </div>
                      <ul className="responsibilties">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li className="project-responsibilty" key={`project-${project.name}-${projectIndex}-${respIndex}`}>
                            { resp }
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experinece;
