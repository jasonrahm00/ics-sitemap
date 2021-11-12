import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";

const ProductsSteelCutting = AllProducts.filter(product => product.useCat === Categories.steelCutting);
const ProductsPowerSupply = AllProducts.filter(product => product.primaryCat === Categories.powerSupply);

const UseRoutes = [
  new RouteObject('/products/concrete-cutting', () => <CategoryContent components={[
    <ImgTextOverlay header={'Concrete Cutting'} text={PlaceholderText} />,
    ReusableTileCollections.concreteCuttingSaws,
    ReusableTileCollections.concreteCuttingChainsCollection,
    ReusableTileCollections.concreteCuttingPartsCollection,
  ]} />),
  new RouteObject('/products/pipe-cutting', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Pipe Cutting'} text={PlaceholderText} />,
      ReusableTileCollections.allChainSawsCollection,
      ReusableTileCollections.pipeCuttingChainsCollection,
      ReusableTileCollections.pipeCuttingAccessoriesCollection,
    ]} />
  ),
  new RouteObject('/products/steel-cutting', () => <PLP title={'Steel Cutting'} products={ProductsSteelCutting} />),
  new RouteObject('/products/power-supply', () => <PLP title={'Power Supply'} products={ProductsPowerSupply} />),
];

export default UseRoutes;
