import Homepage from '../components/pages/hompage';
import PDP from "../components/pages/pdp";
import PLP from "../components/pages/plp";
import CategoryContent from "../components/pages/categoryContentPage";
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
  PipeCutting
} from './cards/cardGroupings';

const routeData = [

  //Base Routes
  new RouteObject('/', () => <Homepage />),
  new RouteObject('/pdp', () => <PDP title={'Product'} />),
  new RouteObject('/plp', () => <PLP/>),
  new RouteObject('/category-content', () => <CategoryContent/>),

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

];

export default routeData;