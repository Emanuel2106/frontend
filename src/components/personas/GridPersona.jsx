import React, { useEffect, useState } from 'react';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAllPersonas, deletePersona } from './personaServiceFile';
import FormPersona from './FormPersona';

export default function GridPersona({ goBack }) { 
  const [personas, setPersonas] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [personaToEdit, setPersonaToEdit] = useState(null);
  const [personaToDelete, setPersonaToDelete] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    const personasData = await getAllPersonas();
    setPersonas(personasData);
  };

  const handleDelete = async () => {
    console.log("Datos de personaToDelete antes de eliminar:", personaToDelete);
    if (personaToDelete && personaToDelete.id) {
      await deletePersona(personaToDelete.id);
      fetchPersonas();
      setOpenDeleteDialog(false);
    } else {
      console.error("Error: personaToDelete o personaToDelete.id es undefined");
    }
  };
  
  
  const handleOpenDeleteDialog = (persona) => {
    setPersonaToDelete(persona);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setPersonaToDelete(null);
  };

  const handleEdit = (persona) => {
    setPersonaToEdit(persona);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff', paddingTop: '20px', paddingBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" align="left" style={{ margin: '0 0 10px 0' }}>
              Gestión de Personas
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} style={{ marginBottom: '10px' }}>
            <Button
              variant="contained"
              onClick={goBack}
              startIcon={<ArrowBackIcon />}
              sx={{
                backgroundColor: '#90CAF9',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#64B5F6',
                },
                borderRadius: '12px',
                padding: '8px 16px',
                fontSize: '16px',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              VOLVER
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} style={{ marginBottom: '10px', textAlign: 'right' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenForm(true)}
              sx={{
                borderRadius: '12px',
                padding: '8px 16px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item xs={12} style={{ overflowY: 'auto' }}>
        <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ maxWidth: '100px' }}>Tipo Identificación</TableCell>
                <TableCell style={{ maxWidth: '100px' }}>Identificación</TableCell>
                <TableCell style={{ maxWidth: '150px' }}>Apellido</TableCell>
                <TableCell style={{ maxWidth: '150px' }}>Nombre</TableCell>
                <TableCell style={{ maxWidth: '100px' }}>Género</TableCell>
                <TableCell style={{ maxWidth: '150px' }}>Fecha Nacimiento</TableCell>
                <TableCell style={{ maxWidth: '100px' }}>Estrato</TableCell>
                <TableCell style={{ maxWidth: '150px' }}>Dirección</TableCell>
                <TableCell style={{ maxWidth: '150px' }}>Celular</TableCell>
                <TableCell style={{ maxWidth: '100px' }}>Estado</TableCell>
                <TableCell style={{ maxWidth: '200px' }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((persona) => (
                <TableRow key={persona.per_id}>
                  <TableCell style={{ maxWidth: '100px' }}>{persona.tipoIdentificacion}</TableCell>
                  <TableCell style={{ maxWidth: '100px' }}>{persona.identificacion}</TableCell>
                  <TableCell style={{ maxWidth: '150px' }}>{persona.apellido}</TableCell>
                  <TableCell style={{ maxWidth: '150px' }}>{persona.nombre}</TableCell>
                  <TableCell style={{ maxWidth: '100px' }}>{persona.genero}</TableCell>
                  <TableCell style={{ maxWidth: '150px' }}>{persona.fechaNacimiento}</TableCell>
                  <TableCell style={{ maxWidth: '100px' }}>{persona.estrato}</TableCell>
                  <TableCell style={{ maxWidth: '150px' }}>{persona.direccion}</TableCell>
                  <TableCell style={{ maxWidth: '150px' }}>{persona.celular}</TableCell>
                  <TableCell style={{ maxWidth: '100px' }}>{persona.estado}</TableCell>
                  <TableCell style={{ maxWidth: '200px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" color="primary" onClick={() => handleEdit(persona)}>Update</Button>
                    <Button variant="outlined" color="secondary" onClick={() => handleOpenDeleteDialog(persona)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" mt={0}>
          <TablePagination
            rowsPerPageOptions={[3, 5, 10]}
            component="div"
            count={personas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Grid>
      
      <FormPersona 
        open={openForm} 
        onClose={handleCloseForm} 
        personaToEdit={personaToEdit} 
        fetchPersonas={fetchPersonas} 
      />

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar a {personaToDelete ? `${personaToDelete.nombre} ${personaToDelete.apellido}` : "esta persona"}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">No</Button>
          <Button onClick={handleDelete} color="secondary">Sí</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
