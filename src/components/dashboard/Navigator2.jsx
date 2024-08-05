import * as React from 'react';
import axios from "axios";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';


// import Tutorial from '../tutorial/Tutorial';
//import Chart1 from '../chart/Chart1';
//import Grid1 from '../grid/Grid1';
import Municipio from '../municipio/Municipio';
import Departamento from '../departamento/Departamento';
import Pais from '../pais/Pais';
//importar el productopresentacion, produccion y kardex 
import Kardex from '../kardex/Kardex';
import ProductoPresentacion from '../producto_presentacion/ProductoPresentacion';
import Produccion from '../produccion/Produccion';
import KardexItem from '../kardex_item/KardexItem';
import Reportes from '../reportes/Reportes';



const baseURL = "./menu.json";

var icons = {
  People: <PeopleIcon />,
  DnsRounded: <DnsRoundedIcon />,
  PermMediaOutlined: <PermMediaOutlinedIcon />,
  Public: <PublicIcon />,
  SettingsEthernet: <SettingsEthernetIcon />,
  SettingsInputComponent: <SettingsInputComponentIcon />,
  Settings: <SettingsIcon />,
  Timer: <TimerIcon />,
  PhonelinkSetup: <PhonelinkSetupIcon />,
  ProductionQuantityLimitsIcon: <ProductionQuantityLimitsIcon />,
  AddShoppingCartIcon: <AddShoppingCartIcon/>
};

var components = {
  pais: <Pais />,
  departamento: <Departamento />,
  municipio: <Municipio />,
  producto_presentacion:<ProductoPresentacion/>,
  produccion:<Produccion/>,
  kardex: <Kardex />,
  KardexItem: <KardexItem />,
  Reportes: <Reportes/>



};

let menu_items = [
  {
    id: "",
    text: '',
    icon:"",
    children:[]
  }
];

export default function Navigator2(props) {
  const [menuItems, setMenuItems] = React.useState(menu_items);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      // categories = JSON.stringify(response.data);
      // categories = response.data;
      // let data = JSON.parse(response.data);
      console.log("m: " + response.data);
      setMenuItems(response.data);
    });
  }, []);
  
  return (
    <List component="nav">
      {menuItems.map(({ id, text, icon, children }) => (
        <Box key={id}>
          <ListItem>
            <ListItemIcon>{icons[icon]}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
          {children.map(({ id: childId, text: childText, icon: childIcon, active }) => (
            <ListItem disablePadding key={childId}
              id={childId}
              onClick={(event) => {
                let _id = event.currentTarget.id;
                console.log(_id);
                props.setCurrentModule(components[_id]);
              }}
              >
              <ListItemButton selected={active}>
                <ListItemIcon>{icons[childIcon]}</ListItemIcon>
                <ListItemText>{childText}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      ))}
      <Divider sx={{ my: 1 }} />
    </List>
  );
}
