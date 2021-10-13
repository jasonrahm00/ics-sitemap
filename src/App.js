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
import * as CardData from './data';

function App() {
  return (
    <Router>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products/ics" component={
            () => <ContentPage title={'ICS Brand'} breadcrumb={'Home > Products > ICS'} cards={CardData.icsCards} />
          } />
          <Route exact path="/products/merit" component={
            () => <ContentPage title={'Merit Brand'} breadcrumb={'Home > Products > Merit'} cards={CardData.meritCards} />
          } />
          <Route exact path="/products/pentruder" component={() => <ContentPage title={'Pentruder Brand'} breadcrumb={'Home > Products > Pentruder'} />} />
          <Route exact path="/products/concrete-cutting" component={() => <ContentPage title={'Concrete Cutting'} breadcrumb={'Home > Products > Concrete Cutting'} />} />
          <Route exact path="/products/pipe-cutting" component={() => <ContentPage title={'Pipe Cutting'} breadcrumb={'Home > Products > Pipe Cutting'} />} />
          <Route exact path="/products/steel-cutting" component={() => <ContentPage title={'Steel Cutting'} breadcrumb={'Home > Products > Steel Cutting'} />} />
          <Route exact path="/products/power-supply" component={() => <ContentPage title={'Power Supply'} breadcrumb={'Home > Products > Power Supply'} />} />
          <Route exact path="/products" component={() => <PLP title={'All Products'} breadcrumb={'Home > Products'} />} />
          <Route exact path="/products/power-cutters" component={() => <ContentPage title={'Power Cutters'} breadcrumb={'Home > Products > Power Cutters'} />} />
          <Route exact path="/products/flat-saws" component={() => <ContentPage title={'Flat Saws'} breadcrumb={'Home > Products > Flat Saws'} />} />
          <Route exact path="/products/wall-wire-saws" component={() => <ContentPage title={'Wall/Wire Saws'} breadcrumb={'Home > Products > Wall Wire Saws'} />} />
          <Route exact path="/products/diamond-chains" component={() => <ContentPage title={'Diamond Chains'} breadcrumb={'Home > Products > Diamond Chains'} />} />
          <Route exact path="/products/parts-accessories" component={() => <PLP title={'Parts & Accessories'} breadcrumb={'Home > Products > Parts & Accessories'} />} />
          <Route exact path="/pdp" component={() => <PDP title={'Product'} breadcrumb={'Home > Products > Product'} />} />
          <Route exact path="/plp" component={() => <PLP breadcrumb={'Home > Products > PLP'} />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
