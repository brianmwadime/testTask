import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#B7B7B7',
    },
    background: {
      default: '#21214F',
      paper: '#21214F',
    },
    primary: {
      main: '#21214F',
      dark: '#21214F',
      light: '#21214F',
      contrastText: '#000',
    },
    secondary: {
      main: '#21214F',
      dark: '#21214F',
      light: '#21214F',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#fff',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#6DC921',
    },
    grey: {
      500: '#A3A1A1'
    },
  },
  typography: {
    htmlFontSize: 14,
    fontSize: 16,
    fontFamily: 'Figtree, sans-serif',
    h1: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 500,
      fontSize: 50,
    },
    h2: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 40,
    },
    h3: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 50,
    },
    h4: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 24,
    },
    h5: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 500,
      fontSize: 24,
    },
    subtitle1: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 24,
    },
    subtitle2: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 20,
    },
    body1: {
      fontFamily: 'Figtree, sans-serif',
      fontWeight: 400,
      fontSize: 20,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          background: '#21214F',
          marginTop: '8px',
          borderRadius: '10px',
        },
        input: {
          fontSize: '18px',
          padding: '18px',
          '&.Mui-disabled': {
            textFillColor: 'rgba(68, 68, 109, 1)'
          }
        }
      }
    }
  }
});

export default Theme;
