import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import LandingPage from './ui/landingPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
