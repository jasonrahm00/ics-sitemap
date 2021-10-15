import Card from './cardConstructor';
import { Brands } from '../variables';
import { ProductTypes as Type } from '../variables';

const Brand = Brands.ics;

export const gasSaws = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  'Gas Power Saws', //Header
  'Another Content Page', //ctaText
  '680 vs 695, different power requirements changes chain needs. Discuss what the difference is between the two saws and why you would want one over the other. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/', //Link
  ['695XL PG Gas Power Cutter', '695XL Gas Power Cutter', '680ES PG Gas Power Cutter', '680ES Gas Power Cutter'], //Product List
  true //Verified
);

export const hydraulicSaws = new Card(
  Brand,
  Type.powerCut,
  '', //Use
  'Hydraulic Power Saws', //Header
  'Another Content Page', //ctaText
  'Need to dilineate flush cut versus regular cut. What is your cutting project? Different than cutting surface... need to make the deliniation', //Description
  '/', //Link
  ['890PG Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter', '890F4 Flush Cut Hydraulic Power Cutter'], //Product List
  true //Verified
);

export const forceThree = new Card(
  Brand,
  Type.chains,
  '', //Use
  'FORCE3 Series Diamond Chains', //Header
  'Produdct Listing Page', //ctaText
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
  'Produdct Listing Page', //ctaText
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
  'Produdct Listing Page', //ctaText
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
  'Produdct Detail Page', //ctaText
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
  'Produdct Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['Hydraulic Hoses'], //Product List
  false //Verified
);

export const flowAdapter = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Flow Adapter', //Header
  'Produdct Detail Page', //ctaText
  '', //Description
  '/pdp', //Link
  ['Flow Adapter'], //Product List
  false //Verified
);

export const engineOil = new Card(
  Brand,
  Type.parts,
  '', //Use
  'Flow Adapter', //Header
  '2-Stroke Engine Oil', //ctaText
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
  '2-Stroke Engine Oil', //ctaText
  '', //Description
  '/pdp', //Link
  ['Powerpack'], //Product List
  false //Verified
);
