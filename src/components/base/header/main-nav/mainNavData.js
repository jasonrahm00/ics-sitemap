import {Link} from 'react-router-dom';

import sharedLinks from '../../reusableNavLinks';

const mainNavData = [
  {
    topLevelLink: {
      anchorText: 'Shop by Brand',
      targetUrl: null
    },
    submenuLinks: [
      sharedLinks.icsBrandLink, 
      sharedLinks.meritBrandLink, 
      sharedLinks.pentruderBrandLink
    ]
  },
  {
    topLevelLink: {
      anchorText: 'Shop by Use',
      targetUrl: null
    },
    submenuLinks: []
  },
  {
    topLevelLink: {
      anchorText: 'Shop by Type',
      targetUrl: null
    },
    submenuLinks: [
      sharedLinks.powerCutters,
      sharedLinks.flatSaws,
      sharedLinks.wallWireSaws,
      sharedLinks.diamondChains,
      sharedLinks.partsAccessories
    ]
  },
  {
    topLevelLink: {
      anchorText: 'Customer Support',
      targetUrl: '/'
    },
    submenuLinks: []
  },
  {
    topLevelLink: {
      anchorText: 'Success Stories',
      targetUrl: '/'
    },
    submenuLinks: []
  }
];

export default mainNavData;