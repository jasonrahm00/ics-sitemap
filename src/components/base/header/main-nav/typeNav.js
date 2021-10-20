import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Link} from 'react-router-dom';
import MenuList from '@mui/material/MenuList';

import './mainNav.css';
import sharedLinks from '../../reusableNavLinks';

function TypeNav() {

  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget.id);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (

    <>
      <Button id="shop-type" onClick={handleClick} className="submenu-trigger">Shop by Type</Button>
      { open === 'shop-type' ? (
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList className="submenu">
            <MenuItem onClick={handleClose}>
              <Link to={{pathname: '/products', state: { products: ['All Products'], pageTitle: 'All Products'}}}>All Products</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>{sharedLinks.powerCutters}</MenuItem>
            <MenuItem onClick={handleClose}>{sharedLinks.flatSaws}</MenuItem>
            <MenuItem onClick={handleClose}>{sharedLinks.wallWireSaws}</MenuItem>
            <MenuItem onClick={handleClose}>{sharedLinks.diamondChains}</MenuItem>
            <MenuItem onClick={handleClose}>{sharedLinks.partsAccessories}</MenuItem>
          </MenuList>
        </ClickAwayListener>
      ) : ''}
    </>
  );
}

export default TypeNav;