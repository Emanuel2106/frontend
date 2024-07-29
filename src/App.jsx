// // import * as React from 'react';
// // import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// // import Container from '@mui/material/Container';
// // import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import { AppBar } from './components/dashboard/AppBar';
// // import { Drawer } from './components/dashboard/Drawer';
// // import Copyright from './components/dashboard/Copyright';
// // import Navigator2 from './components/dashboard/Navigator2';
// // import Grid1 from './components/grid/Grid1';
// // import { SiteProps } from './components/dashboard/SiteProps';
// // import './index.css'; // Asegúrate de importar el archivo CSS

// // const defaultTheme = createTheme();

// // export default function Dashboard() {
// //   const [open, setOpen] = React.useState(true);
// //   const toggleDrawer = () => {
// //     setOpen(!open);
// //   };

// //   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
// //         <CssBaseline />
// //         <AppBar position="absolute" open={open}>
// //           <Toolbar
// //             sx={{
// //               pr: '24px', // keep right padding when drawer closed
// //             }}
// //           >
// //             <IconButton
// //               edge="start"
// //               color="inherit"
// //               aria-label="open drawer"
// //               onClick={toggleDrawer}
// //               sx={{
// //                 marginRight: '36px',
// //                 ...(open && { display: 'none' }),
// //               }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography
// //               component="h1"
// //               variant="h6"
// //               color="inherit"
// //               noWrap
// //               sx={{ flexGrow: 1 }}
// //             >
// //               {SiteProps.appName}
// //             </Typography>
// //             <IconButton color="inherit">
// //               <Badge badgeContent={4} color="secondary">
// //                 <NotificationsIcon />
// //               </Badge>
// //             </IconButton>
// //           </Toolbar>
// //         </AppBar>
// //         <Drawer variant="permanent" open={open}>
// //           <Toolbar
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'flex-end',
// //               px: [1],
// //             }}
// //           >
// //             <IconButton onClick={toggleDrawer}>
// //               <ChevronLeftIcon />
// //             </IconButton>
// //           </Toolbar>
          
// //           <Navigator2 setCurrentModule={setCurrentModule} />
// //         </Drawer>
// //         <Box
// //           component="main"
// //           sx={{
// //             backgroundColor: (theme) =>
// //               theme.palette.mode === 'light'
// //                 ? theme.palette.grey[100]
// //                 : theme.palette.grey[900],
// //             flexGrow: 1,
// //             height: '100vh',
// //             overflow: 'auto',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //           }}
// //         >
// //           <Toolbar />
// //           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //             <Grid container spacing={3}>
// //               {/* Module */}
// //               <Grid item xs={12}>
// //                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
// //                   {currentModule}
// //                 </Paper>
// //               </Grid>
// //             </Grid>
// //             <Copyright sx={{ pt: 4 }} />
// //           </Container>
// //         </Box>
// //       </Box>
// //     </ThemeProvider>
// //   );
// // }








// //v1
// // import * as React from 'react';
// // import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // // import MuiDrawer from '@mui/material/Drawer';
// // import Box from '@mui/material/Box';
// // // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// // import Container from '@mui/material/Container';
// // import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// // // import Link from '@mui/material/Link';


// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // // import { mainListItems, secondaryListItems } from './listItems';


// // import {AppBar} from './components/dashboard/AppBar';
// // import {Drawer} from './components/dashboard/Drawer';
// // import Copyright from './components/dashboard/Copyright';
// // import Navigator2 from './components/dashboard/Navigator2';


// // // import Tutorial from './components/tutorial/Tutorial';
// // // import Chart1 from './components/chart/Chart1';
// // import Grid1 from './components/grid/Grid1';
// // import './index.css';

// // // import Chart from './components/chart/Chart';
// // // import Deposits from './components/chart/Deposits';
// // // import Orders from './components/grid/Orders';


// // import {SiteProps} from './components/dashboard/SiteProps';

// // // TODO remove, this demo shouldn't need to reset the theme.
// // const defaultTheme = createTheme();

// // export default function Dashboard() {
// //   const [open, setOpen] = React.useState(true);
// //   const toggleDrawer = () => {
// //     setOpen(!open);
// //   };

