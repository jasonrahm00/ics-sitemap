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
import * as CardData from './data';

function App() {
  return (
    <Router>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <main>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products/ics" component={
            () => <ContentPage title={'ICS Brand'} cards={CardData.icsCards} />
          } />
          <Route exact path="/products/merit" component={
            () => <ContentPage title={'Merit Brand'} cards={CardData.meritCards} />
          } />
          <Route exact path="/products/pentruder" component={
            () => <ContentPage title={'Pentruder Brand'} cards={CardData.pentruderCards} />
          } />
          <Route exact path="/products/concrete-cutting" component={
            () => <ContentPage title={'Concrete Cutting'} />
          } />
          <Route exact path="/products/pipe-cutting" component={() => <ContentPage title={'Pipe Cutting'} />} />
          <Route exact path="/products/steel-cutting" component={() => <ContentPage title={'Steel Cutting'} />} />
          <Route exact path="/products/power-supply" component={() => <ContentPage title={'Power Supply'} />} />
          <Route exact path="/products" component={() => <PLP title={'All Products'} />} />
          <Route exact path="/products/power-cutters" component={() => <ContentPage title={'Power Cutters'} />} />
          <Route exact path="/products/flat-saws" component={() => <ContentPage title={'Flat Saws'} />} />
          <Route exact path="/products/wall-wire-saws" component={() => <ContentPage title={'Wall/Wire Saws'} />} />
          <Route exact path="/products/diamond-chains" component={() => <ContentPage title={'Diamond Chains'} />} />
          <Route exact path="/products/parts-accessories" component={() => <PLP title={'Parts & Accessories'} />} />
          <Route exact path="/pdp" component={() => <PDP title={'Product'} />} />
          <Route exact path="/plp" component={() => <PLP/>} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
