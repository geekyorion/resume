import { useState } from 'react';
import { calculateDiff } from '../../utils/dates';
import { HEADER_CONTACT_ICONS, HEADER_LINKS_ICONS} from '../../utils/icons-library';
import Badges from './Badges/Badges';
import './Header.css';

const Header = ({ data }) => {
  const [headerState] = useState(data);

  // fetch the current profile picture name [user can save more than one]
  const headerImage = headerState.image?.showImage
    ? require(`../../assets/images/${headerState.image.imageName}`)
    : '';

  const getBio = (bio, experienceDates) => {
    return bio.replace(
      experienceDates.replacer,
      calculateDiff(experienceDates.startDate)
    );
  }

  return (
    <div className="header-section">
      <div className="main-info">
        <div className="bio-and-image">
          <div className="bio-wrapper">
            <div className="name-text">{ headerState.name }</div>
            <div className="role-text">{ headerState.role }</div>
            {headerState.isBioVisible && (<div className="bio-text">
              { getBio(headerState.bio, headerState.overallExperience) }
            </div>)}
          </div>
          {headerState.image?.showImage && (
            <div className="image-wrapper">
              <img src={headerImage} alt={`profile of ${headerState.name}`} className="profile-picture" />
            </div>
          )}
        </div>
        
        <div className="all-links">
          <div className="contacts-wrapper">
            {headerState.contact.filter(contact => !contact.isHidden).map(contact => (
              <div className="contact" key={`contact-${contact.type}`}>
                <div className={`contact-icon ${contact.iconClass ?? ''}`}>{ HEADER_CONTACT_ICONS[contact.icon] }</div>
                <div className="contact-text">
                  {contact.type === 'email' ? (
                    <a className="email-text" href={`mailto:${contact.value}`} rel="noreferrer noopener">{ contact.value }</a>
                  ) : contact.type === 'phone' ? (
                    <a className="phone-text" href={`tel:${contact.value.replace(/\s+/g, '')}`} rel="noreferrer noopener">{ contact.value }</a>
                  ) : contact.type === 'website' ? (
                    <a className="website-text" href={contact.link} rel="noreferrer noopener">{ contact.value }</a>
                  ) : (
                    <p className="other-contact-text">{ contact.value }</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="link-hr" />
          
          <div className="links-wrapper all-links-wrapper">
            {headerState.links.filter(link => !link.isHidden).map(link => (
              <div className="link" key={`link-${link.type}`}>
                <div className={`link-icon ${link.iconClass ?? ''}`}>{ HEADER_LINKS_ICONS[link.icon] }</div>
                <div className="link-text">
                  <a href={link.value} target="_blank" rel="noreferrer noopener">{ link.type }</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!headerState.badges.isHidden && <Badges data={headerState.badges?.badges} />}
    </div>
  );
};

export default Header;
