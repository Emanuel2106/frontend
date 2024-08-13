


import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PerfilCard from './PerfilCard';
import Typography from '@mui/material/Typography';

export default function PerfilGroup({ setCurrentModule }) {
  const profiles = [
    { id: 'persona', title: 'Personas', description: 'Gestión de personas' },
    { id: 'tipo_identificacion', title: 'Tipo de Identificación', description: 'Gestión de tipos de identificación' }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Perfiles
      </Typography>
      <Grid container spacing={3}>
        {profiles.map(profile => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <PerfilCard
              title={profile.title}
              description={profile.description}
              componentId={profile.id}
              setCurrentModule={setCurrentModule}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

