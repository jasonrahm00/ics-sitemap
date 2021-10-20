import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import HeaderNav from './components/base/header/header-nav/headerNav';
import MainNav from './components/base/header/main-nav/mainNav';
import Footer from './components/base/footer/footer';
import ScrollToTop from "./utility/scrollToTop";
import RouterSwitch from "./components/base/routerSwitch";

function App() {
  return (
    <Router forceRefresh={true}>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <main>
        <ScrollToTop />
        <RouterSwitch />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
