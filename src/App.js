import { useState } from 'react';

import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Extra from './components/Extra/Extra';

import userData from './data/data.json';
import './App.css';
import Consent from './components/Consent/Consent';

const App = () => {
  const [state] = useState(userData);
  const { header, experience, education, projects, others, footer, consent } = state;

  return (
    <div className="wrapper size-A4">
      <div className="_header">
        <Header data={header} />
      </div>

      <div className="sections">
        <div className="left-section">
          <div className="_experience">
            <Experience data={experience} />
          </div>
          <div className="_education">
            <Education data={education} />
          </div>
        </div>
        
        <div className="right-section">
          {projects && Array.isArray(projects) && projects.length > 0 && <div className="_projects">
            <Projects data={projects} />
          </div>}
          <div className="_extras">
            <Extra data={others} />
          </div>
        </div>
      </div>

      {!consent.isHidden && <Consent data={consent} />}

      {!footer.isHidden && (<div className="footer">
        { footer.info }
        {' - '}
        <span className="footer-link">
          [<a href={footer.link} target="_blank" rel="noopener noreferrer">&nbsp;{footer.link}&nbsp;</a>]
        </span>
      </div>)}
    </div>
  );
}

export default App;
