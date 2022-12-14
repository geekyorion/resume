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

/*
<div className="skills-wrapper">
  <h3 className="sub-comp-header">Technical Skills</h3>
  <div>
    {skills.map(skill => (
      <div className="skill-wrapper">
        <span className="skill-heading">{skill.heading}:</span>
        <span className="skills-arr">{skill.skills.join(', ')}</span>
      </div>
    ))}
  </div>
</div>
*/

/*
{
  "skills": [
    {
      "heading": "Front-end Development",
      "skills": ["React", "Angular", "JavaScript", "CSS3", "HTML5", "Bootstrap"]
    },
    {
      "heading": "Back-end Development",
      "skills": ["Express", "NodeJS"]
    },
    {
      "heading": "Database",
      "skills": ["Oracle SQL", "MongoDB"]
    },
    {
      "heading": "Tools & Languages",
      "skills": ["Python", "C", "Git", "Matlab", "BitBucket"]
    }
  ]
}
*/
