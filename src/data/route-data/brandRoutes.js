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
const ProductICSParts = AllProducts.filter(product => product.brand === Brands.ics && product.primaryCat === Categories.parts);

const BrandRoutes = [

  // ICS Brand Routes
  new RouteObject('/products/ics', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'ICS Brand'} text={PlaceholderText} />,
      ReusableTileCollections.icsSawCollection,
      ReusableTileCollections.icsChainsCollection,
      ReusableTileCollections.singleICSPartsTile,
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
  new RouteObject('/products/ics/parts', () => <PLP title={'ICS Parts and Accessories'} products={ProductICSParts} />),

  // Merit Brand Routes
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay 
      header={'Merit'}
      headerTag='h1' 
      text={`These are Merit Flat Saws.  Made with high-strength, high-quality steel and a fully welded frame. Odds are, if you cut concrete for a living, you know how tough your tools need to be.  Each Merit by ICS saw is built to stand up to the abrasive abuse of concrete cutting, and power you through to the end of each job with ease.`} />,
    <MWATMeritFlatSaws />,
    ReusableTileCollections.meritPartsCollection,
  ]} />),

  // Pentruder Brand Routes
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay 
      header={'Pentruder'} 
      text={`You don't want just a saw.  You want a Pentruder. With state-of-the-art features, cutting-edge technology and world-class engineering, it takes first place in every measure of tough. Pentruder is the gold standard for concrete cutters worldwide. Powerful, high-frequency motors, aircraft-grade billet aluminum, a multi-speed gearbox and the only saw on the market today that runs a 79" blade like a hot knife though butter. You and your team will be the rock stars of the job site. Go ahead, let the other guys stare jealously, slack-jawed, while standing to the side. You eat, sleep and breath this, and it looks good on you. `} />,
    <MWATPentruderSaws />,
    ReusableTileCollections.pentruderPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder/parts', () => <PLP title={'Pentruder Parts'} products={ProductsPentruderParts} />),
  new RouteObject('/products/pentruder/accessories', () => <PLP title={'Pentruder Accessories'} products={ProductsPentruderAccessories} />),
  new RouteObject('/products/pentruder/saws', () => <PLP title={'Pentruder Saws'} products={ProductsPentruderSaws} />),
]

export default BrandRoutes;