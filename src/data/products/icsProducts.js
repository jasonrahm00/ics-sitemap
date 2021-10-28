import { Categories, Attributes, Brands } from "../../utility/variables";
import { Product } from "../../utility/constructors";

const ICSProducts = [
  new Product('701A Pneumatic Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('pneumatic')]),
  new Product('695XL PG Gas Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('gas')]),
  new Product('695XL Gas Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('gas')]),
  new Product('680ES PG Gas Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('gas')]),
  new Product('680ES Gas Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('gas')]),
  new Product('890PG Hydraulic Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('hydraulic')]),
  new Product('890F4 Flush Cut Hydraulic Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('hydraulic')]),
  new Product('890F4 Flush Cut Hydraulic Power Cutter', Brands.ics, Categories.powerCut, [new Attributes.power('hydraulic')]),
  new Product('FORCE3 Standard 12"', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE3')]),
  new Product('FORCE3 Standard 10"', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE3')]),
  new Product('FORCE3 Standard 16"', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE3')]),
  new Product('FORCE3 Abrasive', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE3')]),
  new Product('FORCE3 Premium', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE3')]),
  new Product('FORCE4® Cross-LINK® Chain', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE4')]),
  new Product('FORCE4® Texas Chain', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE4')]),
  new Product('FORCE4® Series Diamond Chains', Brands.ics, Categories.diamondChains, [new Attributes.series('FORCE4')]),
  new Product('PowerGrit® XL Pipe Cutting Chain', Brands.ics, Categories.diamondChains, [new Attributes.series('PowerGrit')]),
  new Product('PowerGrit® Pipe Cutting Chain', Brands.ics, Categories.diamondChains, [new Attributes.series('PowerGrit')]),
  new Product('Pipe Clamp', Brands.ics, Categories.parts, []),
  new Product('Hydraulic Hoses', Brands.ics, Categories.parts, []),
  new Product('Flow Adapter', Brands.ics, Categories.parts, []),
  new Product('2-Stroke Engine Oil', Brands.ics, Categories.parts, []),
  new Product('Powerpack', Brands.ics, Categories.powerSupply, []),
  new Product('Powerpack 2', Brands.ics, Categories.powerSupply, []),
  new Product('Finish Wire', Brands.ics, Categories.diamondWire, []),
  new Product('Heavy Concrete Wire', Brands.ics, Categories.diamondWire, []),
  new Product('Hybrid Wire', Brands.ics, Categories.diamondWire, []),
  new Product('Steel Wire – Fast Cutting', Brands.ics, Categories.diamondWire, [], Categories.steelCutting),
  new Product('Steel Wire – Longer Lasting', Brands.ics, Categories.diamondWire, [], Categories.steelCutting),
  new Product('Super Wire', Brands.ics, Categories.diamondWire, []),
];

export default ICSProducts;