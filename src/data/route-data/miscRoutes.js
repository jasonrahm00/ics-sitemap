import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';
import StyleGuide from '../../components/pages/styleGuide';

const MiscRoutes = [
  new RouteObject('/about-ics', () => <ContentPage title={'About ICS'}/>),
  new RouteObject('/style-guide', () => <StyleGuide />),
];

export default MiscRoutes;