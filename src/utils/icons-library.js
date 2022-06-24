import {
  MdEmail,
  MdPhone,
  MdLocationOn
} from 'react-icons/md';

import {
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaNpm,
  FaTerminal
} from 'react-icons/fa';

import {
  BsMedium,
  BsTwitter
} from 'react-icons/bs';

const HEADER_CONTACT_ICONS = {
  email: <MdEmail />,
  phone: <MdPhone />,
  website: <FaGlobe />,
  address: <MdLocationOn />
};

const HEADER_LINKS_ICONS = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  hackerrank: <FaHackerrank />,
  medium: <BsMedium />,
  npm: <FaNpm />,
  terminal: <FaTerminal />,
  twitter: <BsTwitter />
};

export {
  HEADER_CONTACT_ICONS,
  HEADER_LINKS_ICONS
};
