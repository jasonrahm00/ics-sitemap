import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './mainNav.css';

function TypeNav() {

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
        id="shop-type-trigger"
        aria-controls="shop-by-type"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Shop by Type
      </Button>
      <Menu
        id="shop-by-type"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'shop-type-trigger',
        }}
      >
        <MenuItem onClick={handleClose}>All Products</MenuItem>
        <MenuItem onClick={handleClose}>Power Cutters</MenuItem>
        <MenuItem onClick={handleClose}>Flat Saws</MenuItem>
        <MenuItem onClick={handleClose}>Wall/Wire Saws</MenuItem>
        <MenuItem onClick={handleClose}>Diamond Chains</MenuItem>
        <MenuItem onClick={handleClose}>Parts and Accessories</MenuItem>
      </Menu>
    </>
  );
}

export default TypeNav;