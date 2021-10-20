import {Link} from 'react-router-dom';

import sharedLinks from '../../../data/reusableNavLinks';

const CareersLink = () => {
  return (
    <a href="https://www.oregontool.com/careers/">Careers</a>
  )
};

const footerNavData = [
  {
    sections: [
      {
        sectionHeader: 'products',
        sectionLinks: [
          sharedLinks.icsBrandLink, 
          sharedLinks.meritBrandLink, 
          sharedLinks.pentruderBrandLink,
          sharedLinks.powerCutters,
          sharedLinks.flatSaws,
          sharedLinks.wallWireSaws,
          sharedLinks.diamondChains,
          sharedLinks.partsAccessories
        ]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'About',
        sectionLinks: [sharedLinks.aboutICS, <CareersLink />]
      },
      {
        sectionHeader: 'Where to Buy',
        sectionLinks: [sharedLinks.findDealer]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Resources',
        sectionLinks: [
          sharedLinks.contactUs, 
          sharedLinks.productRegistration, 
          sharedLinks.proCorner, 
          sharedLinks.docLibrary
        ]
      },
      {
        sectionHeader: 'Follow Us',
        sectionLinks: ['Facebook', 'YouTube', 'Instagram', 'LinkedIn']
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Contact',
        sectionLinks: ['Phone', 'Email']
      }
    ]
  }
];

export default footerNavData;