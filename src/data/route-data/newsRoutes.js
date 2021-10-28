import CategoryContent from "../../components/pages/categoryContentPage";
import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';

const NewsRoutes = [
  new RouteObject('/news-features', () => <CategoryContent title={'News and Features'} />),
  new RouteObject('/success-stories/battle-tested', () => <ContentPage title={'Battle Tested'}/>),
  new RouteObject('/success-stories/change-is-good', () => <ContentPage title={'Change Is Good'}/>),
  new RouteObject('/success-stories/pentruder-beats-clock', () => <ContentPage title={'Pentruder Beats the Clock'}/>),
  new RouteObject('/success-stories/bridging-gap', () => <ContentPage title={'Bridging the Gap'}/>),
  new RouteObject('/success-stories/precision-required', () => <ContentPage title={'Precision Required'}/>),
  new RouteObject('/success-stories/concrete-pipe-tap', () => <ContentPage title={'Concrete Pipe Tap'}/>),
  new RouteObject('/success-stories/egress-window', () => <ContentPage title={'Egress Window'}/>),
  new RouteObject('/success-stories/small-openings', () => <ContentPage title={'Small Openings'}/>),
  new RouteObject('/success-stories/kickback-study', () => <ContentPage title={'Kickback Study'}/>),
  new RouteObject('/success-stories/overview-crosslink', () => <ContentPage title={'Overview: Crosslink'}/>),
];

export default NewsRoutes