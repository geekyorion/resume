import { useState } from 'react';
import './Achievements.css';

const Achievements = ({ data }) => {
  const [achievementsData] = useState(data);
  
  return (
    <div className="achievements-wrapper">
      <h3 className="sub-comp-header">Achievements</h3>
      <ul className="achievements">
        {achievementsData.map((achievement, index) => (
          <li className="achievement" key={`ach-${index}`}>
            <div className="achievement-detail">{achievement}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
