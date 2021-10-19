import CardPage from "../components/pages/cardPage";

import { 
  ICSBrandCards, 
  MeritBrandCards, 
  PentruderBrandCards,
} from '../data/cards/cardGroupings';

const brandRoutes = [
  {
    path: '/products/ics',
    render: () => <CardPage title={'ICS Brand'} cards={ICSBrandCards} />
  },
  {
    path: '/products/merit',
    render: () => <CardPage title={'Merit Brand'} cards={MeritBrandCards} />
  },
  {
    path: '/products/pentruder',
    render: () => <CardPage title={'Pentruder Brand'} cards={PentruderBrandCards} />
  }
]

export default brandRoutes;