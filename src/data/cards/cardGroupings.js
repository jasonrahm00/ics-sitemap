import { ICSSaws, ICSChains, ICSParts } from './icsCards';
import { MeritFlatSaws, partsAccessories } from './meritCards';
import { PentruderWallSaws, PentruderChainSaws, PentruderWireSaws, PentruderParts  } from './pentruderCards';

export const ICSBrandCards = [
  {
    group: 'Power Saws',
    cards: ICSSaws
  },
  {
    group: 'Saw Chains',
    cards: ICSChains
  },
  {
    group: 'Parts & Accessories',
    cards: ICSParts
  }
];


export const MeritBrandCards = [
  {
    group: 'Flat Saws',
    cards: MeritFlatSaws
  },
  {
    group: 'Parts & Accessories',
    cards: [partsAccessories]
  }
];

export const PentruderBrandCards = [
  {
    group: 'Power Cutters',
    cards: PentruderChainSaws
  },
  {
    group: 'Wall Saws',
    cards: PentruderWallSaws
  },
  {
    group: 'Wire Saws',
    cards: PentruderWireSaws
  },
  {
    group: 'Parts & Accessories',
    cards: PentruderParts
  }
]
