import { Card } from '../../utility/constructors';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';
import { PageTypes as Page } from '../variables';

const Brand = Brands.ics;

export const pneumaticSaws = new Card(
  'Pneumatic Power Cutter', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', // ctaUrl
  Page.pdp, //ctaText
  ['701A Pneumatic Power Cutter'], //Product List
  true //Verified
);

export const gasSaws = new Card(
  'Gas Power Saws', //Header
  Brand, //subheder
  null, //image
  '680 vs 695, different power requirements changes chain needs. Discuss what the difference is between the two saws and why you would want one over the other. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/category-content', //Link
  Page.categoryContent, //ctaText
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
  true, //Verified
  '/products/ics/gas-power-saws' // Breadcrumbs
);

export const hydraulicSaws = new Card(
  'Hydraulic Power Saws', //Header
  Brand, //subheader
  null, //image
  'Need to dilineate flush cut versus regular cut. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/category-content', //Link
  Page.categoryContent, //ctaText
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
  true, //Verified
  '/products/ics/hydraulic-saws' // Breadcrumbs
);

export const forceThree = new Card(
  'FORCE3 Series Diamond Chains', //Header
  Brand, //subheader
  null, //image
  'Go to PLP, Add attribute for cuttinig surface to eliminate need for "abrasion type" content page explanation', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['FORCE3 Standard 12"', 'FORCE3 Standard 10"', 'FORCE3 Standard 16"', 'FORCE3 Abrasive', 'FROCE3 Premium'], //Product List
  true, //Verified
  '/products/ics/force-3-diamond-chains' //Breadcrumbs
);

export const forceFour = new Card(
  'FORCE4 Series Chains', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['FORCE4® Cross-LINK® Chain', 'FORCE4® Texas Chain', 'FORCE4® Series Diamond Chains'], //Product List
  true, //Verified
  '/products/ics/force-4-diamond-chains' //Breadcrumbs
);

export const powerGrit = new Card(
  'PowerGrit Pipe Cutting Chains', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['PowerGrit® XL Pipe Cutting Chain', 'PowerGrit® Pipe Cutting Chain'], //Product List
  true, //Verified
  '/products/ics/power-grit' //Breadcrumbs
);

export const pipeClamp = new Card(
  'Pipe Clamp', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Pipe Clamp'], //Product List
  true //Verified
);

export const hydraulicHose = new Card(
  'Hydraulic Hoses', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Hydraulic Hoses'], //Product List
  true, //Verified
  '/products/ics/hydraulic-hoses' //Breadcrumbs
);

export const flowAdapter = new Card(
  'Flow Adapter', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['Flow Adapter'], //Product List
  true //Verified
);

export const engineOil = new Card(
  '2-Stroke Engine Oil', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  Page.pdp, //ctaText
  ['2-Stroke Engine Oil'], //Product List
  true //Verified
);

export const powerPack = new Card(
  'Powerpack', //Header
  Brand, //subheader
  null, //image
  'Two Power Packs, needs to go to PLP', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['Powerpack', 'Power Pack 2'], //Product List
  true //Verified
);

export const wires = new Card(
  'Diamond Wire & Accessories', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['Finish Wire', 'Heavy Concrete Wire', 'Hybrid Wire', 'Steel Wire – Fast Cutting', 'Steel Wire – Longer Lasting', 'Super Wire'], //Product List
  true, //Verified
  '/products/ics/diamond-wires' //Breadcrumbs //Verified
);

export const carryBags = new Card(
  'ICS Carrying Bags', //Header
  Brand, //subheader
  null, //image
  '', //Description
  '/plp', //Link
  Page.plp, //ctaText
  ['ICS Small Carrying Bag', 'ICS Large Carrying Bag'], //Product List
  false, //Verified
  '/products/ics/carrying-bags' //Breadcrumbs //Verified
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
  wires
];
