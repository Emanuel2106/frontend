import * as React from 'react';
import axios from 'axios';
import MessageSnackBar from '../MessageSnackBar';
import FormDepartamento from "./FormDepartamento";
import GridDepartamento from "./GridDepartamento";
import { SiteProps } from '../dashboard/SiteProps';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

export default function Departamento({ goBack }) {
  const row = {
    dep_id: 0,
    dep_nombre: "",
    dep_pais_id: 0,
    dep_codigo: 0,
    dep_acronimo: ""
  };

  const [selectedRow, setSelectedRow] = React.useState(row);
  const messageData = {
    open: false,
    severity: "success",
    text: ""
  };

  const [message, setMessage] = React.useState(messageData);
  const [departamentos, setDepartamentos] = React.useState([]);
  const [pais, setPais] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/departamento`)
      .then(response => {
        const departamentoData = response.data.map((item) => ({
          ...item,
          id: item.dep_id, // Asignar id basado en dep_id
        }));
        setDepartamentos(departamentoData);
        console.log(departamentoData);
      })
      .catch(error => {
        console.error("Error al buscar departamento!", error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/pais`)
      .then(response => {
        setPais(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error al buscar pais!", error);
      });
  }, []);

  return (
    <Box style={{ height: '100%', width: '100%' }}>
      <Button 
        variant="contained" 
        startIcon={<ArrowBackIcon />} 
        onClick={goBack} 
        sx={{ mb: 2 }}>
        Volver
      </Button>
      <MessageSnackBar message={message} setMessage={setMessage} />
      <FormDepartamento setMessage={setMessage} selectedRow={selectedRow} setSelectedRow={setSelectedRow} departamentos={departamentos} pais={pais} />
      <GridDepartamento selectedRow={selectedRow} setSelectedRow={setSelectedRow} departamentos={departamentos} />
    </Box>
  );
}
