import { TileGroup } from '../../utility/constructors';
import { ICSSaws, ICSChains, ICSParts, wires, forceThree, forceFour, powerGrit, pipeClamp } from './ics-tiles';
import { MeritFlatSaws, MeritParts } from './merit-tiles';
import { PentruderWallSaws, PentruderChainSaws, PentruderWireSaws, PentruderParts, remoteControl  } from './pentruder-tiles';

// export const AllChainSaws = new TileGroup('Chain Saws', '', [...ICSSaws].concat([...PentruderChainSaws]));
// export const FlatSaws = new TileGroup('Flat Saws', '', MeritFlatSaws);
// export const DiamondChains = new TileGroup('Diamond Saw Chains', '', ICSChains);

// const wallSaws = new TileGroup('Wall Saws', '', PentruderWallSaws);
// const wireSaws = new TileGroup('Wire Saws', '', PentruderWireSaws);

// const meritParts = new TileGroup('Merit Parts & Accessories', '', MeritParts);
// const pentruderParts = new TileGroup('Pentruder Parts & Accessories', '', PentruderParts);

// ICS Brand Tile Groups
export const ICSBrandSaws = new TileGroup('Power Saws', '', ICSSaws);
export const ICSBrandChains = new TileGroup('Diamond Saw Chains', '', ICSChains);
export const ICSBrandParts = new TileGroup('ICS Parts & Accessories', '', ICSParts);

// export const MeritBrandCards = [
//   FlatSaws,
//   meritParts
// ];

// export const PentruderBrandCards = [
//   new TileGroup('Power Cutters', '', PentruderChainSaws),
//   wallSaws,
//   wireSaws,
//   pentruderParts
// ];

// export const ConcreteCutting = [
//   AllChainSaws,
//   new TileGroup('Concrete Cutting Saw Chains', '', [forceThree, forceFour]),
//   new TileGroup('Flat Saws', '', MeritFlatSaws),
//   wallSaws,
//   wireSaws,
//   new TileGroup('Concrete Cutting Parts & Accessories', '', [remoteControl, wires])
// ];

// export const PipeCutting = [
//   AllChainSaws,
//   new TileGroup('Pipe Cutting Saw Chains', '', [powerGrit]),
//   new TileGroup('Pipe Cutting Accessories', '', [pipeClamp])
// ];

// export const SteelCutting = [
//   new TileGroup('Steel Cutting Wires')
// ];

// export const WallWireSaws = [
//   wallSaws,
//   wireSaws,
//   new TileGroup('Wall/Wire Saw Accessories', '', [remoteControl])
// ];

// export const AllParts = [
//   ICSBrandParts,
//   meritParts,
//   pentruderParts
// ];
