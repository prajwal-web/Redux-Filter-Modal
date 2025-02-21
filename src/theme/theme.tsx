import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61',
      light: '#ffa092',
      dark: '#c53c3f',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2f4858',
      light: '#547c8c',
      dark: '#001f2d',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: '#aaaaaa'
    },
    error: {
      main: '#d32f2f'
    },
    warning: {
      main: '#ffa000'
    },
    info: {
      main: '#1976d2'
    },
    success: {
      main: '#388e3c'
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      fontFamily: 'Arvo',
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      fontFamily: 'Arvo',
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      fontFamily: 'Arvo',
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      fontFamily: 'Lato',
      lineHeight: 1.5
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      fontFamily: 'Lato',
      lineHeight: 1.6
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'Lato',
      lineHeight: 1.7
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'Lato',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.875rem',
      fontFamily: 'Lato',
      fontWeight: 400
    },
    button: {
      textTransform: 'uppercase',
      fontFamily: 'Lato',
      fontWeight: 600
    },
    caption: {
      fontSize: '0.75rem',
      fontFamily: 'Lato',
      fontWeight: 400
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
      fontFamily: 'Lato',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px'
        },
        containedPrimary: {
          backgroundColor: '#ff6f61',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#e65c4f'
          }
        },
        containedSecondary: {
          backgroundColor: '#2f4858',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#243745'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#333333',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#333333'
        },
        h2: {
          color: '#2f4858'
        },
        body1: {
          color: '#555555'
        }
      }
    }
  },
  shape: {
    borderRadius: 8
  },
  spacing: 8
});
export default theme;
