import { CardGroup } from './cardConstructors';
import { ICSSaws, ICSChains, ICSParts, wires, forceThree, forceFour, powerGrit, pipeClamp } from './icsCards';
import { MeritFlatSaws, MeritParts } from './meritCards';
import { PentruderWallSaws, PentruderChainSaws, PentruderWireSaws, PentruderParts, remoteControl  } from './pentruderCards';

export const AllChainSaws = new CardGroup('Chain Saws', [...ICSSaws].concat([...PentruderChainSaws]));
export const FlatSaws = new CardGroup('Flat Saws', MeritFlatSaws);
export const DiamondChains = new CardGroup('Diamond Saw Chains', ICSChains);
const wallSaws = new CardGroup('Wall Saws', PentruderWallSaws);
const wireSaws = new CardGroup('Wire Saws', PentruderWireSaws);
const icsParts = new CardGroup('ICS Parts & Accessories', ICSParts);
const meritParts = new CardGroup('Merit Parts & Accessories', MeritParts);
const pentruderParts = new CardGroup('Pentruder Parts & Accessories', PentruderParts);

export const ICSBrandCards = [
  new CardGroup('Power Saws', ICSSaws),
  DiamondChains,
  icsParts
];

export const MeritBrandCards = [
  FlatSaws,
  meritParts
];

export const PentruderBrandCards = [
  new CardGroup('Power Cutters', PentruderChainSaws),
  wallSaws,
  wireSaws,
  pentruderParts
];

export const ConcreteCutting = [
  AllChainSaws,
  new CardGroup('Concrete Cutting Saw Chains', [forceThree, forceFour]),
  new CardGroup('Flat Saws', MeritFlatSaws),
  wallSaws,
  wireSaws,
  new CardGroup('Concrete Cutting Parts & Accessories', [remoteControl, wires])
];

export const PipeCutting = [
  AllChainSaws,
  new CardGroup('Pipe Cutting Saw Chains', [powerGrit]),
  new CardGroup('Pipe Cutting Accessories', [pipeClamp])
];

export const SteelCutting = [
  new CardGroup('Steel Cutting Wires', )
];

export const WallWireSaws = [
  wallSaws,
  wireSaws,
  new CardGroup('Wall/Wire Saw Accessories', [remoteControl])
];

export const AllParts = [
  icsParts,
  meritParts,
  pentruderParts
];
