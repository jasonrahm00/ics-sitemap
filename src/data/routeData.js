import Homepage from '../components/pages/hompage';
import PDP from "../components/pages/pdp";
import PLP from "../components/pages/plp";
import CategoryContent from "../components/pages/categoryContentPage";
import ContentPage from '../components/pages/contentPage';
import { RouteObject } from '../utility/constructors';
import CardPage from "../components/pages/cardPage";
import { 
  ICSBrandCards, 
  MeritBrandCards, 
  PentruderBrandCards,
  AllChainSaws,
  FlatSaws,
  WallWireSaws,
  DiamondChains,
  AllParts,
  ConcreteCutting,
  PipeCutting,
  SuccessCards
} from './cards/cardGroupings';

const routeData = [

  //Base Routes
  new RouteObject('/', () => <Homepage />),
  new RouteObject('/pdp', () => <PDP title={'Product'} />),
  new RouteObject('/plp', () => <PLP/>),
  new RouteObject('/category-content', () => <CategoryContent/>),
  new RouteObject('/plain-content', () => <ContentPage/>),

  //Brand Routes
  new RouteObject('/products/ics', () => <CardPage title={'ICS Brand'} cards={ICSBrandCards} />),
  new RouteObject('/products/merit', () => <CardPage title={'Merit Brand'} cards={MeritBrandCards} />),
  new RouteObject('/products/pentruder', () => <CardPage title={'Pentruder Brand'} cards={PentruderBrandCards} />),

  //Type Routes
  new RouteObject('/products', () => <PLP title={'All Products'} />),
  new RouteObject('/products/power-cutters', () => <CardPage title={'Power Cutters'} cards={[AllChainSaws]} showBrand="true" />),
  new RouteObject('/products/flat-saws', () => <CardPage title={'Flat Saws'} cards={[FlatSaws]} showBrand="true" />),
  new RouteObject('/products/wall-wire-saws', () => <CardPage title={'Wall/Wire Saws'} cards={WallWireSaws} showBrand="true" />),
  new RouteObject('/products/diamond-chains', () => <CardPage title={'Diamond Chains'} cards={[DiamondChains]} showBrand="true" />),
  new RouteObject('/products/parts-accessories', () => <CardPage title={'Parts & Accessories'} cards={AllParts} />),

  //Use Routes
  new RouteObject('/products/concrete-cutting', () => <CardPage title={'Concrete Cutting'} cards={ConcreteCutting} showBrand="true" />),
  new RouteObject('/products/pipe-cutting', () => <CardPage title={'Pipe Cutting'} cards={PipeCutting} showBrand="true" />),
  new RouteObject('/products/steel-cutting', () => <PLP title={'Steel Cutting'} />),
  new RouteObject('/products/power-supply', () => <PLP title={'Power Supply'} />),

  //Customer Support Routes
  new RouteObject('/contact-us', () => <ContentPage title={'Contact Us'}/>),
  new RouteObject('/find-dealer', () => <ContentPage title={'Find a Dealer'}/>),
  new RouteObject('/product-registration', () => <ContentPage title={'Product Registration'}/>),
  new RouteObject('/document-library', () => <ContentPage title={'Document Library'}/>),
  new RouteObject('/pro-corner', () => <ContentPage title={'Pro Corner'}/>),
  new RouteObject('/demo-request', () => <ContentPage title={'Request a Demo'}/>),

  //Success Story Routes
  new RouteObject('/success-stories', () => <CategoryContent title={'Success Stories'} />),
  new RouteObject('/success-stories/battle-tested', () => <ContentPage title={'Battle Tested'}/>),
  new RouteObject('/success-stories/change-is-good', () => <ContentPage title={'Change Is Good'}/>),
  new RouteObject('/success-stories/pentruder-beats-clock', () => <ContentPage title={'Pentruder Beats the Clock'}/>),
  new RouteObject('/success-stories/bridging-gap', () => <ContentPage title={'Bridging the Gap'}/>),
  new RouteObject('/success-stories/precision-required', () => <ContentPage title={'Precision Required'}/>),
  new RouteObject('/success-stories/concrete-pipe-tap', () => <ContentPage title={'Concrete Pipe Tap'}/>),
  new RouteObject('/success-stories/egress-window', () => <ContentPage title={'Egress Window'}/>),
  new RouteObject('/success-stories/small-openings', () => <ContentPage title={'Small Openings'}/>),
  new RouteObject('/success-stories/kickback-study', () => <ContentPage title={'Kickback Study'}/>),
  new RouteObject('/success-stories/overview-crosslink', () => <ContentPage title={'Overview: Crosslink'}/>)

];

export default routeData;