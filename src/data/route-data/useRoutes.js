import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/icsProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";

const ProductsSteelCutting = AllProducts.filter(product => product.useCat === Categories.steelCutting);
const ProductsPowerSupply = AllProducts.filter(product => product.primaryCat === Categories.powerSupply);

const UseRoutes = [
  new RouteObject('/products/concrete-cutting', () => <CategoryContent components={[
    <ImgTextOverlay header={'Concrete Cutting'} />,
    ReusableTileCollections.allChainSawsCollection,
    ReusableTileCollections.concreteCuttingChainsCollection,
    ReusableTileCollections.flatSawsCollection,
    ReusableTileCollections.wallSawsCollection,
    ReusableTileCollections.wireSawsCollection,
    ReusableTileCollections.concreteCuttingPartsCollection,
  ]} />),
  new RouteObject('/products/pipe-cutting', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Pipe Cutting'} />,
      ReusableTileCollections.allChainSawsCollection,
      ReusableTileCollections.pipeCuttingChainsCollection,
      ReusableTileCollections.pipeCuttingAccessoriesCollection,
    ]} />
  ),
  new RouteObject('/products/steel-cutting', () => <PLP title={'Steel Cutting'} products={ProductsSteelCutting} />),
  new RouteObject('/products/power-supply', () => <PLP title={'Power Supply'} products={ProductsPowerSupply} />),
];

export default UseRoutes;