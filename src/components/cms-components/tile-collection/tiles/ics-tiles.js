import { Tile } from '../../../../utility/constructors';
import { Brands } from '../../../../utility/variables';
import { PageTypes as Page } from '../../../../utility/variables';

const Brand = Brands.ics;

export const pneumaticSaws = new Tile(
  'Pneumatic Power Cutter', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', // ctaUrl
  Page.pdp, //ctaText
  ['701A Pneumatic Power Cutter'], //Product List
  true //Verified
);

export const gasSaws = new Tile(
  'Gas Power Saws', //Header
  Brand, //subheder
  null, //image
  '680 vs 695, different power requirements changes chain needs. Discuss what the difference is between the two saws and why you would want one over the other. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/products/ics/gas-power-saws', //Link
  Page.categoryContent, //ctaText
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
  true, //Verified
);

export const hydraulicSaws = new Tile(
  'Hydraulic Power Saws', //Header
  Brand, //subheader
  null, //image
  'Need to dilineate flush cut versus regular cut. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/products/ics/hydraulic-saws', //Link
  Page.categoryContent, //ctaText
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
  true, //Verified
);

export const forceThree = new Tile(
  'FORCE3 Series Diamond Chains', //Header
  Brand, //subheader
  null, //image
  'Go to PLP, Add attribute for cuttinig surface to eliminate need for "abrasion type" content page explanation', //Description
  '/products/ics/force-3-diamond-chains', //Link
  Page.plp, //ctaText
  [], //Product List
  true, //Verified
);

export const forceFour = new Tile(
  'FORCE4 Series Chains', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/products/ics/force-4-diamond-chains', //Link
  Page.plp, //ctaText
  [], //Product List
  true, //Verified
);

export const powerGrit = new Tile(
  'PowerGrit Pipe Cutting Chains', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/products/ics/power-grit', //Link
  Page.plp, //ctaText
  [], //Product List
  true, //Verified
);

export const pipeClamp = new Tile(
  'Pipe Clamp', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pipe Clamp'], //Product List
  true //Verified
);

export const hydraulicHose = new Tile(
  'Hydraulic Hoses', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Hydraulic Hoses'], //Product List
  true, //Verified
);

export const flowAdapter = new Tile(
  'Flow Adapter', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Flow Adapter'], //Product List
  true //Verified
);

export const engineOil = new Tile(
  '2-Stroke Engine Oil', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['2-Stroke Engine Oil'], //Product List
  true //Verified
);

export const powerPack = new Tile(
  'Powerpack', //Header
  Brand, //subheader
  null, //image
  'Two Power Packs, needs to go to PLP', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['Powerpack', 'Power Pack 2'], //Product List
  true //Verified
);

export const wires = new Tile(
  'Diamond Wire & Accessories', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/products/ics/diamond-wires', //Link
  Page.plp, //ctaText
  [], //Product List
  true, //Verified
);

export const carryBags = new Tile(
  'ICS Carrying Bags', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/products/ics/carrying-bags', //Link
  Page.plp, //ctaText
  [], //Product List
  true, //Verified
);

export const ICSSaws = [
  pneumaticSaws,
  gasSaws,
  hydraulicSaws
];

export const ICSChains = [
  forceThree,
  forceFour,
  powerGrit
];

export const ICSParts = [
  pipeClamp,
  hydraulicHose,
  flowAdapter,
  engineOil,
  powerPack,
  wires,
  carryBags
];
