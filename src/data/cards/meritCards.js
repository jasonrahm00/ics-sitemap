import {Card} from '../../utility/constructors';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';
import { PageTypes as Page } from '../variables';

const Brand = Brands.merit;

export const m100FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M100 Flat Saws', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['M100-30H-P Flat Saw', 'M100W-10E-P Flat Saw', 'M100W-23G-P Flat Saw'], //Product List
  false //Verified
);

export const m250FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M250 Flat Saws', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['M250-30H-SP Flat Saw','M250-23G-SP Flat Saw','M250-10E-SP Flat Saw'], //Product List
  false //Verified
);
export const m350FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M350 Flat Saws', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['M350-38G Flat Saw', 'M350-20E Flat Saw'], //Product List
  false //Verified
);

export const m400FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M400 Flat Saws', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['M400-30E Flat Saw', 'M400-50G Flat Saw','M400SS-50G Flat Saw', 'M400SS-30E Flat Saw'], //Product List
  false //Verified
);

export const m600FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M400 Flat Saws', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['M600EX-61G Flat Saw', 'M600EX-61G Flat Saw'], //Product List
  false //Verified
);

export const m800FlatSaws = new Card(
  Brand,
  Type.flat,
  '', //Use
  'M800EX-87G Flat Saw', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['M800EX-87G Flat Saw'], //Product List
  false //Verified
);

export const meritPowerPack = new Card(
  Brand,
  Type.parts,
  '', //Use
  'M300-23G-HPP Power Pack', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['M300-23G-HPP Power Pack'], //Product List
  false //Verified
);

export const waterPump = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Merit Water Pump', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Merit Water Pump'], //Product List
  false //Verified
);

export const lightKit = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Merit Light Kit', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Merit Light Kit'], //Product List
  false //Verified
);

export const MeritFlatSaws = [
  m100FlatSaws,
  m250FlatSaws,
  m350FlatSaws,
  m400FlatSaws,
  m600FlatSaws,
  m800FlatSaws
];

export const MeritParts = [
  meritPowerPack,
  waterPump,
  lightKit
];