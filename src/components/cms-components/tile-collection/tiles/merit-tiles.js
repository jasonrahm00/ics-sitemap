import {Tile} from '../../../../utility/constructors';
import { Brands } from '../../../../utility/variables';
import { PageTypes as Page } from '../../../../utility/variables';

const Brand = Brands.merit;

export const flatSaws = new Tile (
  'Flat Saws',
  Brand,
  null,
  'Power source, weight and dimensions are the only real differences. All of which can be exposed through facet filters',
  '/products/flat-saws',
  Page.plp,
  [],
  true,
);

export const meritPowerPack = new Tile(
  'M300-23G-HPP Power Pack', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['M300-23G-HPP Power Pack'], //Product List
  true //Verified
);

export const waterPump = new Tile(
  'Merit Water Pump', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Merit Water Pump'], //Product List
  true //Verified
);

export const lightKit = new Tile(
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