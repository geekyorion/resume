import { useState } from 'react';
import { getDateFormat } from '../../../utils/dates';
import './Certifications.css';

const Certifications = ({ data }) => {
  const [certState] = useState(data);
  
  return (
    <div className="certification-wrapper">
      <h3 className="sub-comp-header">Certifications</h3>
      <ul className="certificates">
        {certState.map((certificate, index) => (
          <li className="certificate" key={`cert-${index}`}>
            <div className="certificate-name">{certificate.name}</div>
            <div className="certificate-basic-info">
              <div className="certificate-org">{certificate.org}</div>
              <div className="certificate-issued-on">
                {getDateFormat(
                  certificate.valid.from,
                  certificate.valid.showCurrent ? 'YYYY' : 'MMM, YYYY'
                )}
                {certificate.valid.showCurrent && (
                  <>
                    {' - '}
                    {getDateFormat(new Date().toLocaleDateString(), 'YYYY')}
                  </>
                )}
              </div>
            </div>
            {certificate.link && (
              <div className="certificate-link">
                [<a href={certificate.link} target="_blank" rel="noopener noreferrer">&nbsp;{certificate.link}&nbsp;</a>]
              </div>
            )}
            {certificate.containsSub && certificate.shouldShowSubs && (
              <ul className="sub-certificates">
                {certificate.subs.map((subCert, subIndex) => (
                  <li className="sub-cert" key={`cert-${index}-sub-${subIndex}`}>
                    <div className="sub-cert-name">{subCert.name}</div> 
                    <div className="sub-cert-info">
                      {subCert.link && (
                        <div className="certificate-link">
                          [<a href={subCert.link} target="_blank" rel="noopener noreferrer">&nbsp;{subCert.link}&nbsp;</a>]
                        </div>
                      )}
                      <div className="certificate-issued-on">
                        {getDateFormat(subCert.issuedOn, 'MMM DD, YYYY')}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
