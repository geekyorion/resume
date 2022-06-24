import { useState } from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  const [skills] = useState(data);

  return (
    <div className="skills-wrapper">
      <h3 className="sub-comp-header">Skills</h3>
      <div className="skills-scales">
        {new Array(5).fill(null).map((_, index) => (
          <div className="skills-scale" key={`scale-${index}`}></div>
        ))}
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill" key={`skill-${index}`}>
            <div className="skill-desc">
              <div className="skill-label">{skill.technologies.join(', ')}</div>
              <div className="skill-info">{skill.info}</div>
            </div>
            <div className="skill-meter">
              <div className="skill-width" style={{ width: `${(skill.rating / 5) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
