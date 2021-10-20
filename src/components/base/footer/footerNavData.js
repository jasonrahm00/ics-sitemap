import sharedLinks from '../reusableNavLinks';

const footerNavData = [
  {
    column: 1,
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
    column: 2,
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
    column: 3,
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
    column: 4,
    sections: [
      {
        sectionHeader: 'Contat',
        sectionLinks: ['Phone', 'Email']
      }
    ]
  }
];

export default footerNavData;