import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';

import './mainNav.css';

import mainNavData from './mainNavData';

function MainNav() {

  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget.id);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <nav id="main-nav" className="content-wrapper">
      <MenuList>
        {mainNavData.map(topLevelNode => {
          let triggerId = topLevelNode.topLevelLink.anchorText.toLowerCase().split(' ').join('-');
          return (
            <MenuItem key={triggerId}>
              {topLevelNode.submenuLinks.length < 1 ? (
                <Button href={topLevelNode.topLevelLink.targetUrl}>{topLevelNode.topLevelLink.anchorText}</Button>
              ) : (
                <>
                  <Button 
                    id={triggerId} 
                    onClick={handleClick}>
                      {topLevelNode.topLevelLink.anchorText}
                  </Button>
                  { open === triggerId ? (
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList className="submenu">
                        {topLevelNode.submenuLinks.map((link, index) => {
                          return (
                            <MenuItem onClick={handleClose} key={index}>
                              {link}
                            </MenuItem>
                          )
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  ) : ''}
                </>
              )}
            </MenuItem>
          )
        })}
      </MenuList>
    </nav>
  );

}

export default MainNav;