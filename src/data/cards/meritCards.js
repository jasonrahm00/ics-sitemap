import {Card} from '../../utility/constructors';
import { Brands } from '../../utility/variables';
import { PageTypes as Page } from '../../utility/variables';
import MeritProducts from '../products/meritProducts';

const Brand = Brands.merit;

const FlatSaws = MeritProducts.filter(product => product.primaryCat === 'Flat Saws');
console.log(FlatSaws);

export const flatSaws = new Card (
  'Flat Saws',
  Brand,
  null,
  'Power source, weight and dimensions are the only real differences. All of which can be exposed through facet filters',
  '/plp',
  Page.plp,
  FlatSaws.map(product => product.name),
  true,
  '/products/flat-saws'
);

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
  'Need to expose difference between M400 and M400SS in the filters (different sizes). Important because of moving saw in the cutting space SS = short saw', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['M400-30E Flat Saw', 'M400-50G Flat Saw','M400SS-50G Flat Saw', 'M400SS-30E Flat Saw'], //Product List
  false, //Verified
  '/products/merit/m400-flat-saws' //Breadcrumbs //Verified
);

export const m600FlatSaws = new Card(
  'M600 Flat Saws', //Header
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
  true //Verified
);

export const waterPump = new Card(
  'Merit Water Pump', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Merit Water Pump'], //Product List
  true //Verified
);

export const lightKit = new Card(
  'Merit Light Kit', //Header
  Brand, //subhedaer
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Merit Light Kit'], //Product List
  true //Verified
);

export const MeritFlatSaws = [
  flatSaws
];

export const MeritParts = [
  meritPowerPack,
  waterPump,
  lightKit
];