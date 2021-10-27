import { Categories, Attributes, Brands } from "../../utility/variables";
import { Product } from "../../utility/constructors";

const MeritProducts = [
  new Product('M100-30H-P Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M100'),
    new Attributes.power('hydraulic'),
  ]),
  new Product('M100W-10E-P Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M100'),
    new Attributes.power('electric'),
  ]),
  new Product('M100W-23G-P Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M100'),
    new Attributes.power('gas'),
  ]),
  new Product('M250-30H-SP Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M250'),
    new Attributes.power('hydraulic'),
  ]),
  new Product('M250-23G-SP Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M250'),
    new Attributes.power('gas'),
  ]),
  new Product('M250-10E-SP Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M250'),
    new Attributes.power('electric'),
  ]),
  new Product('M350-38G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M350'),
    new Attributes.power('gas'),
  ]),
  new Product('M350-20E Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M250'),
    new Attributes.power('electric'),
  ]),
  new Product('M400-30E Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M400'),
    new Attributes.power('electric'),
  ]),
  new Product('M400-50G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M400'),
    new Attributes.power('gas'),
  ]),
  new Product('M400SS-30E Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M400'),
    new Attributes.power('electric'),
  ]),
  new Product('M400SS-50G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M400'),
    new Attributes.power('gas'),
  ]),
  new Product('M600EX-61G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M600'),
    new Attributes.power('gas'),
  ]),
  new Product('M600EX-61G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M600'),
    new Attributes.power('electric'),
  ]),
  new Product('M800EX-87G Flat Saw', Brands.merit, Categories.flatSaws, [
    new Attributes.series('M800'),
    new Attributes.power('gas'),
  ]),
  new Product('M300-23G-HPP Power Pack', Brands.merit, Categories.powerSupply, []),
  new Product('Merit Water Pump', Brands.merit, Categories.parts, []),
  new Product('Merit Light Kit', Brands.merit, Categories.parts, []),
];

export default MeritProducts;
