import React from 'react';
import { Grid as MuiGrid, GridProps } from '@mui/material';

interface CustomGridProps extends Omit<GridProps, 'item' | 'container'> {
  item?: boolean;
  container?: boolean;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

export const Grid: React.FC<CustomGridProps> = (props) => {
  return <MuiGrid {...props} />;
}; 