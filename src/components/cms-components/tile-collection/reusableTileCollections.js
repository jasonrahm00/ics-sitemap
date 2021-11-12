import TileCollection from "./tileCollection";

import { 
  ICSBrandSaws, 
  ICSBrandChains, 
  ICSBrandParts,
  FlatSaws,
  MeritBrandParts,
  PentruderBrandParts,
  PentruderBrandSaws,
  WallSaws,
  AllChainSaws,
  WallWireAccessories,
  ConcreteCuttingChains,
  ConcreteCuttingParts,
  PipeCuttingChains,
  PipeCuttingAccessories,
  ConcreteCuttingSaws,
  ICSBrandPartsSingleTile,
  NewsTilesFeatures,
  NewsTilesProducts,
  NewsTilesGuides,
  PentruderBrandAllTiles
} from './tiles/tile-groupings';

const ReusableTileCollections = {
  icsSawCollection: <TileCollection tileGroup={ICSBrandSaws} />,
  icsChainsCollection: <TileCollection tileGroup={ICSBrandChains} />,
  icsPartsCollection: <TileCollection tileGroup={ICSBrandParts} />,
  flatSawsCollection: <TileCollection tileGroup={FlatSaws} />,
  meritPartsCollection: <TileCollection tileGroup={MeritBrandParts} />,
  pentruderSawsCollection: <TileCollection tileGroup={PentruderBrandSaws} />,
  wallSawsCollection: <TileCollection tileGroup={WallSaws} />,
  pentruderPartsCollection: <TileCollection tileGroup={PentruderBrandParts} />,
  allChainSawsCollection: <TileCollection tileGroup={AllChainSaws} />,
  wallWireAccessCollection: <TileCollection tileGroup={WallWireAccessories} />,
  concreteCuttingChainsCollection: <TileCollection tileGroup={ConcreteCuttingChains} />,
  concreteCuttingPartsCollection: <TileCollection tileGroup={ConcreteCuttingParts} />,
  pipeCuttingChainsCollection: <TileCollection tileGroup={PipeCuttingChains} />,
  pipeCuttingAccessoriesCollection: <TileCollection tileGroup={PipeCuttingAccessories} />,
  concreteCuttingSaws: <TileCollection tileGroup={ConcreteCuttingSaws} />,
  singleICSPartsTile: <TileCollection tileGroup={ICSBrandPartsSingleTile} />,
  newsFeatures: <TileCollection tileGroup={NewsTilesFeatures} />,
  newsProducts: <TileCollection tileGroup={NewsTilesProducts} />,
  newsGuides: <TileCollection tileGroup={NewsTilesGuides} />,
  allPentruderTiles: <TileCollection tileGroup={PentruderBrandAllTiles} />
};

export default ReusableTileCollections