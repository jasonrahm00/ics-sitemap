import {Card} from '../../utility/constructors';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';
import { PageTypes as Page } from '../variables';

const Brand = Brands.merit;

export const m100FlatSaws = new Card(
  'M100 Flat Saws', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M100-30H-P Flat Saw', 'M100W-10E-P Flat Saw', 'M100W-23G-P Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m100-flat-saws' //Breadcrumbs
);

export const m250FlatSaws = new Card(
  'M250 Flat Saws', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M250-30H-SP Flat Saw','M250-23G-SP Flat Saw','M250-10E-SP Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m250-flat-saws' //Breadcrumbs
);

export const m350FlatSaws = new Card(
  'M350 Flat Saws', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M350-38G Flat Saw', 'M350-20E Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m350-flat-saws' //Breadcrumbs //Verified
);

export const m400FlatSaws = new Card(
  'M400 Flat Saws', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M400-30E Flat Saw', 'M400-50G Flat Saw','M400SS-50G Flat Saw', 'M400SS-30E Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m400-flat-saws' //Breadcrumbs //Verified
);

export const m600FlatSaws = new Card(
  'M400 Flat Saws', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M600EX-61G Flat Saw', 'M600EX-61G Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m600-flat-saws' //Breadcrumbs //Verified
);

export const m800FlatSaws = new Card(
  'M800EX-87G Flat Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['M800EX-87G Flat Saw'], //Product List
  false //Verified
);

export const meritPowerPack = new Card(
  'M300-23G-HPP Power Pack', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['M300-23G-HPP Power Pack'], //Product List
  false //Verified
);

export const waterPump = new Card(
  'Merit Water Pump', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Merit Water Pump'], //Product List
  false //Verified
);

export const lightKit = new Card(
  'Merit Light Kit', //Header
  Brand, //subhedaer
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
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