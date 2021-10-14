import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Link} from 'react-router-dom';
import MenuList from '@mui/material/MenuList';

import './mainNav.css';

function UseNav() {

  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget.id);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button id="shop-use" onClick={handleClick} className="submenu-trigger">Shop by Use</Button>
      { open === 'shop-use' ? (
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList className="submenu">
          <MenuItem onClick={handleClose}><Link to="/products/concrete-cutting">Concrete Cutting</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/products/pipe-cutting">Pipe Cutting</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/products/steel-cutting">Steel Cutting</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/products/power-supply">Power Supply</Link></MenuItem>
          </MenuList>
        </ClickAwayListener>
      ) : ''}
    </>
  );
}

export default UseNav;