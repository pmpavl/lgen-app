import {
  AppBar, Toolbar,
} from '@mui/material';
import ButtonGitHub from '../components/ButtonGitHub';
import ButtonLogo from '../components/ButtonLogo';
import ButtonToggleTheme from '../components/ButtonToggleTheme';

function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'start',
          flexGrow: 1,
        }}
      >
        <ButtonLogo />
      </Toolbar>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'end',
          flexGrow: 1,
        }}
      >
        <ButtonGitHub />
        <ButtonToggleTheme />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
