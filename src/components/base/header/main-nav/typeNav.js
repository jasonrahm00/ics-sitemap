import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

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
        <MenuItem onClick={handleClose}><Link href="/products">All Products</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/products/power-cutters">Power Cutters</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/products/flat-saws">Flat Saws</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/products/wall-wire-saws">Wall/Wire Saws</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/products/diamond-chains">Diamond Chains</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/products/parts-accessories">Parts and Accessories</Link></MenuItem>
      </Menu>
    </>
  );
}

export default TypeNav;