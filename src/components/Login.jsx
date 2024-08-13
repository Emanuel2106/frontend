import axios from './axiosConfig';
import { Container, TextField, Button, Typography, Box, Link, Alert } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  // Estados para manejar el nombre de usuario, la contraseña y los errores
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para validar si el correo electrónico es válido
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Esta función fue comentada y se utilizaría para validar la complejidad de la contraseña.
  // Valida que la contraseña tenga al menos 8 caracteres, incluyendo al menos una letra mayúscula,
  // un número y un carácter especial.
  // const validatePassword = (password) => {
  //   const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,}$/;
  //   return passwordRegex.test(password);
  // };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();  
    setError(''); 

    // Validación del correo electrónico
    if (!validateEmail(username)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // verificar que la contraseña cumpla con ciertos requisitos de seguridad antes de enviar la solicitud.
    // if (!validatePassword(password)) {
    //   setError('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial.');
    //   return;
    // }

    // Petición POST para autenticar al usuario
    axios.post('http://172.16.79.156:8080/auth/login', {
      username,
      password,
    })
    .then(response => {
      localStorage.setItem('token', response.data);  // Guarda el token en localStorage
      window.location.href = '/home';  // Redirige al usuario a la página principal
    })
    .catch(error => {
      setError('Hubo un error al iniciar sesión. Por favor, intenta nuevamente.');  // Muestra un mensaje de error
      console.error('There was an error logging in!', error);
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
        backgroundColor: '#FFF',  // Cambia el color de fondo a un azul suave
        padding: 3,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}  // Asocia la función handleSubmit al envío del formulario
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,  // Espacio mayor entre los elementos del formulario
          padding: 4,
          backgroundColor: 'white',  // Fondo blanco para el formulario
          borderRadius: 4,  // Aumenta la curvatura de los bordes
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',  // Sombra más pronunciada para dar mayor profundidad
          width: '100%',
          maxWidth: 400,  // Aumenta el ancho máximo del formulario
        }}
      >
        <Typography 
          variant="h4"  // Aumenta el tamaño del título
          component="h1" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 3, 
            color: '#1a237e',  // Cambia el color del texto a un azul más oscuro
          }}
        >
          Iniciar Sesión
        </Typography>
        {error && (
          <Alert severity="error">{error}</Alert>  // Muestra un mensaje de error si existe
        )}
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}  // Actualiza el estado del correo electrónico
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
          startIcon={<LoginIcon />}  // Ícono de inicio de sesión en el botón
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
          Iniciar Sesión
        </Button>
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ marginTop: 3, color: '#666' }}
        >
          ¿No tienes una cuenta?{' '}
          <Link 
            component={RouterLink} 
            to="/register" 
            sx={{ 
              color: '#1e88e5',  // Color del enlace
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            Regístrate aquí
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;




