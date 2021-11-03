import { Categories, Brands, PowerTypes, ChainTypes, Series } from "../../utility/variables";
import { Product, Attributes } from "../../utility/constructors";

const ICSProducts = [
  new Product('701A Pneumatic Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.pneumatic)),
  new Product('695XL PG Gas Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.gas, '', Series.series695)),
  new Product('695XL Gas Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.gas, '', Series.series695)),
  new Product('680ES PG Gas Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.gas, '', Series.series680)),
  new Product('680ES Gas Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.gas, '', Series.series680)),
  new Product('890PG Hydraulic Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.hydraulic, '', Series.series890)),
  new Product('890F4 Flush Cut Hydraulic Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.hydraulic, '', Series.series890F)),
  new Product('890F4 Flush Cut Hydraulic Power Cutter', Brands.ics, Categories.powerCut, new Attributes(PowerTypes.hydraulic, '', Series.series890F)),
  new Product('FORCE3 Standard 12"', Brands.ics, Categories.diamondChains, new Attributes('', ChainTypes.standard, Series.force3)),
  new Product('FORCE3 Standard 10"', Brands.ics, Categories.diamondChains, new Attributes('', ChainTypes.standard, Series.force3)),
  new Product('FORCE3 Standard 16"', Brands.ics, Categories.diamondChains, new Attributes('', ChainTypes.standard, Series.force3)),
  new Product('FORCE3 Abrasive', Brands.ics, Categories.diamondChains, new Attributes('', ChainTypes.abrasive, Series.force3)),
  new Product('FORCE3 Premium', Brands.ics, Categories.diamondChains, new Attributes('', ChainTypes.premium, Series.force3)),
  new Product('FORCE4® Cross-LINK® Chain', Brands.ics, Categories.diamondChains, new Attributes('', '', Series.force4)),
  new Product('FORCE4® Texas Chain', Brands.ics, Categories.diamondChains, new Attributes('', '', Series.force4)),
  new Product('FORCE4® Series Diamond Chains', Brands.ics, Categories.diamondChains, new Attributes('', '', Series.force4)),
  new Product('PowerGrit® XL Pipe Cutting Chain', Brands.ics, Categories.diamondChains, new Attributes('', '', Series.powerGrit)),
  new Product('PowerGrit® Pipe Cutting Chain', Brands.ics, Categories.diamondChains, new Attributes('','',Series.powerGrit)),
  new Product('Pipe Clamp', Brands.ics, Categories.parts),
  new Product('Hydraulic Hoses', Brands.ics, Categories.parts),
  new Product('Flow Adapter', Brands.ics, Categories.parts),
  new Product('2-Stroke Engine Oil', Brands.ics, Categories.parts),
  new Product('Powerpack', Brands.ics, Categories.powerSupply),
  new Product('Powerpack 2', Brands.ics, Categories.powerSupply),
  new Product('Finish Wire', Brands.ics, Categories.diamondWire),
  new Product('Heavy Concrete Wire', Brands.ics, Categories.diamondWire),
  new Product('Hybrid Wire', Brands.ics, Categories.diamondWire),
  new Product('Steel Wire – Fast Cutting', Brands.ics, Categories.diamondWire, null, Categories.steelCutting),
  new Product('Steel Wire – Longer Lasting', Brands.ics, Categories.diamondWire, null, Categories.steelCutting),
  new Product('Super Wire', Brands.ics, Categories.diamondWire),
  new Product('Small Carrying Bag', Brands.ics, Categories.parts,null,Categories.carryingBags),
  new Product('Large Carrying Bag', Brands.ics, Categories.parts,null,Categories.carryingBags),
];

export default ICSProducts;