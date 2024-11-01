import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppAppBar from './components/AppAppBar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getMPTheme from './theme/getMPTheme';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Docs from './components/docs/Docs';
import ContactSupport from './components/ContactSupport';
import Contributors from './components/Contributors';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const MPTheme = createTheme(getMPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode('dark');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <AppAppBar />
          <Routes>
            <Route path="/"   element={<Home/>} />
            <Route path="/docs"   element={<Docs/>} /> 
            <Route path="/support"   element={<ContactSupport/>} /> 
            <Route path="/contributors"   element={<Box sx={{mt: 11}}>
              <Contributors repoOwner="SodhanaLibrary" repoName="ftmocks-server"/>
              <Contributors repoOwner="SodhanaLibrary" repoName="ftmocks-tool"/>
              <Contributors repoOwner="SodhanaLibrary" repoName="ftmocks-website"/>
            </Box>} /> 
            <Route path="/FAQ" element={ <FAQ />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
      
      
  );
}
