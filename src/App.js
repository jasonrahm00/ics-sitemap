import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HeaderNav from './components/base/header/header-nav/headerNav';
import MainNav from './components/base/header/main-nav/mainNav';
import Footer from './components/base/footer/footer';
import Homepage from './components/pages/hompage';
import ContentPage from "./components/pages/contentPage";
import PDP from "./components/pages/pdp";
import PLP from "./components/pages/plp";
import ScrollToTop from "./utility/scrollToTop";
import CaetegoryContent from "./components/pages/categoryContentPage";

import { 
  ICSBrandCards, 
  MeritBrandCards, 
  PentruderBrandCards, 
  ConcreteCutting, 
  PipeCutting,
  AllChainSaws,
  FlatSaws,
  WallWireSaws,
  DiamondChains,
  AllParts
} from './data/cards/cardGroupings';

function App() {
  return (
    <Router>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <main>
        <ScrollToTop />
        <Switch>]

          {/* Base Routes */}
          <Route exact path="/"> <Homepage /></Route>
          <Route exact path="/pdp" component={() => <PDP title={'Product'} />} />
          <Route exact path="/plp" component={() => <PLP/>} />
          <Route exact path="/category-content" component={() => <CaetegoryContent/>} />

          {/* Brand Routes */}
          <Route exact path="/products/ics" component={() => <ContentPage title={'ICS Brand'} cards={ICSBrandCards} />} />  
          <Route exact path="/products/merit" component={() => <ContentPage title={'Merit Brand'} cards={MeritBrandCards} />} />  
          <Route exact path="/products/pentruder" component={() => <ContentPage title={'Pentruder Brand'} cards={PentruderBrandCards} />} />  

          {/* Use Routes */}    
          <Route exact path="/products/concrete-cutting" component={
              () => <ContentPage title={'Concrete Cutting'} cards={ConcreteCutting} showBrand="true" />
            } 
          />
          <Route exact path="/products/pipe-cutting" component={
              () => <ContentPage title={'Pipe Cutting'} cards={PipeCutting} showBrand="true" />
            } 
          />
          <Route exact path="/products/steel-cutting" component={() => <PLP title={'Steel Cutting'} />} />
          <Route exact path="/products/power-supply" component={() => <PLP title={'Power Supply'} />} />

          {/* Type Routes */} 
          <Route exact path="/products" component={() => <PLP title={'All Products'} />} />
          <Route exact path="/products/power-cutters" component={
              () => <ContentPage title={'Power Cutters'} cards={[AllChainSaws]} showBrand="true" />
            } 
          />
          <Route exact path="/products/flat-saws" component={
              () => <ContentPage title={'Flat Saws'} cards={[FlatSaws]} showBrand="true" />
            } 
          />
          <Route exact path="/products/wall-wire-saws" component={
              () => <ContentPage title={'Wall/Wire Saws'} cards={WallWireSaws} showBrand="true" />
            } 
          />
          <Route exact path="/products/diamond-chains" component={
              () => <ContentPage title={'Diamond Chains'} cards={[DiamondChains]} showBrand="true" />
            } 
          />
          <Route exact path="/products/parts-accessories" component={
              () => <ContentPage title={'Parts & Accessories'} cards={AllParts} />
            } 
          />
          
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
