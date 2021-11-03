import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";

const ProductsFlatSaws = AllProducts.filter(product => product.primaryCat === Categories.flatSaws);
const ProductsWallWireSaws = AllProducts.filter(
  product => product.primaryCat === Categories.wallSaws || product.primaryCat === Categories.wireSaws
);

const TypeRoutes = [
  new RouteObject('/products', () => <PLP title={'All Products'} products={AllProducts} />),
  new RouteObject('/products/power-cutters', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Power Cutters'} text={PlaceholderText} />,
      ReusableTileCollections.allChainSawsCollection,
    ]} />
  ),
  new RouteObject('/products/flat-saws', () => <PLP title={'Flat Saws'} products={ProductsFlatSaws}/>),
  new RouteObject('/products/wall-wire-saws', () => <PLP title={'Wall/Wire Saws'} products={ProductsWallWireSaws} />),
  new RouteObject('/products/diamond-chains', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Diamond Chains'} text={PlaceholderText} />,
      ReusableTileCollections.icsChainsCollection,
    ]} />
  ),
  new RouteObject('/products/parts-accessories', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Parts & Accessories'} text={PlaceholderText} />,
      ReusableTileCollections.icsPartsCollection,
      ReusableTileCollections.meritPartsCollection,
      ReusableTileCollections.pentruderPartsCollection,
    ]} />
  )
]

export default TypeRoutes;