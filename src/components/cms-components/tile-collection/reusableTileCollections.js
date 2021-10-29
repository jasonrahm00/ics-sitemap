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
  WireSaws,
  AllChainSaws,
  WallWireAccessories,
  ConcreteCuttingChains,
  ConcreteCuttingParts,
  PipeCuttingChains,
  PipeCuttingAccessories
} from './tiles/tile-groupings';

const ReusableTileCollections = {
  icsSawCollection: <TileCollection tileGroup={ICSBrandSaws} />,
  icsChainsCollection: <TileCollection tileGroup={ICSBrandChains} />,
  icsPartsCollection: <TileCollection tileGroup={ICSBrandParts} />,
  flatSawsCollection: <TileCollection tileGroup={FlatSaws} />,
  meritPartsCollection: <TileCollection tileGroup={MeritBrandParts} />,
  pentruderSawsCollection: <TileCollection tileGroup={PentruderBrandSaws} />,
  wallSawsCollection: <TileCollection tileGroup={WallSaws} />,
  wireSawsCollection: <TileCollection tileGroup={WireSaws} />,
  pentruderPartsCollection: <TileCollection tileGroup={PentruderBrandParts} />,
  allChainSawsCollection: <TileCollection tileGroup={AllChainSaws} />,
  wallWireAccessCollection: <TileCollection tileGroup={WallWireAccessories} />,
  concreteCuttingChainsCollection: <TileCollection tileGroup={ConcreteCuttingChains} />,
  concreteCuttingPartsCollection: <TileCollection tileGroup={ConcreteCuttingParts} />,
  pipeCuttingChainsCollection: <TileCollection tileGroup={PipeCuttingChains} />,
  pipeCuttingAccessoriesCollection: <TileCollection tileGroup={PipeCuttingAccessories} />,
};

export default ReusableTileCollections