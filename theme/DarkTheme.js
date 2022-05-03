import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          padding: '0px 20px 0px 20px',
          backgroundColor: 'black',
          color: 'white',
        },
      },
    },
  },
});

export default DarkTheme;
