import './headerNav.css';
import logo from './ics-logo.png';

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
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;