import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';

const CustomerSupportRoutes = [
  new RouteObject('/contact-us', () => <ContentPage title={'Contact Us'}/>),
  new RouteObject('/find-dealer', () => <ContentPage title={'Find a Dealer'}/>),
  new RouteObject('/product-registration', () => <ContentPage title={'Product Registration'}/>),
  new RouteObject('/document-library', () => <ContentPage title={'Document Library'}/>),
  new RouteObject('/pro-corner', () => <ContentPage title={'Pro Corner'}/>),
  new RouteObject('/demo-request', () => <ContentPage title={'Request a Demo'}/>),
];

export default CustomerSupportRoutes;
