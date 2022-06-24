import { useState } from 'react';
import './Interests.css';

const Interests = ({ data }) => {
  const [interestsState] = useState(data);
  
  return (
    <div className="interests-wrapper">
      <h3 className="sub-comp-header">Interests</h3>
      <div className="interests">
        {interestsState.join(', ')}
      </div>
    </div>
  );
};

export default Interests;
