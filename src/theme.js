import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#A3BFFA',      // Periwinkle
      dark: '#6B8DD6',      // Deeper soft blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F3F4FF',      // Soft lilac paper bg
    },
    background: {
      default: '#FCFCFC',   // Cream white
      paper: '#F3F4FF',
    },
    text: {
      primary: '#2E2E2E',   // Rich dark gray
      secondary: '#6B7280', // Cool gray
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: '#6B8DD6',
            boxShadow: '0 4px 20px rgba(163, 191, 250, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3F4FF',
        },
      },
    },
  },
});

export default theme;
