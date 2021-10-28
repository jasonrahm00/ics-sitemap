import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';

import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import TileCollection from '../../components/cms-components/tile-collection/tileCollection';

import { 
  AllChainSaws,
  ConcreteCuttingChains,
  FlatSaws,
  WallSaws,
  WireSaws,
  ConcreteCuttingParts,
  PipeCuttingChains,
  PipeCuttingAccessories
} from '../tiles/tile-groupings';

const UseRoutes = [
  new RouteObject('/products/concrete-cutting', () => <CategoryContent components={[
    <ImgTextOverlay header={'Concrete Cutting'} />,
    <TileCollection tileGroup={AllChainSaws} />,
    <TileCollection tileGroup={ConcreteCuttingChains} />,
    <TileCollection tileGroup={FlatSaws} />,
    <TileCollection tileGroup={WallSaws} />,
    <TileCollection tileGroup={WireSaws} />,
    <TileCollection tileGroup={ConcreteCuttingParts} />,
  ]} />),
  new RouteObject('/products/pipe-cutting', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Pipe Cutting'} />,
      <TileCollection tileGroup={AllChainSaws} />,
      <TileCollection tileGroup={PipeCuttingChains} />,
      <TileCollection tileGroup={PipeCuttingAccessories} />,
    ]} />
  ),
  new RouteObject('/products/steel-cutting', () => <PLP />),
  new RouteObject('/products/power-supply', () => <PLP />),
];

export default UseRoutes;
