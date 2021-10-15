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
import CategoryContentPage from "./components/pages/categoryContentPage";
import PDP from "./components/pages/pdp";
import PLP from "./components/pages/plp";
import ScrollToTop from "./utility/scrollToTop";

import BrandRoutes from "./routes/brandRoutes";

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
          <BrandRoutes />          
          <Route exact path="/products/concrete-cutting" component={
            () => <CategoryContentPage title={'Concrete Cutting'} />
          } />
          <Route exact path="/products/pipe-cutting" component={() => <CategoryContentPage title={'Pipe Cutting'} />} />
          <Route exact path="/products/steel-cutting" component={() => <CategoryContentPage title={'Steel Cutting'} />} />
          <Route exact path="/products/power-supply" component={() => <CategoryContentPage title={'Power Supply'} />} />
          <Route exact path="/products" component={() => <PLP title={'All Products'} />} />
          <Route exact path="/products/power-cutters" component={() => <CategoryContentPage title={'Power Cutters'} />} />
          <Route exact path="/products/flat-saws" component={() => <CategoryContentPage title={'Flat Saws'} />} />
          <Route exact path="/products/wall-wire-saws" component={() => <CategoryContentPage title={'Wall/Wire Saws'} />} />
          <Route exact path="/products/diamond-chains" component={() => <CategoryContentPage title={'Diamond Chains'} />} />
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
