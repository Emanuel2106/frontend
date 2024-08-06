// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, Avatar, Link, Alert } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Link as RouterLink } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false); // Estado para manejar el error
//   const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar el mensaje de error

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validatePassword = (password) => {
//     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return re.test(password);
// };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!validateEmail(email)) {
//       setErrorMessage('Por favor, introduce un correo electrónico válido.');
//       setError(true);
//       return;
//     }
//     if (!validatePassword(password)) {
//       setErrorMessage('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.');
//       setError(true);
//       return;
//     }

//     // Obtener las credenciales almacenadas en localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     // Verificar las credenciales
//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       onLogin();
//     } else {
//       setErrorMessage('Las credenciales no son correctas. Por favor, intenta de nuevo.');
//       setError(true); // Mostrar error si las credenciales no son correctas
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Correo Electrónico"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!!error && !validateEmail(email)}
//             helperText={!!error && !validateEmail(email) ? 'Correo electrónico no válido' : ''}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Contraseña"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={!!error && !validatePassword(password)}
//             helperText={!!error && !validatePassword(password) ? 'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.' : ''}
//           />
//           {error && (
//             <Alert severity="error" sx={{ mt: 2 }}>
//               {errorMessage}
//             </Alert>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//           <Link component={RouterLink} to="/signup" variant="body2">
//             {"¿No tienes una cuenta? Regístrate"}
//           </Link>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Avatar, Link, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      setError(true);
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      setError(true);
      return;
    }

    // Obtener las credenciales almacenadas en localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored user:', storedUser); // Verifica el usuario almacenado
    console.log('Entered credentials:', { email, password }); // Verifica las credenciales ingresadas

    // Verificar las credenciales
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      onLogin(); // Llama a la función de login proporcionada desde App
    } else {
      setErrorMessage('Las credenciales no son correctas. Por favor, intenta de nuevo.');
      setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />


          
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error && !validateEmail(email)}
            helperText={!!error && !validateEmail(email) ? 'Correo electrónico no válido' : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error && !validatePassword(password)}
            helperText={!!error && !validatePassword(password) ? 'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.' : ''}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
          <Link component={RouterLink} to="/signup" variant="body2">
            {"¿No tienes una cuenta? Regístrate"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;


