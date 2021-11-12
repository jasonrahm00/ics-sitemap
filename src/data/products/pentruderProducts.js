import { Categories, Brands, PowerTypes } from "../../utility/variables";
import { Product, Attributes } from "../../utility/constructors";

const PentruderProducts = [
  new Product('CW630 HF Electric Chain Saw', Brands.pentruder, Categories.powerCut, new Attributes(PowerTypes.electric, '', '')),
  new Product('CBK HF Wall Saw', Brands.pentruder, Categories.wallSaws),
  new Product('8-20 HF Wall Saw', Brands.pentruder, Categories.wallSaws),
  new Product('3P8 HF Wire Saw', Brands.pentruder, Categories.wireSaws),
  new Product('Pentpak 427 HF Power Pack', Brands.pentruder, Categories.powerSupply),
  new Product('Pentruder Remote Control', Brands.pentruder, Categories.access),
  new Product('Pentruder Track', Brands.pentruder, Categories.access),
  new Product('Pentruder Track Feet', Brands.pentruder, Categories.access),
  new Product('Pentruder Blade Flanges', Brands.pentruder, Categories.parts),
  new Product('Pentruder Blade Guards', Brands.pentruder, Categories.parts),
  new Product('Pentruder Cables', Brands.pentruder, Categories.parts),
];

export default PentruderProducts;
