import * as React from 'react';
import axios from 'axios';
import MessageSnackBar from '../MessageSnackBar';
import FormPais from "./FormPais";
import GridPais from "./GridPais";
import { SiteProps } from '../dashboard/SiteProps';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

export default function Pais({ goBack }) {
  const row = {
    pai_id: 0,
    pai_nombre: "",
    pai_codigo: 0,
    pai_acronimo: ""
  };

  const [selectedRow, setSelectedRow] = React.useState(row);
  const messageData = {
    open: false,
    severity: "success",
    text: ""
  };

  const [message, setMessage] = React.useState(messageData);
  const [pais, setPais] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/pais`)
      .then(response => {
        const paisData = response.data.map((item) => ({
          ...item,
          id: item.pai_id,
        }));
        setPais(paisData);
        console.log(paisData);
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
      <FormPais setMessage={setMessage} selectedRow={selectedRow} setSelectedRow={setSelectedRow} pais={pais} />
      <GridPais selectedRow={selectedRow} setSelectedRow={setSelectedRow} pais={pais} />
    </Box>
  );
}
