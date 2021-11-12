import {Tile} from '../../../../utility/constructors';

export const flatSaws = new Tile (
  'Flat Saws',
  null,
  null,
  'Our flat saws are available multiple configurations and power sources to fit your job requirements. Hand crafted, machined, assembled, and fully welded with high grade steel in the USA.',
  '/products/flat-saws',
  'Flat Saws',
  [],
);

export const meritPowerPack = new Tile(
  'M300-23G-HPP Power Pack', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Power Pack', //ctaText
  ['M300-23G-HPP Power Pack'], //Product List
);

export const waterPump = new Tile(
  'Merit Water Pump', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Merit Water Pump', //ctaText
  ['Merit Water Pump'], //Product List
);

export const lightKit = new Tile(
  'Merit Light Kit', //Header
  null, //subhedaer
  null, //image
  '', //Description
  '/pdp', //Link
  'Merit Light Kit', //ctaText
  ['Merit Light Kit'], //Product List
);

export const MeritFlatSaws = [
  flatSaws
];

export const MeritParts = [
  meritPowerPack,
  waterPump,
  lightKit
];