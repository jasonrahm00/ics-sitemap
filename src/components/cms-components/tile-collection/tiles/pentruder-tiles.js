import { Tile } from '../../../../utility/constructors';
import { Brands } from '../../../../utility/variables';
import { 
  PageTypes as Page
} from '../../../../utility/variables';

const Brand = Brands.pentruder;

export const threePEightWireSaw = new Tile(
  '3P8 HF Wire Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['3P8 HF Wire Saw'], //Product List
  true //Verified
);

export const hfChainSaw = new Tile(
  'CW630 HF Electric Chain Saw', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['CW630 HF Electric Chain Saw'], //Product List
  true //Verified
);

export const pentruderPowerPack = new Tile(
  'Pentpak 427 HF Power Pack', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentpak 427 HF Power Pack'], //Product List
  false //Verified
);

export const remoteControl = new Tile(
  'Pentruder Remote Controls', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Remote Controls'], //Product List
  false //Verified
);

export const track = new Tile(
  'Pentruder Track', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Track'], //Product List
  false //Verified
);

export const trackFeet = new Tile(
  'Pentruder Track Feet', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Track Feet'], //Product List
  false //Verified
);

export const bladeGuards = new Tile(
  'Pentruder Blade Guards', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Blade Guards'], //Product List
  false //Verified
);

export const cables = new Tile(
  'Pentruder Cables', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Cables'], //Product List
  false //Verified
);

export const bladeFlanges = new Tile(
  'Pentruder Blade Flanges', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pentruder Blade Flanges'], //Product List
  false //Verified
);

export const wallSaws = new Tile(
  'Wall Saws',
  Brand,
  null,
  '',
  '/products/wall-saws',
  Page.plp,
  [],
  true,
);

export const allPentruderPars = new Tile(
  'Pentruder Parts and Accessories',
  Brand,
  null,
  '',
  '/products/pentruder/parts',
  Page.plp,
  [],
  true,
)

export const PentruderWallSaws = [wallSaws];
export const PentruderWireSaws = [threePEightWireSaw];
export const PentruderChainSaws = [hfChainSaw];
export const PentruderParts = [allPentruderPars];