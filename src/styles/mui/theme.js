import { createTheme } from '@mui/material/styles';

import BlueberryTTF from '@Assets/fonts/blueberry.ttf';

const theme = createTheme({
  palette: {
    primary: { main: '#7eb8da', contrastText: '#fff' },
    secondary: { main: '#404040' },
    text: {
      primary: '#404040',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h5: {
      color: '#404040',
    },
    display5: {
      fontFamily: 'Blueberry Regular',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Blueberry Regular'
          font-styles: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Blueberry Regular'), url(${BlueberryTTF} format('truetype'));
        }
      `,
    },
  },
});

export default theme;
