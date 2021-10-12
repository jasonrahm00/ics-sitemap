import Link from '@mui/material/Link';

import './mainNav.css';
import BrandNav from './brandNav';
import UseNav from './useNav';
import TypeNav from './typeNav';

function MainNav() {

  return (
    <nav id="main-nav" className="content-wrapper">
      <BrandNav />
      <UseNav />
      <TypeNav />
      <Link href="/">Customer Support</Link>
      <Link href="/">Success Stories</Link>
    </nav>
  );
}

export default MainNav;