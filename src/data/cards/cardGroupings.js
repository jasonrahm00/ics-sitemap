import { CardGroup } from './cardConstructors';
import { ICSSaws, ICSChains, ICSParts, wires, forceThree, forceFour, powerGrit, pipeClamp } from './icsCards';
import { MeritFlatSaws, partsAccessories } from './meritCards';
import { PentruderWallSaws, PentruderChainSaws, PentruderWireSaws, PentruderParts, remoteControl  } from './pentruderCards';

const allChainSaws = new CardGroup('Chain Saws', [...ICSSaws].concat([...PentruderChainSaws]));

export const ICSBrandCards = [
  new CardGroup('Power Saws', ICSSaws),
  new CardGroup('Saw Chains', ICSChains),
  new CardGroup('Parts & Accessories', ICSParts)
];

export const MeritBrandCards = [
  new CardGroup('Flat Saws', MeritFlatSaws),
  new CardGroup('Parts & Accessories', [partsAccessories])
];

export const PentruderBrandCards = [
  new CardGroup('Power Cutters', PentruderChainSaws),
  new CardGroup('Wall Saws', PentruderWallSaws),
  new CardGroup('Wire Saws', PentruderWireSaws),
  new CardGroup('Parts & Accessories', PentruderParts)
];

export const ConcreteCutting = [
  allChainSaws,
  new CardGroup('Concrete Cutting Saw Chains', [forceThree, forceFour]),
  new CardGroup('Flat Saws', MeritFlatSaws),
  new CardGroup('Wall Saws', PentruderWallSaws),
  new CardGroup('Wire Saws', PentruderWireSaws),
  new CardGroup('Concrete Cutting Parts & Accessories', [remoteControl, wires])
];

export const PipeCutting = [
  allChainSaws,
  new CardGroup('Pipe Cutting Saw Chains', [powerGrit]),
  new CardGroup('Pipe Cutting Accessories', [pipeClamp])
];

export const SteelCutting = [
  new CardGroup('Steel Cutting Wires', )
]

