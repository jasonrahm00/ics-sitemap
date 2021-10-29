import { TileGroup } from '../../../../utility/constructors';
import { ICSSaws, ICSChains, ICSParts, wires, forceThree, forceFour, powerGrit, pipeClamp } from './ics-tiles';
import { MeritFlatSaws, MeritParts } from './merit-tiles';
import { PentruderWallSaws, PentruderChainSaws, PentruderWireSaws, PentruderParts, remoteControl  } from './pentruder-tiles';

// ICS Brand Tile Groups
export const ICSBrandSaws = new TileGroup('Power Saws', '', ICSSaws);
export const ICSBrandChains = new TileGroup('Diamond Saw Chains', '', ICSChains);
export const ICSBrandParts = new TileGroup('ICS Parts & Accessories', '', ICSParts);

// Merit Brand Tiles
export const FlatSaws = new TileGroup('Flat Saws', '', MeritFlatSaws);
export const MeritBrandParts = new TileGroup('Merit Parts & Accessories', '', MeritParts);

// Pentruder Brand Tiles
export const PentruderBrandSaws = new TileGroup('Power Cutters', '', PentruderChainSaws);
export const WallSaws = new TileGroup('Wall Saws', '', PentruderWallSaws);
export const WireSaws = new TileGroup('Wire Saws', '', PentruderWireSaws);
export const PentruderBrandParts = new TileGroup('Pentruder Parts & Accessories', '', PentruderParts);

// Use and Type Tiles
export const AllChainSaws = new TileGroup('Chain Saws', '', [...ICSSaws].concat([...PentruderChainSaws]));
export const ConcreteCuttingChains = new TileGroup('Concrete Cutting Saw Chains', '', [forceThree, forceFour]);
export const ConcreteCuttingParts = new TileGroup('Concrete Cutting Parts & Accessories', '', [remoteControl, wires]);
export const PipeCuttingChains = new TileGroup('Pipe Cutting Saw Chains', '', [powerGrit]);
export const PipeCuttingAccessories = new TileGroup('Pipe Cutting Accessories', '', [pipeClamp]);
export const WallWireAccessories = new TileGroup('Wall/Wire Saw Accessories', '', [remoteControl]);
