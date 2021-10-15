import { Route } from "react-router-dom";

import ICSBrandPage from "../components/pages/shop-by-brand/icsBrandPage";

function BrandRoutes() {
  return (
    <>
      <Route exact path="/products/ics" component={
        () => <ICSBrandPage />
      } />
    </>
  );
}

export default BrandRoutes;