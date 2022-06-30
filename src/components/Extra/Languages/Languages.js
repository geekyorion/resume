import { useState } from 'react';
import './Languages.css';

const Languages = ({ data }) => {
  const [languagesData] = useState(data);
  
  return (
    <div className="languages-wrapper">
      <h3 className="sub-comp-header">Languages</h3>
      <ul className="languages">
        {languagesData.map((language, index) => (
          <li className="language" key={`ach-${index}`}>
            <div className="language-detail">
              <div className="language-name">{language.language}</div>
              <div className="language-info">[{language.info}]</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
