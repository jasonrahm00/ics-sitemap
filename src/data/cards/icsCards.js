import { Card } from '../../utility/constructors';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';
import { PageTypes as Page } from '../variables';

const Brand = Brands.ics;

export const pneumaticSaws = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  '701A Pneumatic Power Cutter', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['701A Pneumatic Power Cutter'], //Product List
  true //Verified
);

export const gasSaws = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  'Gas Power Saws', //Header
  Page.categoryContent, //ctaText
  '680 vs 695, different power requirements changes chain needs. Discuss what the difference is between the two saws and why you would want one over the other. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/category-content', //Link
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
  true //Verified
);

export const hydraulicSaws = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  'Hydraulic Power Saws', //Header
  Page.categoryContent, //ctaText
  'Need to dilineate flush cut versus regular cut. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/category-content', //Link
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
  true //Verified
);

export const forceThree = new Card(
  Brand,
  Type.chains,
  '', //Use
  'FORCE3 Series Diamond Chains', //Header
  Page.plp, //ctaText
  'Go to PLP, Add attribute for cuttinig surface to eliminate need for "abrasion type" content page explanation', //Description
  '/plp', //Link
  ['FORCE3 Standard 12"', 'FORCE3 Standard 10"', 'FORCE3 Standard 16"', 'FORCE3 Abrasive', 'FROCE3 Premium'], //Product List
  true //Verified
);

export const forceFour = new Card(
  Brand,
  Type.chains,
  '', //Use
  'FORCE4 Series Chains', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['FORCE4® Cross-LINK® Chain', 'FORCE4® Texas Chain', 'FORCE4® Series Diamond Chains'], //Product List
  true //Verified
);

export const powerGrit = new Card(
  Brand,
  Type.chains,
  '', //Use
  'PowerGrit Pipe Cutting Chains', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['PowerGrit® XL Pipe Cutting Chain', 'PowerGrit® Pipe Cutting Chain'], //Product List
  true //Verified
);

export const pipeClamp = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Pipe Clamp', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Pipe Clamp'], //Product List
  false //Verified
);

export const hydraulicHose = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Hydraulic Hoses', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['Hydraulic Hoses'], //Product List
  false //Verified
);

export const flowAdapter = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Flow Adapter', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Flow Adapter'], //Product List
  false //Verified
);

export const engineOil = new Card(
  Brand,
  Type.parts,
  '', //Use
  '2-Stroke Engine Oil', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['2-Stroke Engine Oil'], //Product List
  false //Verified
);

export const powerPack = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Powerpack', //Header
  Page.pdp, //ctaText
  '', //Description
  '/pdp', //Link
  ['Powerpack'], //Product List
  false //Verified
);

export const wires = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Wires', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['Finish Wire', 'Heavy Concrete Wire', 'Hybrid Wire', 'Steel Wire – Fast Cutting', 'Steel Wire – Longer Lasting', 'Super Wire'], //Product List
  false //Verified
);

export const carryBags = new Card(
  Brand,
  Type.parts,
  '', //Use
  'ICS Carrying Bags', //Header
  Page.plp, //ctaText
  '', //Description
  '/plp', //Link
  ['ICS Small Carrying Bag', 'ICS Large Carrying Bag'], //Product List
  false //Verified
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
