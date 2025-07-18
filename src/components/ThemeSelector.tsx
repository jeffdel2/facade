import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useTheme } from '../themes/ThemeContext';
import { ThemeType } from '../themes/types';

const ThemeSelector: React.FC = () => {
  const { setThemeType } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (type: ThemeType) => {
    setThemeType(type);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="change theme"
        sx={{ color: 'inherit' }}
      >
        <PaletteIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-selector-button',
        }}
      >
        <MenuItem onClick={() => handleThemeChange('retail')}>Retail Store</MenuItem>
        <MenuItem onClick={() => handleThemeChange('themePark')}>Theme Park</MenuItem>
        <MenuItem onClick={() => handleThemeChange('telecom')}>Mobile Provider</MenuItem>
        <MenuItem onClick={() => handleThemeChange('hospitality')}>Luxury Hotels</MenuItem>
        <MenuItem onClick={() => handleThemeChange('medical')}>Medical Equipment</MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSelector; 