// //   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Box sx={{ display: 'flex' }}>
// //         <CssBaseline />
// //         <AppBar position="absolute" open={open}>
// //           <Toolbar
// //             sx={{
// //               pr: '24px', // keep right padding when drawer closed
// //             }}
// //           >
// //             <IconButton
// //               edge="start"
// //               color="inherit"
// //               aria-label="open drawer"
// //               onClick={toggleDrawer}
// //               sx={{
// //                 marginRight: '36px',
// //                 ...(open && { display: 'none' }),
// //               }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography
// //               component="h1"
// //               variant="h6"
// //               color="inherit"
// //               noWrap
// //               sx={{ flexGrow: 1 }}
// //             >
// //               {SiteProps.appName}
// //             </Typography>
// //             <IconButton color="inherit">
// //               <Badge badgeContent={4} color="secondary">
// //                 <NotificationsIcon />
// //               </Badge>
// //             </IconButton>
// //           </Toolbar>
// //         </AppBar>
// //         <Drawer variant="permanent" open={open}>
// //           <Toolbar
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'flex-end',
// //               px: [1],
// //             }}
// //           >
// //             <IconButton onClick={toggleDrawer}>
// //               <ChevronLeftIcon />
// //             </IconButton>
// //           </Toolbar>
// //           <Divider />
          
// //           <Navigator2 setCurrentModule={setCurrentModule}/>

// //         </Drawer>

// //         <Box
// //           component="main"
// //           sx={{
// //             backgroundColor: (theme) =>
// //               theme.palette.mode === 'dark'
// //                 ? theme.palette.grey[100]
// //                 : theme.palette.grey[500],
// //             flexGrow: 1,
// //             height: '100vh',
// //             width: '250%',
// //             overflow: 'auto',
// //           }}
// //         >
// //           <Toolbar />
// //           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , width:'150%', height: '100%'}}>
// //             <Grid container spacing={3}>

// //               {/* Module */}
// //               <Grid item xs={12}>
// //                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
// //                   {currentModule}               
// //                 </Paper>
// //               </Grid>

// //            </Grid>
// //             <Copyright sx={{ pt: 4 }} />
// //           </Container>
// //         </Box>
// //       </Box>
// //     </ThemeProvider>
// //   );
// // }








// //funcional v8

// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// //import Divider from '@mui/material/Divider';
// import { AppBar } from './components/dashboard/AppBar';
// import { Drawer } from './components/dashboard/Drawer';
// import Copyright from './components/dashboard/Copyright';
// import Navigator2 from './components/dashboard/Navigator2';
// import Grid1 from './components/grid/Grid1';
// import './index.css';
// import { SiteProps } from './components/dashboard/SiteProps';

// // const defaultTheme = createTheme();

// // export default function Dashboard() {
// //   const [open, setOpen] = React.useState(true);
// //   const toggleDrawer = () => {
// //     setOpen(!open);
// //   };

// //   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
// //         <CssBaseline />
// //         <AppBar position="absolute" open={open}>
// //           <Toolbar
// //             sx={{
// //               pr: '24px', // keep right padding when drawer closed
// //             }}
// //           >
// //             <IconButton
// //               edge="start"
// //               color="inherit"
// //               aria-label="open drawer"
// //               onClick={toggleDrawer}
// //               sx={{
// //                 marginRight: '36px',
// //                 ...(open && { display: 'none' }),
// //               }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography
// //               component="h1"
// //               variant="h6"
// //               color="inherit"
// //               noWrap
// //               sx={{ flexGrow: 1 }}
// //             >
// //               {SiteProps.appName}
// //             </Typography>
// //             <IconButton color="inherit">
// //               <Badge badgeContent={4} color="secondary">
// //                 <NotificationsIcon />
// //               </Badge>
// //             </IconButton>
// //           </Toolbar>
// //         </AppBar>
// //         <Drawer variant="permanent" open={open}>
// //           <Toolbar
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'flex-end',
// //               px: [1],
// //             }}
// //           >
// //             <IconButton onClick={toggleDrawer}>
// //               <ChevronLeftIcon />
// //             </IconButton>
// //           </Toolbar>
// //          {/<Divider />/} 
// //           <Navigator2 setCurrentModule={setCurrentModule} />
// //         </Drawer>
// //         <Box
// //           component="main"
// //           sx={{
// //             backgroundColor: (theme) =>
// //               theme.palette.mode === 'light'
// //                 ? theme.palette.grey[100]
// //                 : theme.palette.grey[100],
// //             flexGrow: 1,
// //             height: '100vh',
// //             overflow: 'auto',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //           }}
// //         >
// //           <Toolbar /> 
// //           <Container
// //             maxWidth={false}
// //             sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)', justifyContent: 'center' }}
// //           >
// //                {/* Module */}
// //                <Grid item xs={12}>
// //                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
// //                    {currentModule}               
// //                  </Paper>
// //                </Grid>

            
// //              <Copyright sx={{ pt: 2, pb: 2}} />
// //           </Container>
// //         </Box>
// //       </Box>
// //     </ThemeProvider>
// //   );
// // }






