import SharedLinks from '../../reusable-nav-links';

const mainNavData = [
  {
    topLevelLink: {
      anchorText: 'Shop by Brand',
      targetUrl: null
    },
    submenuLinks: [
      SharedLinks.icsBrandLink, 
      SharedLinks.meritBrandLink, 
      SharedLinks.pentruderBrandLink
    ]
  },
  {
    topLevelLink: {
      anchorText: 'Shop by Type',
      targetUrl: null
    },
    submenuLinks: [
      SharedLinks.allProducts,
      SharedLinks.powerCutters,
      SharedLinks.flatSaws,
      SharedLinks.wallWireSaws,
      SharedLinks.diamondChains,
      SharedLinks.partsAccessories
    ]
  },
  {
    topLevelLink: {
      anchorText: 'Shop by Use',
      targetUrl: null
    },
    submenuLinks: [
      SharedLinks.concreteCutting, 
      SharedLinks.pipeCutting, 
      SharedLinks.steelCutting,
      SharedLinks.powerSupply
    ]
  },
  {
    topLevelLink: {
      anchorText: 'Customer Support',
      targetUrl: null
    },
    submenuLinks: [
      SharedLinks.contactUs,
      SharedLinks.findDealer,
      SharedLinks.productRegistration,
      SharedLinks.docLibrary,
      SharedLinks.proCorner,
      SharedLinks.demoRequest
    ]
  },
  {
    topLevelLink: {
      anchorText: 'News and Features',
      targetUrl: '/news-features'
    },
    submenuLinks: []
  }
];

export default mainNavData;