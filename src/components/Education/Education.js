import { useState } from 'react';
import { getDateFormat } from '../../utils/dates';
import './Education.css';

const Education = ({ data }) => {
  const [educationState] = useState(data);

  return (
    <div className="education-wrapper">
      <h3 className="education-header-text">Education</h3>
      {educationState.filter(edu => !edu.isHidden).map((education, index) => (
        <div className="education" key={`edu-${index}`}>
          <div className="education-basic-info">
            <div className="education-type">{education.degree || education.type}</div>
            <div className="education-period">
              {education.isGraduation
                ? (
                  <>
                    {getDateFormat(education.duration.from, 'YYYY')}
                    {' - '}
                    {education.duration.to === 'present'
                      ? 'Present'
                      : getDateFormat(education.duration.to, 'YYYY')
                    }
                  </>
                ) : education.duration.range ? (
                  <>
                    {getDateFormat(education.duration.from, 'YYYY')}
                    {' - '}
                    {education.duration.to === 'present'
                      ? 'Present'
                      : getDateFormat(education.duration.to, 'YYYY')
                    }
                  </>
                ) : getDateFormat(education.duration.to, 'YYYY')
              }
            </div>
          </div>
          <div className="name-and-score">
            <div className="institute-name">{ education.school }</div>
            <div className="education-score">[ { education.score } ]</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
