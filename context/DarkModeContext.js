import React from 'react';

const DarkModeContext = React.createContext({
  darkMode: Boolean,
  setDarkMode: () => { },
});

export default DarkModeContext;
