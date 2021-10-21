import {Card} from '../../utility/constructors';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';
import { PageTypes as Page } from '../variables';

const Brand = Brands.pentruder;

export const cbkSaw = new Card(
  Brand,
  Type.wall,
  'CBK HF Wall Saw', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['CBK HF Wall Saw'], //Product List
  false //Verified
);

export const eightTwentyWallSaw = new Card(
  Brand,
  Type.wall,
  '8-20 HF Wall Saw', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['8-20 HF Wall Saw'], //Product List
  false //Verified
);

export const threePEightWireSaw = new Card(
  Brand,
  Type.wall,
  '3P8 HF Wire Saw', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['3P8 HF Wire Saw'], //Product List
  false //Verified
);

export const hfChainSaw = new Card(
  Brand,
  Type.powerCut,
  'CW630 HF Electric Chain Saw', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['CW630 HF Electric Chain Saw'], //Product List
  false //Verified
);

export const pentruderPowerPack = new Card(
  Brand,
  Type.parts,
  'Pentpak 427 HF Power Pack', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentpak 427 HF Power Pack'], //Product List
  false //Verified
);

export const remoteControl = new Card(
  Brand,
  Type.parts,
  'Pentruder Remote Controls', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Remote Controls'], //Product List
  false //Verified
);

export const track = new Card(
  Brand,
  Type.parts,
  'Pentruder Track', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Track'], //Product List
  false //Verified
);

export const trackFeet = new Card(
  Brand,
  Type.parts,
  'Pentruder Track Feet', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Track Feet'], //Product List
  false //Verified
);

export const bladeGuards = new Card(
  Brand,
  Type.parts,
  'Pentruder Blade Guards', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Blade Guards'], //Product List
  false //Verified
);

export const cables = new Card(
  Brand,
  Type.parts,
  'Pentruder Cables', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Cables'], //Product List
  false //Verified
);

export const bladeFlanges = new Card(
  Brand,
  Type.parts,
  'Pentruder Blade Flanges', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Blade Flanges'], //Product List
  false //Verified
);

export const PentruderWallSaws = [cbkSaw, eightTwentyWallSaw];
export const PentruderWireSaws = [threePEightWireSaw];
export const PentruderChainSaws = [hfChainSaw];
export const PentruderParts = [
  pentruderPowerPack, 
  remoteControl,
  track,
  trackFeet,
  bladeFlanges,
  bladeGuards,
  cables
];