// // // src/dashboard/Dashboard.jsx
// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// // import Container from '@mui/material/Container';
// // import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import { AppBar } from './AppBar';
// // import { Drawer } from './Drawer';
// // import Copyright from './Copyright';
// // import Navigator2 from './Navigator2';
// // import Grid1 from '../grid/Grid1';
// import Switch from '@mui/material/Switch';
// import { useThemeToggle } from './components/dashboard/ThemeToggleProvider.jsx';
// // import './index.css';
// // import { SiteProps } from './SiteProps';

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
//   const toggleTheme = useThemeToggle();

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
//           {/* Module */}
//           <Grid item xs={12}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//               {currentModule}
//             </Paper>
//           </Grid>
//           <Copyright sx={{ pt: 2, pb: 2 }} />
//         </Container>
//       </Box>
//     </Box>
//   );
// }



//funcional v1

// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { AppBar } from './components/dashboard/AppBar';
// import { Drawer } from './components/dashboard/Drawer';
// import Copyright from './components/dashboard/Copyright';
// import Navigator2 from './components/dashboard/Navigator2';
// import Grid1 from './components/grid/Grid1';
// import './index.css';
// import { SiteProps } from './components/dashboard/SiteProps';
// import Switch from '@mui/material/Switch';
// import { useThemeToggle } from './components/dashboard/ThemeToggleProvider.jsx';

// const App = () => {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
//   const toggleTheme = useThemeToggle();

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
//               {currentModule}
//             </Paper>
//           </Grid>
//           <Copyright sx={{ pt: 2, pb: 2 }} />
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default App;



//funcionalv2
// import React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { AppBar } from './components/dashboard/AppBar';
// import { Drawer } from './components/dashboard/Drawer';
// import Copyright from './components/dashboard/Copyright';
// import Navigator2 from './components/dashboard/Navigator2';
// import Grid1 from './components/grid/Grid1';
// import Login from './components/Login';
// import Switch from '@mui/material/Switch';
// import { useThemeToggle } from './components/dashboard/ThemeToggleProvider.jsx';
// import './index.css';
// import { SiteProps } from './components/dashboard/SiteProps';

// const App = () => {
//   const [open, setOpen] = React.useState(true);
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
//   const toggleTheme = useThemeToggle();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   if (!isAuthenticated) {
//     return <Login onLogin={handleLogin} />;
//   }

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
//           sx={{
//             mt: 4,
//             mb: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 'calc(100% - 64px)',
//             justifyContent: 'center',
//           }}
//         >
//           <Grid item xs={12}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//               {currentModule}
//             </Paper>
//           </Grid>
//           <Copyright sx={{ pt: 2, pb: 2 }} />
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default App;


//funcional v3
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import './index.css';

const App = () => {
  const [open, setOpen] = React.useState(true);
  const [currentModule, setCurrentModule] = React.useState(<Grid1 />);
  const toggleTheme = useThemeToggle();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <CssBaseline />
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
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <Toolbar />
        <Container
          maxWidth={false}
          sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)', justifyContent: 'center' }}
        >
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Routes>
                <Route path="/" element={currentModule} />
                {/* Agrega más rutas si es necesario */}
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
