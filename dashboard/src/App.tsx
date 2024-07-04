// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import Content from './components/Content';

const defaultTheme = createTheme();

function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* This display: flex can place navigation, menu and content nicely */}
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <Navigation open={open} toggleDrawer={toggleDrawer} />
        <Menu open={open} toggleDrawer={toggleDrawer} />
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
