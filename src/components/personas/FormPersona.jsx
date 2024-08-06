import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { createPersona, updatePersona } from './personaServiceFile';

export default function FormPersona({ personaToEdit, fetchPersonas, open, onClose }) {
  const [persona, setPersona] = useState({
    tipoIdentificacion: 1,  // Default to "CC" (as Integer)
    identificacion: '',
    nombre: '',
    apellido: '',
    genero: true,  // Default to true (boolean)
    fechaNacimiento: '',
    estrato: '',
    direccion: '',
    celular: '',
    estado: 1  // Default to "activo" as 1
  });

  useEffect(() => {
    if (personaToEdit) {
      setPersona({
        ...personaToEdit,
        genero: personaToEdit.genero ? 'masculino' : 'femenino',
        tipoIdentificacion: personaToEdit.tipoIdentificacion || 1,
        estado: personaToEdit.estado === 1 ? 'activo' : 'inactivo'
      });
    }
  }, [personaToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tipoIdentificacion") {
      const tipoIdentificacionMap = {
        "CE": 3,
        "CC": 1,
        "TI": 2
      };
      setPersona({
        ...persona,
        [name]: tipoIdentificacionMap[value] || value
      });
    } else if (name === "genero") {
      setPersona({
        ...persona,
        [name]: value === 'masculino' ? true : false
      });
    } else if (name === "estado") {
      const estadoMap = {
        "activo": 1,
        "inactivo": 0
      };
      setPersona({
        ...persona,
        [name]: estadoMap[value] || value
      });
    } else if (name === "identificacion" || name === "estrato" || name === "celular") {
      if (/^\d*$/.test(value)) {
        setPersona({
          ...persona,
          [name]: parseInt(value, 10) || ''
        });
      }
    } else {
      setPersona({
        ...persona,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...persona,
      genero: persona.genero === 'masculino',  // Convert gender to boolean
      estado: persona.estado === 'activo' ? 1 : 0,  // Convert state to integer
      tipoIdentificacion: parseInt(persona.tipoIdentificacion, 10)  // Ensure ID type is integer
    };

    try {
      if (persona.per_id) {
        await updatePersona(persona.per_id, dataToSubmit);
      } else {
        await createPersona(dataToSubmit);
      }
      fetchPersonas();
      setPersona({
        tipoIdentificacion: 1,
        identificacion: '',
        nombre: '',
        apellido: '',
        genero: true,
        fechaNacimiento: '',
        estrato: '',
        direccion: '',
        celular: '',
        estado: 1
      });
      onClose();
    } catch (error) {
      console.error('Error al crear o actualizar persona:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Gestión de Personas</DialogTitle>
      <DialogContent style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Tipo Identificación</InputLabel>
                <Select
                  name="tipoIdentificacion"
                  value={persona.tipoIdentificacion}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>CC</MenuItem>
                  <MenuItem value={2}>TI</MenuItem>
                  <MenuItem value={3}>CE</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Identificación"
                name="identificacion"
                value={persona.identificacion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={persona.nombre}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={persona.apellido}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Género</InputLabel>
                <Select
                  name="genero"
                  value={persona.genero ? 'masculino' : 'femenino'}
                  onChange={handleChange}
                >
                  <MenuItem value="masculino">Masculino</MenuItem>
                  <MenuItem value="femenino">Femenino</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Fecha Nacimiento"
                name="fechaNacimiento"
                value={persona.fechaNacimiento}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Estrato"
                name="estrato"
                value={persona.estrato}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Dirección"
                name="direccion"
                value={persona.direccion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Celular"
                name="celular"
                value={persona.celular}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  name="estado"
                  value={persona.estado === 1 ? 'activo' : 'inactivo'}
                  onChange={handleChange}
                >
                  <MenuItem value="activo">Activo</MenuItem>
                  <MenuItem value="inactivo">Inactivo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancelar</Button>
        <Button onClick={handleSubmit} color="primary">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}
