import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#FF8C00",
    },
    secondary: {
      main: "#FF8C00",
    },
    background: {
      default: "#080808",
      paper: "#111114",
    },
    text: {
      primary: "#F5F5F7",
      secondary: "#A0A0A8",
    }
  },
  typography: {
    fontFamily: "'Sora', 'DM Sans', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          letterSpacing: 0.3,
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
