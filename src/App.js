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
import CategoryContent from "./components/pages/categoryContentPage";

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
    <Router forceRefresh={true}>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <main>
        <ScrollToTop />
        <Switch>

          {/* Base Routes */}
          <Route exact path="/"> <Homepage /></Route>
          <Route exact path="/pdp" render={() => <PDP title={'Product'} />} />
          <Route exact path="/plp" renderr={() => <PLP/>} />
          <Route exact path="/category-content" render={() => <CategoryContent/>} />

          {/* Brand Routes */}
          <Route exact path="/products/ics" render={() => <ContentPage title={'ICS Brand'} cards={ICSBrandCards} />} />  
          <Route exact path="/products/merit" render={() => <ContentPage title={'Merit Brand'} cards={MeritBrandCards} />} />  
          <Route exact path="/products/pentruder" render={() => <ContentPage title={'Pentruder Brand'} cards={PentruderBrandCards} />} />  

          {/* Use Routes */}    
          <Route exact path="/products/concrete-cutting" render={
              () => <ContentPage title={'Concrete Cutting'} cards={ConcreteCutting} showBrand="true" />
            } 
          />
          <Route exact path="/products/pipe-cutting" render={
              () => <ContentPage title={'Pipe Cutting'} cards={PipeCutting} showBrand="true" />
            } 
          />
          <Route exact path="/products/steel-cutting" render={() => <PLP title={'Steel Cutting'} />} />
          <Route exact path="/products/power-supply" render={() => <PLP title={'Power Supply'} />} />

          {/* Type Routes */} 
          <Route exact path="/products" render={() => <PLP title={'All Products'} />} />
          <Route exact path="/products/power-cutters" render={
              () => <ContentPage title={'Power Cutters'} cards={[AllChainSaws]} showBrand="true" />
            } 
          />
          <Route exact path="/products/flat-saws" render={
              () => <ContentPage title={'Flat Saws'} cards={[FlatSaws]} showBrand="true" />
            } 
          />
          <Route exact path="/products/wall-wire-saws" render={
              () => <ContentPage title={'Wall/Wire Saws'} cards={WallWireSaws} showBrand="true" />
            } 
          />
          <Route exact path="/products/diamond-chains" render={
              () => <ContentPage title={'Diamond Chains'} cards={[DiamondChains]} showBrand="true" />
            } 
          />
          <Route exact path="/products/parts-accessories" render={
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
