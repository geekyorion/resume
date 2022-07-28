import { useState } from 'react';
import './Consent.css';

const Consent = ({ data }) => {
  const [consentState] = useState(data);

  const createLink = (text, link, mail) => {
    return `<a href="${mail ? 'mailto:' : ''}${link}" target="${mail ? '' : '_blank'}">${text}</a>`;
  }

  const replaceTargetsWithLinks = (html) => {
    const { links } = consentState.content;
    
    html.match(/{{\d}}/g).forEach(match => {
      const linkMatch = links.filter(link => link.target === match)[0];
      const link = createLink(linkMatch.text, linkMatch.link, linkMatch.mail);
      html = html.replace(match, link);
    });

    return html;
  }

  const createPara = (text) => {
    let paragraphs = '';
    for (let i = 0; i < text.length; i++) {
      paragraphs += `<p className="consent-para-${i + 1}">${text[i]}</p>`
      paragraphs = replaceTargetsWithLinks(paragraphs);
    }
    return paragraphs;
  }

  const getConsentHTML = () => {
    let innerHTML = '';
    if (consentState) {
      const { text } = consentState.content;
      innerHTML += createPara(text);
    }
    return innerHTML;
  }

  return (
    <div className="consent-wrapper">
      <hr className="top-hr" />
      <div className="consent-content" dangerouslySetInnerHTML={{ __html: getConsentHTML() }}></div>
    </div>
  )
}

export default Consent;
