import React from 'react';
import DarkModeContext from '../context/DarkModeContext';

export default function AppContext({ children }) {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode');

    if (localStorageDarkMode == null) {
      localStorage.setItem('darkMode', 'false');
    }

    setDarkMode(localStorageDarkMode === 'true');
  }, []);

  const darkModeMemo = React.useMemo(() => ({
    darkMode,
    setDarkMode: (mode) => {
      localStorage.setItem('darkMode', mode);
      setDarkMode(mode);
    },
  }), [darkMode]);

  return (
    <DarkModeContext.Provider value={darkModeMemo}>
      {children}
    </DarkModeContext.Provider>
  );
}
