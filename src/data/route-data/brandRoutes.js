import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import PLP from "../../components/pages/plp/plp";
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import { Categories, Brands, Series } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";
import AllProducts from "../products/allProducts";

import {IWATMeritFlatSaws} from '../../components/cms-components/media-adj-text/default-media-adj-text';

const ProductsPentruderParts = AllProducts.filter(product => product.brand === Brands.pentruder && product.primaryCat === Categories.parts);
const ProductsForce3 = AllProducts.filter(product => product.attributes && product.attributes.series === Series.force3);
const ProductsForce4 = AllProducts.filter(product => product.attributes && product.attributes.series === Series.force4);
const ProductsPowerGrit = AllProducts.filter(product => product.attributes && product.attributes.series === Series.powerGrit);
const ProductsDiamondWires = AllProducts.filter(product => product.primaryCat === Categories.diamondWire);
const ProductsICSBags = AllProducts.filter(product => product.brand === Brands.ics && product.useCat === Categories.carryingBags);
const ProductsPentruderAccessories = AllProducts.filter(product => product.brand === Brands.pentruder && product.primaryCat === Categories.access);

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
  new RouteObject('/products/ics/gas-power-cutters', () => <CategoryContent />),
  new RouteObject('/products/ics/hydraulic-power-cutters', () => <CategoryContent />),

  // Merit Brand Routes
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay header={'Merit Brand'} text={PlaceholderText} />,
    <IWATMeritFlatSaws />,
    ReusableTileCollections.meritPartsCollection,
  ]} />),

  // Pentruder Brand Routes
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay header={'Pentruder Brand'} text={PlaceholderText} />,
    ReusableTileCollections.pentruderSawsCollection,
    ReusableTileCollections.wallSawsCollection,
    ReusableTileCollections.wireSawsCollection,
    ReusableTileCollections.pentruderPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder/parts', () => <PLP title={'Pentruder Parts'} products={ProductsPentruderParts} />),
  new RouteObject('/products/pentruder/accessories', () => <PLP title={'Pentruder Accessories'} products={ProductsPentruderAccessories} />)
]

export default BrandRoutes;