// app/layout/Layout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Switch, Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Toggle dark mode and store the preference in localStorage
  const handleThemeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  // Create theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Countries App
          </Typography>
          {/* Dark Mode Toggle */}
          <Switch checked={darkMode} onChange={handleThemeToggle} />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={4}>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
