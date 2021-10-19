import CardPage from "../components/pages/cardPage";
import PLP from "../components/pages/plp";

import { 
  AllChainSaws,
  FlatSaws,
  WallWireSaws,
  DiamondChains,
  AllParts
} from '../data/cards/cardGroupings';

const typeRoutes = [
  {
    path: '/products',
    render: () => <PLP title={'All Products'} />
  },
  {
    path: '/products/power-cutters',
    render: () => <CardPage title={'Power Cutters'} cards={[AllChainSaws]} showBrand="true" />
  },
  {
    path: '/products/flat-saws',
    render: () => <CardPage title={'Flat Saws'} cards={[FlatSaws]} showBrand="true" />
  },
  {
    path: '/products/wall-wire-saws',
    render: () => <CardPage title={'Wall/Wire Saws'} cards={WallWireSaws} showBrand="true" />
  },
  {
    path: '/products/diamond-chains',
    render: () => <CardPage title={'Diamond Chains'} cards={[DiamondChains]} showBrand="true" />
  },
  {
    path: '/products/parts-accessories',
    render: () => <CardPage title={'Parts & Accessories'} cards={AllParts} />
  }
]

export default typeRoutes;