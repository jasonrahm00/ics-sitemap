import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import PLP from "../../components/pages/plp/plp";
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import { Categories, Brands, Series } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";
import AllProducts from "../products/allProducts";

import {
  MWATMeritFlatSaws, 
  MWATPentruderSaws,
  MWATICS680Cutters,
  MWATICS695Cutters,
  MWATICS890Cutters,
  MWATICS890FCutters
} from '../../components/cms-components/media-adj-text/default-media-adj-text';

const ProductsPentruderParts = AllProducts.filter(product => product.brand === Brands.pentruder && product.primaryCat === Categories.parts);
const ProductsForce3 = AllProducts.filter(product => product.attributes && product.attributes.series === Series.force3);
const ProductsForce4 = AllProducts.filter(product => product.attributes && product.attributes.series === Series.force4);
const ProductsPowerGrit = AllProducts.filter(product => product.attributes && product.attributes.series === Series.powerGrit);
const ProductsDiamondWires = AllProducts.filter(product => product.primaryCat === Categories.diamondWire);
const ProductsICSBags = AllProducts.filter(product => product.brand === Brands.ics && product.useCat === Categories.carryingBags);
const ProductsPentruderAccessories = AllProducts.filter(product => product.brand === Brands.pentruder && product.primaryCat === Categories.access);
const ProductsPentruderSaws = AllProducts.filter(
  product => product.brand === Brands.pentruder && (
    product.primaryCat === Categories.wallSaws ||
    product.primaryCat === Categories.wireSaws ||
    product.primaryCat === Categories.powerCut
  )
);
const Products680Series = AllProducts.filter(product => product.attributes && product.attributes.series === Series.series680);
const Products695Series = AllProducts.filter(product => product.attributes && product.attributes.series === Series.series695);
const Products890Series = AllProducts.filter(product => product.attributes && product.attributes.series === Series.series890);
const Products890FSeries = AllProducts.filter(product => product.attributes && product.attributes.series === Series.series890F);

const BrandRoutes = [

  // ICS Brand Routes
  new RouteObject('/products/ics', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'ICS Brand'} text={PlaceholderText} />,
      ReusableTileCollections.icsSawCollection,
      ReusableTileCollections.icsChainsCollection,
      ReusableTileCollections.icsPartsCollection,
    ]} />
  ),
  new RouteObject('/products/ics/force-3-diamond-chains', () => <PLP title={'FORCE3 Diamond Chains'} products={ProductsForce3} />),
  new RouteObject('/products/ics/force-4-diamond-chains', () => <PLP title={'FORCE4 Diamond Chains'} products={ProductsForce4} />),
  new RouteObject('/products/ics/power-grit', () => <PLP title={'Power Grit Chains'} products={ProductsPowerGrit} />),
  new RouteObject('/products/ics/diamond-wires', () => <PLP title={'Diamond Wire and Accessories'} products={ProductsDiamondWires} />),
  new RouteObject('/products/ics/carrying-bags', () => <PLP title={'Carrying Bags'} products={ProductsICSBags} />),
  new RouteObject('/products/ics/gas-power-cutters', () => <CategoryContent components={[
    <ImgTextOverlay header={'ICS Gas Power Cutters'} text={PlaceholderText} />,
    <MWATICS680Cutters />,
    <MWATICS695Cutters />
  ]}/>),
  new RouteObject('/products/ics/hydraulic-power-cutters', () => <CategoryContent components={[
    <ImgTextOverlay header={'ICS Hydraulic Power Cutters'} text={PlaceholderText} />,
    <MWATICS890Cutters />,
    <MWATICS890FCutters />
  ]}/>),
  new RouteObject('/products/ics/gas-power-cutters/680-series', () => <PLP title={'680 Series Power Cutters'} products={Products680Series} />),
  new RouteObject('/products/ics/gas-power-cutters/695-series', () => <PLP title={'695 Series Power Cutters'} products={Products695Series} />),
  new RouteObject('/products/ics/gas-power-cutters/890-series', () => <PLP title={'890 Series Power Cutters'} products={Products890Series} />),
  new RouteObject('/products/ics/gas-power-cutters/890-f-series', () => <PLP title={'890F Series Power Cutters'} products={Products890FSeries} />),

  // Merit Brand Routes
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay header={'Merit Brand'} text={PlaceholderText} />,
    <MWATMeritFlatSaws />,
    ReusableTileCollections.meritPartsCollection,
  ]} />),

  // Pentruder Brand Routes
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay header={'Pentruder Brand'} text={PlaceholderText} />,
    <MWATPentruderSaws />,
    ReusableTileCollections.pentruderPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder/parts', () => <PLP title={'Pentruder Parts'} products={ProductsPentruderParts} />),
  new RouteObject('/products/pentruder/accessories', () => <PLP title={'Pentruder Accessories'} products={ProductsPentruderAccessories} />),
  new RouteObject('/products/pentruder/saws', () => <PLP title={'Pentruder Saws'} products={ProductsPentruderSaws} />),
]

export default BrandRoutes;