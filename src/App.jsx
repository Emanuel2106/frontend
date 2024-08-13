


//funcional v4 
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, CssBaseline, Badge, Paper, Grid } from '@mui/material';
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
import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
// import Home2 from './components/Home2';
import Button from '@mui/material/Button';
import Logout from './components/Logout';
import './index.css';
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
  const toggleTheme = useThemeToggle();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <CssBaseline />
      {isAuthenticated && (
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {SiteProps.appName}
            </Typography>
            <Switch onChange={toggleTheme} />
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <Button color="inherit" onClick={Logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      )}
      {isAuthenticated && (
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
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
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      {/* <Home2/>
       */}
      
        <Toolbar />
        <Container
          maxWidth={false}
          sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)', justifyContent: 'center' }}
        >
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Routes>
                <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                <Route path="/" element={isAuthenticated ? currentModule : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/login" />} />
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










// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Typography, Container, Box, CssBaseline, Badge, Paper, Grid } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Drawer } from './components/dashboard/Drawer';
// import Copyright from './components/dashboard/Copyright';
// import Navigator2 from './components/dashboard/Navigator2';
// import Grid1 from './components/grid/Grid1';
// import { SiteProps } from './components/dashboard/SiteProps';
// import Switch from '@mui/material/Switch';
// import { useThemeToggle } from './components/dashboard/ThemeToggleProvider';
// import './index.css';

// const App = ({ username }) => {
//   const [open, setOpen] = React.useState(true);
//   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
//   const toggleTheme = useThemeToggle();

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
//       <CssBaseline />
//       <AppBar position="absolute" open={open}>
//         <Toolbar
//           sx={{
//             pr: '24px', // keep right padding when drawer closed
//           }}
//         >
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={toggleDrawer}
//             sx={{
//               marginRight: '36px',
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             sx={{ flexGrow: 1 }}
//           >
//             {SiteProps.appName}
//           </Typography>
//           <Switch onChange={toggleTheme} />
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <Toolbar
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             px: [1],
//           }}
//         >
//           <IconButton onClick={toggleDrawer}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </Toolbar>
//         <Navigator2 setCurrentModule={setCurrentModule} />
//       </Drawer>
//       <Box
//         component="main"
//         sx={{
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'light'
//               ? theme.palette.grey[100]
//               : theme.palette.grey[900],
//           flexGrow: 1,
//           height: '100vh',
//           overflow: 'auto',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Toolbar />
//         <Container
//           maxWidth={false}
//           sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)', justifyContent: 'center' }}
//         >
//           <Grid item xs={12}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//               <Typography component="h1" variant="h5">
//                 Bienvenido {username}
//               </Typography>
//               <Routes>
//                 <Route path="/" element={currentModule} />
//                 {/* Agrega más rutas si es necesario */}
//               </Routes>
//             </Paper>
//           </Grid>
//           <Copyright sx={{ pt: 2, pb: 2 }} />
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default App;
