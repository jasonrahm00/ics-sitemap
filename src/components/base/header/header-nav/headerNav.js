import './headerNav.css';
import logo from './ics-logo.png';
import SharedLinks from '../../reusable-nav-links';

function HeaderNav() {
  return (
    <nav id="global-header-nav" className="content-wrapper">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <ul>
        <li>{SharedLinks.findDealer}</li>
        <li><a>Sign In</a></li>
        <li><a>Cart</a></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;