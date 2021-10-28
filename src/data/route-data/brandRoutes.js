import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';

import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';

import { 
  ICSBrandSaws, 
  ICSBrandChains, 
  ICSBrandParts,
  FlatSaws,
  MeritBrandParts,
  PentruderBrandParts,
  PentruderBrandSaws,
  WallSaws,
  WireSaws
} from '../tiles/tile-groupings';

import TileCollection from '../../components/cms-components/tile-collection/tileCollection';

const BrandRoutes = [
  new RouteObject('/products/ics', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'ICS Brand'} />,
      <TileCollection tileGroup={ICSBrandSaws} />,
      <TileCollection tileGroup={ICSBrandChains} />,
      <TileCollection tileGroup={ICSBrandParts} />,
    ]} />
  ),
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay header={'Merit Brand'} />,
    <TileCollection tileGroup={FlatSaws} />,
    <TileCollection tileGroup={MeritBrandParts} />,
  ]} />),
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay header={'Pentruder Brand'} />,
    <TileCollection tileGroup={PentruderBrandSaws} />,
    <TileCollection tileGroup={WallSaws} />,
    <TileCollection tileGroup={WireSaws} />,
    <TileCollection tileGroup={PentruderBrandParts} />,
  ]} />),
]

export default BrandRoutes;