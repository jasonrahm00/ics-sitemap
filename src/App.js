import './App.css';

import HeaderNav from './components/base/header/header-nav/headerNav';
import MainNav from './components/base/header/main-nav/mainNav';
import Foooter from './components/base/footer/footer';
import Body from './components/base/body/body';

function App() {
  return (
    <>
      <header className="main">
        <HeaderNav />
        <MainNav />
      </header>
      <Body />
      <Foooter />
    </>
  );
}

export default App;
