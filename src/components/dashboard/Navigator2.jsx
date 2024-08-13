import * as React from 'react';
import axios from "axios";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Importación de componentes de diferentes módulos
import Municipio from '../municipio/Municipio';
import Departamento from '../departamento/Departamento';
import Pais from '../pais/Pais';
import Kardex from '../kardex/Kardex';
import ProductoPresentacion from '../producto_presentacion/ProductoPresentacion';
import Produccion from '../produccion/Produccion';
import KardexItem from '../kardex_item/KardexItem';
import Reportes from '../reportes/Reportes';
import Persona from '../personas/Persona';

// URL base para obtener el menú
const baseURL = "./menu.json";

// Mapa de íconos para los elementos del menú
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
  AddShoppingCartIcon: <AddShoppingCartIcon />
};

// Mapa de componentes que se mostrarán al seleccionar un elemento del menú
var components = {
  pais: <Pais />,
  departamento: <Departamento />,
  municipio: <Municipio />,
  producto_presentacion: <ProductoPresentacion />,
  produccion: <Produccion />,
  kardex: <Kardex />,
  KardexItem: <KardexItem />,
  Reportes: <Reportes />,
  persona: <Persona />
};

// Estructura inicial de los elementos del menú
let menu_items = [
  {
    id: "",
    text: '',
    icon: "",
    children: []
  }
];

// Componente principal Navigator2
export default function Navigator2(props) {
  // Estado para almacenar los elementos del menú
  const [menuItems, setMenuItems] = React.useState(menu_items);

  // Efecto para obtener los elementos del menú desde un archivo JSON
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
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