import Card from './cardConstructor';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';

const Brand = Brands.pentruder;

export const cbkSaw = new Card(
  Brand,
  Type.wall,
  '', //Use
  'CBK HF Wall Saw', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['CBK HF Wall Saw'], //Product List
  false //Verified
);

export const eightTwentyWallSaw = new Card(
  Brand,
  Type.wall,
  '', //Use
  '8-20 HF Wall Saw', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['8-20 HF Wall Saw'], //Product List
  false //Verified
);

export const threePEightWireSaw = new Card(
  Brand,
  Type.wall,
  '', //Use
  '3P8 HF Wire Saw', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['3P8 HF Wire Saw'], //Product List
  false //Verified
);

export const hfCainSaw = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  'CW630 HF Chain Saw', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['CW630 HF Chain Saw'], //Product List
  false //Verified
);

export const powerPack = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Pentpak 427 HF Power Pack', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentpak 427 HF Power Pack'], //Product List
  false //Verified
);

export const remoteControl = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Pentruder Remote Controls', //Header
  'Product Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['Pentruder Remote Controls'], //Product List
  false //Verified
);

export const PentruderWallSaws = [cbkSaw, eightTwentyWallSaw];
export const PentruderWireSaws = [threePEightWireSaw];
export const PentruderChainSaws = [hfCainSaw];
export const PentruderParts = [powerPack, remoteControl];