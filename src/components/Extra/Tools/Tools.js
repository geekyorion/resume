import { useState } from 'react';
import './Tools.css';

const Tools = ({ data }) => {
  const [toolState] = useState(data);
  
  return (
    <div className="tool-wrapper">
      <h3 className="sub-comp-header">Software &amp; Tools</h3>
      <div className="tools">
        {toolState.join(', ')}
      </div>
    </div>
  );
};

export default Tools;
