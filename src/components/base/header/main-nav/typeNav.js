import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Link} from 'react-router-dom';
import MenuList from '@mui/material/MenuList';

import './mainNav.css';

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
            <MenuItem onClick={handleClose}><Link to="/products/power-cutters">Power Cutters</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/products/flat-saws">Flat Saws</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/products/wall-wire-saws">Wall/Wire Saws</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/products/diamond-chains">Diamond Chains</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/products/parts-accessories">Parts and Accessories</Link></MenuItem>
          </MenuList>
        </ClickAwayListener>
      ) : ''}
    </>
  );
}

export default TypeNav;