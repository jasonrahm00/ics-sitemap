import ContentPage from "../components/pages/contentPage";
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
    render: () => <ContentPage title={'Power Cutters'} cards={[AllChainSaws]} showBrand="true" />
  },
  {
    path: '/products/flat-saws',
    render: () => <ContentPage title={'Flat Saws'} cards={[FlatSaws]} showBrand="true" />
  },
  {
    path: '/products/wall-wire-saws',
    render: () => <ContentPage title={'Wall/Wire Saws'} cards={WallWireSaws} showBrand="true" />
  },
  {
    path: '/products/diamond-chains',
    render: () => <ContentPage title={'Diamond Chains'} cards={[DiamondChains]} showBrand="true" />
  },
  {
    path: '/products/parts-accessories',
    render: () => <ContentPage title={'Parts & Accessories'} cards={AllParts} />
  }
]

export default typeRoutes;