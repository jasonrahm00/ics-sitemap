import Homepage from '../../components/pages/hompage';
import PDP from "../../components/pages/pdp";
import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';

const BaseRoutes = [
  new RouteObject('/', () => <Homepage components={[
    <ImgTextOverlay 
      header={'ICS Diamond Tools'} 
      headerTag="h1"
      subheaderTag="h2"
      subheader="Don’t Just Cut. Conquer"
      text={<p>As the world leader and pioneering force in Diamond Chain Technology, ICS concrete chainsaws and diamond chains have revolutionized concrete cutting in the construction industry.  At ICS, we know you don’t have time for tools that are just “good enough”. Your tools had better not just show up, but measure up. Like you, we believe there are no substitutes for hard work and absolutely no shortcuts to getting the job done right. All our products are designed, engineered and manufactured for you to outwork your competition, outlast the toughest jobs, and outperform any challenge.  Your unfair advantage is here, and it’s brought to you by ICS.</p>} />,
  ]} />),
  new RouteObject('/pdp', () => <PDP />),
  new RouteObject('/plp', () => <PLP/>),
  new RouteObject('/category-content', () => <CategoryContent />),
  new RouteObject('/plain-content', () => <ContentPage />),
];

export default BaseRoutes;