import { useState } from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  const [skills] = useState(data);

  return (
    <div className="skills-wrapper">
      <h3 className="sub-comp-header">Technical Skills</h3>
      <div className="skill-mapper">
        {skills.map(skill => (
          <div className="skill-wrapper">
            <span className="skill-heading">{skill.heading}:</span>
            <span className="skills-arr">{skill.skills.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
