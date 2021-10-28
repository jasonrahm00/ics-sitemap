import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';

import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import TileCollection from '../../components/cms-components/tile-collection/tileCollection';

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

const TypeRoutes = [
  new RouteObject('/products', () => <PLP title={'All Products'} />),
  new RouteObject('/products/power-cutters', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Power Cutters'} />,
      <TileCollection tileGroup={AllChainSaws} />,
    ]} />
  ),
  new RouteObject('/products/flat-saws', () => <PLP />),
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
]

export default TypeRoutes;