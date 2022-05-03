import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import DarkModeContext from '../context/DarkModeContext';
import DarkTheme from '../theme/DarkTheme';
import LightTheme from '../theme/LightTheme';

export default function AppTheme({ children }) {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
