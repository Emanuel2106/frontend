// //se usa
// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';

// // const drawerWidth = 240;
// import {SiteProps} from './SiteProps';

// export const AppBar = (
//     styled(MuiAppBar, {
//         shouldForwardProp: (prop) => prop !== 'open',
//     })(({ theme, open }) => ({
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//         }),
//         ...(open && {
//         marginLeft: SiteProps.drawerWidth,
//         width: `calc(100% - ${SiteProps.drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         }),
//     }))
// );


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from './Logout';

function AppBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Universidad Surcolombiana
        </Typography>
        <Button color="inherit" onClick={Logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar;

