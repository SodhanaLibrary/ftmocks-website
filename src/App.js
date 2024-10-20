import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getMPTheme from './theme/getMPTheme';
import TemplateFrame from './TemplateFrame';
import Generat from './components/Generat';
import Creating from './components/Creating';
import Home from './components/Home';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
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
          {/* <Hero /> */}
          {/* <LogoCollection /> */}
          <Route path="/"   element={<Home/>} />
          <Route path="/Features"   element={<Features/>} />
          <Route path="/Generat"   element={<Generat/>} /> 
          {/* <Testimonials /> */}
          <Route path="/Creating"   element={<Creating/>} /> 
          {/* <Highlights /> */}
          {/* <Pricing /> */}
          <Route path="/FAQ" element={ <FAQ />} />
          <Route path="/Footer" element={ <Footer />} />
          </Routes>
          </BrowserRouter>
      </ThemeProvider>
      
      
  );
}
