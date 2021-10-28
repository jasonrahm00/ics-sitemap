import { Card } from '../../utility/constructors';
import { Brands } from '../../utility/variables';
import { 
  PageTypes as Page, 
  PentruderWallSawsList,
  PentruderPartList 
} from '../../utility/variables';

const Brand = Brands.pentruder;

export const cbkSaw = new Card(
  'CBK HF Wall Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['CBK HF Wall Saw'], //Product List
  false //Verified
);

export const eightTwentyWallSaw = new Card(
  '8-20 HF Wall Saw', //Header
  Brand, //subhedaer
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['8-20 HF Wall Saw'], //Product List
  false //Verified
);

export const threePEightWireSaw = new Card(
  '3P8 HF Wire Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['3P8 HF Wire Saw'], //Product List
  false //Verified
);

export const hfChainSaw = new Card(
  'CW630 HF Electric Chain Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['CW630 HF Electric Chain Saw'], //Product List
  true //Verified
);

export const pentruderPowerPack = new Card(
  'Pentpak 427 HF Power Pack', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentpak 427 HF Power Pack'], //Product List
  false //Verified
);

export const remoteControl = new Card(
  'Pentruder Remote Controls', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Remote Controls'], //Product List
  false //Verified
);

export const track = new Card(
  'Pentruder Track', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Track'], //Product List
  false //Verified
);

export const trackFeet = new Card(
  'Pentruder Track Feet', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Track Feet'], //Product List
  false //Verified
);

export const bladeGuards = new Card(
  'Pentruder Blade Guards', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Blade Guards'], //Product List
  false //Verified
);

export const cables = new Card(
  'Pentruder Cables', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Cables'], //Product List
  false //Verified
);

export const bladeFlanges = new Card(
  'Pentruder Blade Flanges', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Blade Flanges'], //Product List
  false //Verified
);

export const wallSaws = new Card (
  'Wall Saws',
  Brand,
  null,
  '',
  '/plp',
  Page.plp,
  PentruderWallSawsList,
  true,
  '/products/wall-saws'
);

export const allPentruderPars = new Card (
  'Pentruder Parts and Accessories',
  Brand,
  null,
  '',
  '/plp',
  Page.plp,
  PentruderPartList,
  true,
  '/products/pentruder/parts'
)

export const PentruderWallSaws = [wallSaws];
export const PentruderWireSaws = [threePEightWireSaw];
export const PentruderChainSaws = [hfChainSaw];
export const PentruderParts = [allPentruderPars];