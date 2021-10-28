import Homepage from '../../components/pages/hompage';
import PDP from "../../components/pages/pdp";
import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';

const BaseRoutes = [
  new RouteObject('/', () => <Homepage />),
  new RouteObject('/pdp', () => <PDP />),
  new RouteObject('/plp', () => <PLP/>),
  new RouteObject('/category-content', () => <CategoryContent />),
  new RouteObject('/plain-content', () => <ContentPage />)
];

export default BaseRoutes;