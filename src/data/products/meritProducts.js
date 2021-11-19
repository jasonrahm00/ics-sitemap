import { Categories, Brands, PowerTypes, Series } from "../../utility/variables";
import { Product, Attributes } from "../../utility/constructors";

const MeritProducts = [
  new Product('M100-30H-P Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.hydraulic, '', Series.m100)),
  new Product('M100W-10E-P Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m100)),
  new Product('M100W-23G-P Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m100)),
  new Product('M250-30H-SP Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.hydraulic, '', Series.m250)),
  new Product('M250-23G-SP Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m250)),
  new Product('M250-10E-SP Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m250)),
  new Product('M350-38G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m350)),
  new Product('M350-20E Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m350)),
  new Product('M400-30E Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m400)),
  new Product('M400-50G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m400)),
  new Product('M400SS-30E Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m400)),
  new Product('M400SS-50G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m400)),
  new Product('M600EX-61G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m600)),
  new Product('M600SS-61G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.gas, '', Series.m600)),
  new Product('M800EX-87G Flat Saw', Brands.merit, Categories.flatSaws, new Attributes(PowerTypes.electric, '', Series.m800)),
  new Product('M300-23G-HPP Power Pack', Brands.merit, Categories.powerSupply),
];

export default MeritProducts;
