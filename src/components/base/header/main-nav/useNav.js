import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './mainNav.css';

function UseNav() {

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
        id="shop-use-trigger"
        aria-controls="shop-by-use"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Shop by Use
      </Button>
      <Menu
        id="shop-by-use"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'shop-use-trigger',
        }}
      >
        <MenuItem onClick={handleClose}>Concrete Cutting</MenuItem>
        <MenuItem onClick={handleClose}>Pipe Cutting</MenuItem>
        <MenuItem onClick={handleClose}>Steel Cutting</MenuItem>
        <MenuItem onClick={handleClose}>Power Supply</MenuItem>
      </Menu>
    </>
  );
}

export default UseNav;