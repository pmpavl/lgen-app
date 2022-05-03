import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          padding: '0px 20px 0px 20px',
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
  },
});

export default LightTheme;
