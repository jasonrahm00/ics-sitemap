import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';

import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import TileCollection from '../../components/cms-components/tile-collection/tileCollection';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";

import { 
  AllChainSaws,
  WallSaws,
  ICSBrandChains,
  WireSaws,
  ICSBrandParts,
  PentruderBrandParts,
  MeritBrandParts,
  WallWireAccessories
} from '../tiles/tile-groupings';

const ProductsFlatSaws = AllProducts.filter(product => product.primaryCat === Categories.flatSaws);
const ProductsWallSaws = AllProducts.filter(product => product.primaryCat === Categories.wallSaws);

const TypeRoutes = [
  new RouteObject('/products', () => <PLP title={'All Products'} products={AllProducts} />),
  new RouteObject('/products/power-cutters', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Power Cutters'} />,
      <TileCollection tileGroup={AllChainSaws} />,
    ]} />
  ),
  new RouteObject('/products/flat-saws', () => <PLP title={'Flat Saws'} products={ProductsFlatSaws}/>),
  new RouteObject('/products/wall-wire-saws', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Wall/Wire Saws'} />,
      <TileCollection tileGroup={WallSaws} />,
      <TileCollection tileGroup={WireSaws} />,
      <TileCollection tileGroup={WallWireAccessories} />,
    ]} />
  ),
  new RouteObject('/products/diamond-chains', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Diamond Chains'} />,
      <TileCollection tileGroup={ICSBrandChains} />,
    ]} />
  ),
  new RouteObject('/products/parts-accessories', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Parts & Accessories'} />,
      <TileCollection tileGroup={ICSBrandParts} />,
      <TileCollection tileGroup={MeritBrandParts} />,
      <TileCollection tileGroup={PentruderBrandParts} />,
    ]} />
  ),
  new RouteObject('/products/wall-saws', () => <PLP title={'Wall Saws'} products={ProductsWallSaws} />)
]

export default TypeRoutes;