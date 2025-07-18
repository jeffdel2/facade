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

const THEME_STORAGE_KEY = 'selected-theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialThemeType = 'retail'
}) => {
  // Get saved theme from localStorage or use initial theme
  const getSavedTheme = (): ThemeType => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      return saved && themes[saved as ThemeType] ? (saved as ThemeType) : initialThemeType;
    } catch {
      return initialThemeType;
    }
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(() => {
    const savedThemeType = getSavedTheme();
    return themes[savedThemeType];
  });

  const setThemeType = (type: ThemeType) => {
    setCurrentTheme(themes[type]);
    // Save to localStorage
    try {
      localStorage.setItem(THEME_STORAGE_KEY, type);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
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