import {Link} from 'react-router-dom';

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
        <li><Link to="#">Sign In</Link></li>
        <li><Link to="#">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;