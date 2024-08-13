import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Snackbar, Alert, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

function Register() {
  // Estados para manejar el nombre de usuario, la contraseña, el mensaje de error y la visibilidad del Snackbar
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Hook de navegación para redirigir al usuario a diferentes rutas
  const navigate = useNavigate();

  // Función para validar si el correo electrónico es válido
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar si la contraseña cumple con los requisitos de seguridad
  const validatePassword = (password) => {
    // const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


    return passwordRegex.test(password);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();  // Previene el comportamiento predeterminado del formulario
    setError('');  // Resetea el mensaje de error

    // Validación del correo electrónico
    if (!validateEmail(username)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Validación de la contraseña
    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial.');
      return;
    }

    // Petición POST para registrar al nuevo usuario
    axios.post('http://172.16.79.156:8080/auth/register', {
      username,
      password,
    })
    .then(response => {
      console.log(response.data);
      setOpenSnackbar(true);  // Mostrar notificación de éxito
      setTimeout(() => {
        setOpenSnackbar(false);  // Ocultar notificación
        navigate('/login');  // Redirigir al login después de mostrar la notificación
      }, 3000);  // Esperar 3 segundos antes de redirigir
    })
    .catch(error => {
      setError('Hubo un error al registrar. Por favor, intenta nuevamente.');  // Muestra un mensaje de error
      console.error('There was an error registering!', error);
    });
  };

  return (
    <Container 
      maxWidth={false}  // Permite que el contenedor ocupe todo el ancho de la pantalla
      disableGutters  // Elimina el padding por defecto
      sx={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',  // Asegura que el contenedor ocupe toda la altura de la ventana
        backgroundColor: '#FFFFFF',  // Cambia el color de fondo a un azul suave
        padding: 3,
      }}
    >
      {/* Paper para encapsular el formulario con una sombra */}
      <Paper 
        elevation={6}  // Aumenta la elevación para una sombra más pronunciada
        sx={{ 
          padding: 4, 
          backgroundColor: '#ffffff',  // Fondo blanco para el formulario
          borderRadius: 4,  // Bordes más redondeados
          maxWidth: 500,  // Aumenta el ancho máximo del formulario
          width: '100%',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}  // Asocia la función handleSubmit al envío del formulario
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,  // Espacio mayor entre los elementos del formulario
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            sx={{
              fontWeight: 'bold',
              color: '#1a237e',  // Cambia el color del texto a un azul más oscuro
              marginBottom: 3,
            }}
          >
            Register
          </Typography>
          {error && (
            <Alert severity="error">{error}</Alert>  // Muestra un mensaje de error si existe
          )}
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}  // Actualiza el estado del nombre de usuario
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,  // Bordes más redondeados en los campos de texto
                '& fieldset': {
                  borderColor: '#1e88e5',  // Cambia el color del borde
                },
                '&:hover fieldset': {
                  borderColor: '#1565c0',  // Cambia el color del borde al pasar el mouse
                },
              },
              '& .MuiInputLabel-root': {
                color: '#1e88e5',  // Cambia el color del label del campo
              },
            }}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}  // Actualiza el estado de la contraseña
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,  // Bordes más redondeados en los campos de texto
                '& fieldset': {
                  borderColor: '#1e88e5',  // Cambia el color del borde
                },
                '&:hover fieldset': {
                  borderColor: '#1565c0',  // Cambia el color del borde al pasar el mouse
                },
              },
              '& .MuiInputLabel-root': {
                color: '#1e88e5',  // Cambia el color del label del campo
              },
            }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{
              padding: '12px 0',
              borderRadius: 3,  // Bordes más redondeados en el botón
              textTransform: 'none',
              fontWeight: 'bold',  // Texto en negrita en el botón
              backgroundColor: '#1e88e5',  // Cambia el color de fondo del botón
              '&:hover': {
                backgroundColor: '#1565c0',  // Color del botón al pasar el mouse
              },
            }}
          >
            Register
          </Button>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ marginTop: 3, color: '#666' }}
          >
            ¿Ya tienes una cuenta?{' '}
            <Link 
              component={RouterLink} 
              to="/login" 
              sx={{ 
                color: '#1e88e5',  // Color del enlace
                textDecoration: 'none', 
                fontWeight: 'bold' 
              }}
            >
              Inicia Sesión aquí
            </Link>
          </Typography>
        </Box>
      </Paper>
      
      {/* Snackbar para mostrar la notificación de éxito */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}  // Duración de 3 segundos para mostrar la notificación
        onClose={() => setOpenSnackbar(false)}  // Cierra el Snackbar al completarse el tiempo
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          ¡Registro exitoso! Redirigiendo al login...
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Register;


