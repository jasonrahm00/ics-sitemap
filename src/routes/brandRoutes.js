import { Route } from "react-router-dom";
import ContentPage from '../components/pages/contentPage';

import { AllICSCards } from '../data/cards/icsCards';

function BrandRoutes() {
  return (
    <>
      <Route exact path="/products/ics" component={() => <ContentPage title={'ICS Brand'} cards={AllICSCards} />} />
    </>
  );
}

export default BrandRoutes;