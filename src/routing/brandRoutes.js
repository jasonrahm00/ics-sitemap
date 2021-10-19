import ContentPage from "../components/pages/contentPage";

import { 
  ICSBrandCards, 
  MeritBrandCards, 
  PentruderBrandCards,
} from '../data/cards/cardGroupings';

const brandRoutes = [
  {
    path: '/products/ics',
    render: () => <ContentPage title={'ICS Brand'} cards={ICSBrandCards} />
  },
  {
    path: '/products/merit',
    render: () => <ContentPage title={'Merit Brand'} cards={MeritBrandCards} />
  },
  {
    path: '/products/pentruder',
    render: () => <ContentPage title={'Pentruder Brand'} cards={PentruderBrandCards} />
  }
]

export default brandRoutes;