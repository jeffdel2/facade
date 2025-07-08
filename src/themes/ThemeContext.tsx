import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { ThemeType, ThemeConfig } from './types';
import { themes } from './themes';

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setThemeType: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialThemeType?: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialThemeType = 'retail'
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(themes[initialThemeType]);

  const setThemeType = (type: ThemeType) => {
    setCurrentTheme(themes[type]);
  };

  const muiTheme = createTheme({
    palette: currentTheme.branding.palette,
  });

  return (
    <ThemeContext.Provider value={{ currentTheme, setThemeType }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 