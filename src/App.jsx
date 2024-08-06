import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, CssBaseline, Badge, Paper, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Drawer } from './components/dashboard/Drawer';
import Copyright from './components/dashboard/Copyright';
import Navigator2 from './components/dashboard/Navigator2';
import Grid1 from './components/grid/Grid1';
import { SiteProps } from './components/dashboard/SiteProps';
import Switch from '@mui/material/Switch';
import { useThemeToggle } from './components/dashboard/ThemeToggleProvider';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import './index.css';

const App = () => {
  const [open, setOpen] = useState(true);
  const [currentModule, setCurrentModule] = useState(<Grid1 />);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleTheme = useThemeToggle();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    console.log('localStorage after logout:', localStorage.getItem('user')); // Esto debería ser null
    setIsAuthenticated(false);
    window.location.href = "/";  // Redirige a la página de inicio de sesión
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <CssBaseline />
      {isAuthenticated && (
        <AppBar position="absolute" open={open}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              {SiteProps.appName}
            </Typography>
            <Switch onChange={toggleTheme} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Toolbar>
        </AppBar>
      )}
      {isAuthenticated && (
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Navigator2 setCurrentModule={setCurrentModule} />
        </Drawer>
      )}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isAuthenticated && <Toolbar />}
        <Container
          maxWidth={false}
          sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)', justifyContent: 'center' }}
        >
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Routes>
                {!isAuthenticated ? (
                  <>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
                  </>
                ) : (
                  <Route path="/" element={currentModule} />
                )}
                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/"} replace />} />
              </Routes>
            </Paper>
          </Grid>
          <Copyright sx={{ pt: 2, pb: 2 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
