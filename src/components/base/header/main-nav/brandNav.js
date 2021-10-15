import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Link} from 'react-router-dom';
import MenuList from '@mui/material/MenuList';

import './mainNav.css';
 
function BrandNav() {

  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget.id);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button id="shop-brand" onClick={handleClick} className="submenu-trigger">Shop by Brand</Button>
      { open === 'shop-brand' ? (
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList className="submenu">
            <MenuItem onClick={handleClose}>
              <Link to='/products/ics'>ICS</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/products/merit'>Merit</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/products/pentruder'>Pentruder</Link>
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      ) : ''}
    </>
  );
}

export default BrandNav;