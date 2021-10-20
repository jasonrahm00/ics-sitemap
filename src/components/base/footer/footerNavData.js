import sharedLinks from '../reusableNavLinks';

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
        sectionLinks: ['About ICS', 'Careers']
      },
      {
        sectionHeader: 'Where to Buy',
        sectionLinks: ['Find a Dealer']
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Resources',
        sectionLinks: ['Contact Us', 'Product Registration', 'Pro Corner', 'Document Library']
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