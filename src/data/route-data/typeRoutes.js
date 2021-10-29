import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';

import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";

const ProductsFlatSaws = AllProducts.filter(product => product.primaryCat === Categories.flatSaws);
const ProductsWallSaws = AllProducts.filter(product => product.primaryCat === Categories.wallSaws);

const TypeRoutes = [
  new RouteObject('/products', () => <PLP title={'All Products'} products={AllProducts} />),
  new RouteObject('/products/power-cutters', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Power Cutters'} />,
      ReusableTileCollections.allChainSawsCollection,
    ]} />
  ),
  new RouteObject('/products/flat-saws', () => <PLP title={'Flat Saws'} products={ProductsFlatSaws}/>),
  new RouteObject('/products/wall-wire-saws', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Wall/Wire Saws'} />,
      ReusableTileCollections.wallSawsCollection,
      ReusableTileCollections.wireSawsCollection,
      ReusableTileCollections.wallWireAccessCollection,
    ]} />
  ),
  new RouteObject('/products/diamond-chains', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Diamond Chains'} />,
      ReusableTileCollections.icsChainsCollection,
    ]} />
  ),
  new RouteObject('/products/parts-accessories', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Parts & Accessories'} />,
      ReusableTileCollections.icsPartsCollection,
      ReusableTileCollections.meritPartsCollection,
      ReusableTileCollections.pentruderPartsCollection,
    ]} />
  ),
  new RouteObject('/products/wall-saws', () => <PLP title={'Wall Saws'} products={ProductsWallSaws} />)
]

export default TypeRoutes;