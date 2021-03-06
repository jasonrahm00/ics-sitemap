import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import HeaderNav from './components/base/header/header-nav/headerNav';
import MainNav from './components/base/header/main-nav/mainNav';
import Footer from './components/base/footer/footer';
import ScrollToTop from "./utility/scrollToTop";
import AllRouteData from './data/route-data/allRouteData';

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
          {AllRouteData.map((route, index) => {
            return (
              <Route exact key={index} {...route} />
            )
          })}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
