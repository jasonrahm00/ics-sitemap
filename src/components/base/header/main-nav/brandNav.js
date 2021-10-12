import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './mainNav.css';

function BrandNav() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="shop-brand-trigger"
        aria-controls="shop-by-brand"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Shop by Brand
      </Button>
      <Menu
        id="shop-by-brand"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'shop-brand-trigger',
        }}
      >
        <MenuItem onClick={handleClose}>ICS</MenuItem>
        <MenuItem onClick={handleClose}>Merit</MenuItem>
        <MenuItem onClick={handleClose}>Pentruder</MenuItem>
      </Menu>
    </>
  );
}

export default BrandNav;