import { Tile } from '../../../../utility/constructors';

export const pneumaticSaws = new Tile(
  'Pneumatic Power Cutter', //Header
  null, //subheader
  null, //image
  'Built tough to stand up to everyday use in the harsh environment of concrete and utility pipe cutting. The unique versatility of a power cutter includes the ability to make deep plunge cuts, perfect corners, a single cut from one side and an endless variety of irregular shapes. Cut with ease, speed and portability through Reinforced Concrete, Brick, Block, Concrete Pipe, Ductile Iron, Cast Iron, Natural Stone and more. The ICS powerful pneumatic power cutter is designed to cut through walls, floors, pipe and columns in a single pass.', //Description
  '/pdp', // ctaUrl
  'Pneumatic Power Cutter', //ctaText
  ['701A Pneumatic Power Cutter'], //Product List
);

export const gasSaws = new Tile(
  'Gas Power Cutters', //Header
  null, //subheder
  null, //image
  'ICS gas powered concrete power cutters let you make deeper, cleaner, and more accurate cuts, in less time. Portable power allows you to make deeper cuts and square corners mean getting the job done with fewer steps in any location. No more trying to match up cuts from both sides. No more impact tools that risk damage to the surrounding concrete or masonry. No more over-cutting corners. Cut deep. Cut fast. Cut all the way through from one side.', //Description
  '/products/ics/gas-power-cutters', //Link
  'Gas Power Cutters', //ctaText
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
);

export const hydraulicSaws = new Tile(
  'Hydraulic Power Cutters', //Header
  null, //subheader
  null, //image
  'The ICS hydraulic cutting system offers the superior strength of FORCE4® technology. From the redesigned, more durable rear handle, to the easy to replace drive sprocket, this power cutter is engineered to stand up to your toughest jobs. Make deeper cuts and square corners with a package that exceeds industry standards.  This sleek powerhouse is packed with features designed to make it work as hard as you do.', //Description
  '/products/ics/hydraulic-power-cutters', //Link
  'Hydraulic Power Cutters', //ctaText
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
);

export const forceThree = new Tile(
  'FORCE3 Series Diamond Chains', //Header
  null, //subheader
  null, //image
  'Designed to be used with the full line of ICS gas power cutters, these chains offer the ultimate combination of versatility and affordability. Available in three configurations to match your specific application and cutting challenges.', 
  '/products/ics/force-3-diamond-chains',//Link
  'FORCE3 Series Diamond Chains', //ctaText
  [], //Product List
);

export const forceFour = new Tile(
  'FORCE4 Series Chains', //Header
  null, //subheader
  null, //image
  'Designed to be the strongest, longest-lasting diamond chains ever made, the FORCE4 series delivers unrivaled performance in professional cutting applications. With eight different configurations, there is a FORCE4 chain to meet any cutting challenge', //Description
  '/products/ics/force-4-diamond-chains', //Link
  'FORCE4 Series Chains', //ctaText
  [], //Product List
);

export const powerGrit = new Tile(
  'PowerGrit Pipe Cutting Chains', //Header
  null, //subheader
  null, //image
  'Utilized by public and private water and wastewater departments worldwide, this patented technology exclusively from ICS is designed to cut a variety of materials from ductile iron to plastic pipe. Featuring a brazed layer diamond coating on our FORCE4 platform, this chain makes your job safer, faster and easier.', //Description
  '/products/ics/power-grit', //Link
  'PowerGrit Pipe Cutting Chains', //ctaText
  [], //Product List
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

export const icsParts = new Tile(
  'Parts & Accessories', //Header
  null, //subheader
  null, //image
  'Whether it\'s making cuts straighter or job sites cleaner, there\'s an ICS&eg; accessory that gets the job done. Twenty years of experience and a whole lot of ingenuity have gone into making these work-proven products indispensable complements to your ICS concrete or pipe cutter power cutter.', //Description
  '/products/ics/parts', //Link
  'Parts & Accessories', //ctaText
  [], //Product List
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

export const ICSPartsTiles = [
  pipeClamp,
  hydraulicHose,
  flowAdapter,
  engineOil,
  powerPack,
  wires,
  carryBags
];
