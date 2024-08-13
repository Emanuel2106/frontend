
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// src/components/axiosConfig.js
import axios from './axiosConfig.js';
// import Header from './Header';
import TipoIdentificacion from './TipoIdentificacion';
import Persona from './personas/Persona.jsx';
// import Persona from './Persona';
import PerfilGroup from './PerfilGroup';

export default function Home() {
  const [message, setMessage] = React.useState(null);
  const [currentModule, setCurrentModule] = React.useState("persona");

  const components = {
    perfil_group: <PerfilGroup setCurrentModule={setCurrentModule} />,
    persona: <Persona />,
    tipo_identificacion: <TipoIdentificacion />
  };

  function showPerfiles() {
    setCurrentModule("perfil_group");
  }

  React.useEffect(() => {
    axios.get('http://172.16.79.156:8080/auth/home')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the home message!', error);
      });
  }, []);


  
  return (

    <Box sx={{ p: 3 }}>
      {/* <Header /> */}
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Button variant="contained" color="secondary" onClick={showPerfiles} sx={{ mb: 2 }}>
          Perfiles
        </Button>
        <Typography variant="h5" gutterBottom>
          {message}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Current Module: {currentModule}
        </Typography>
        {components[currentModule]}
      </Paper>
    </Box>
  );

}

