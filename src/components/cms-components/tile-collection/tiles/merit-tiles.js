import {Tile} from '../../../../utility/constructors';

export const flatSaws = new Tile (
  'Flat Saws',
  null,
  null,
  'Power source, weight and dimensions are the only real differences. All of which can be exposed through facet filters',
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