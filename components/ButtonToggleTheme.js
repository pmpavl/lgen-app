import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Tooltip, IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeContext from '../context/DarkModeContext';

function ButtonToggleTheme() {
  const { darkMode, setDarkMode } = React.useContext(DarkModeContext);

  const { mode } = useTheme().palette;
  const titleTooltip = `${mode === 'light' ? 'Светлая' : 'Тёмная'} тема`;

  return (
    <Tooltip
      title={titleTooltip}
    >
      <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
        {mode === 'light' ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ButtonToggleTheme;
