import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import './mainNav.css';
import BrandNav from './brandNav';
import UseNav from './useNav';
import TypeNav from './typeNav';

function MainNav() {

  return (
    <nav id="main-nav" className="content-wrapper">
      <MenuList>
        <MenuItem>
          <BrandNav />
        </MenuItem>
        <MenuItem>
          <UseNav />
        </MenuItem>
        <MenuItem>
          <TypeNav />
        </MenuItem>
        <MenuItem>
          <Button href="/">Cusomer Support</Button>
        </MenuItem>
        <MenuItem>
          <Button href="/">Success Stories</Button>
        </MenuItem>
      </MenuList>
    </nav>
  );

}

export default MainNav;