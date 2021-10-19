import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HeaderNav from './components/base/header/header-nav/headerNav';
import MainNav from './components/base/header/main-nav/mainNav';
import Footer from './components/base/footer/footer';
import ScrollToTop from "./utility/scrollToTop";

import baseRoutes from "./routing/baseRoutes";
import brandRoutes from "./routing/brandRoutes";
import typeRoutes from "./routing/typeRoutes";
import useRoutes from "./routing/useRoutes";

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
          {baseRoutes.map((entry, index) => {
            return (
              <Route key={'base' + index} exact {...entry} />
            )
          })}

          {/* Brand Routes */}
          {brandRoutes.map((entry, index) => {
            return (
              <Route key={'brand' + index} exact {...entry} />
            )
          })}

          {/* Use Routes */}
          {useRoutes.map((entry, index) => {
            return (
              <Route key={'brand' + index} exact {...entry} />
            )
          })}
            
          {/* Type Routes */}
          {typeRoutes.map((entry, index) => {
            return (
              <Route key={'brand' + index} exact {...entry} />
            )
          })}
          
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
