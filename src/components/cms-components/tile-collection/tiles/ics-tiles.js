import { Tile } from '../../../../utility/constructors';

export const pneumaticSaws = new Tile(
  'Pneumatic Power Cutter', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', // ctaUrl
  'Pneumatic Power Cutter', //ctaText
  ['701A Pneumatic Power Cutter'], //Product List
  true //Verified
);

export const gasSaws = new Tile(
  'Gas Power Cutters', //Header
  null, //subheder
  null, //image
  '680 vs 695, different power requirements changes chain needs. Discuss what the difference is between the two saws and why you would want one over the other. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/products/ics/gas-power-cutters', //Link
  'Gas Power Cutters', //ctaText
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
  true, //Verified
);

export const hydraulicSaws = new Tile(
  'Hydraulic Power Cutters', //Header
  null, //subheader
  null, //image
  'Need to dilineate flush cut versus regular cut. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/products/ics/hydraulic-power-cutters', //Link
  'Hydraulic Power Cutters', //ctaText
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
  true, //Verified
);

export const forceThree = new Tile(
  'FORCE3 Series Diamond Chains', //Header
  null, //subheader
  null, //image
  'Go to PLP, Add attribute for cuttinig surface to eliminate need for "abrasion type" content page explanation', //Description
  '/products/ics/force-3-diamond-chains', //Link
  'FORCE3 Series Diamond Chains', //ctaText
  [], //Product List
  true, //Verified
);

export const forceFour = new Tile(
  'FORCE4 Series Chains', //Header
  null, //subheader
  null, //image
  '', //Description
  '/products/ics/force-4-diamond-chains', //Link
  'FORCE4 Series Chains', //ctaText
  [], //Product List
  true, //Verified
);

export const powerGrit = new Tile(
  'PowerGrit Pipe Cutting Chains', //Header
  null, //subheader
  null, //image
  '', //Description
  '/products/ics/power-grit', //Link
  'PowerGrit Pipe Cutting Chains', //ctaText
  [], //Product List
  true, //Verified
);

export const pipeClamp = new Tile(
  'Pipe Clamp', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pipe Clamp', //ctaText
  ['Pipe Clamp'], //Product List
  true //Verified
);

export const hydraulicHose = new Tile(
  'Hydraulic Hoses', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Hydraulic Hoses', //ctaText
  ['Hydraulic Hoses'], //Product List
  true, //Verified
);

export const flowAdapter = new Tile(
  'Flow Adapter', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Flow Adapter', //ctaText
  ['Flow Adapter'], //Product List
  true //Verified
);

export const engineOil = new Tile(
  '2-Stroke Engine Oil', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  '2-Stroke Engine Oil', //ctaText
  ['2-Stroke Engine Oil'], //Product List
  true //Verified
);

export const powerPack = new Tile(
  'Powerpack', //Header
  null, //subheader
  null, //image
  'Two Power Packs, needs to go to PLP', //Description
  '/plp', //Link
  'Powerpack', //ctaText
  ['Powerpack', 'Power Pack 2'], //Product List
  true //Verified
);

export const wires = new Tile(
  'Diamond Wire & Accessories', //Header
  null, //subheader
  null, //image
  '', //Description
  '/products/ics/diamond-wires', //Link
  'Diamond Wire & Accessories', //ctaText
  [], //Product List
  true, //Verified
);

export const carryBags = new Tile(
  'ICS Carrying Bags', //Header
  null, //subheader
  null, //image
  '', //Description
  '/products/ics/carrying-bags', //Link
  'ICS Carrying Bags', //ctaText
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
