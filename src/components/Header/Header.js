import { useState } from 'react';

const Header = ({ data }) => {
  const [headerState] = useState(data);

  return (
    <div className="header-section">
      <div className="main-info">
        <div className="bio-wrapper">
          <div className="name-text">{ headerState.name }</div>
          <div className="role-text">{ headerState.role }</div>
          <div className="bio-text">{ headerState.bio }</div>
        </div>

        {headerState.image?.showImage && (
          <div className="image-wrapper">
            <img src={headerState.image.url} alt={`profile of ${headerState.name}`} className="profile-picture" />
          </div>
        )}

        <div className="contacts-wrapper">
          {headerState.contact.filter(contact => !contact.isHidden).map(contact => (
            <div className="contact">
              <div className="contact-icon">{ contact.icon }</div>
              <div className="contact-text">
                {contact.type === 'email' ? (
                  <a className="email-text" href={`mailto:${contact.value}`} rel="noreferrer noopener">{ contact.value }</a>
                ) : contact.type === 'phone' ? (
                  <a className="phone-text" href={`tel:${contact.value.replace(/\s+/g, '')}`} rel="noreferrer noopener">{ contact.value }</a>
                ) : (
                  <p classname="other-contact-text">{ contact.value }</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="links-wrapper">
          {headerState.links.filter(link => !link.isHidden).map(link => (
            <div className="link">
              <div className="link-icon">{ link.icon }</div>
              <div className="link-text">
                <a href={link.value} target="_blank" rel="noreferrer noopener">{ link.type }</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
