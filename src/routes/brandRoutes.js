import { Route } from "react-router-dom";
import ContentPage from '../components/pages/contentPage';

import { ICSSaws, ICSChains, ICSParts } from '../data/cards/icsCards';

const ICSBrandCards = [
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

function BrandRoutes() {
  return (
    <>
      <Route exact path="/products/ics" component={() => <ContentPage title={'ICS Brand'} cards={ICSBrandCards} />} />
    </>
  );
}

export default BrandRoutes;