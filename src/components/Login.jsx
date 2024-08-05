// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/realms/master/protocol/openid-connect/token',
//         new URLSearchParams({
//           client_id: 'course-tracker',
//           grant_type: 'password',
//           username: username,
//           password: password,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
//       console.log('Login Successful:', response.data);
//       // Llama a onLogin si el login es exitoso
//       onLogin();
//     } catch (err) {
//       console.error('Login Failed:', err);
//       setError('Login failed. Please check your credentials and try again.');
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
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Nombre de Usuario"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;




//funcionalv2
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography } from '@mui/material';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/realms/master/protocol/openid-connect/token',
//         new URLSearchParams({
//           client_id: 'course-tracker',
//           grant_type: 'password',
//           username: username,
//           password: password,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
//       console.log('Login Successful:', response.data);
//       // Maneja la respuesta, guarda el token, etc.
//     } catch (err) {
//       console.error('Login Failed:', err);
//       setError('Login failed. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Login
//       </Typography>
//       <TextField
//         label="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       {error && (
//         <Typography color="error" variant="body2">
//           {error}
//         </Typography>
//       )}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleLogin}
//         fullWidth
//         style={{ marginTop: '16px' }}
//       >
//         Login
//       </Button>
//     </Container>
//   );
// };

// export default Login;





//funcionalv3
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/realms/master/protocol/openid-connect/token',
//         new URLSearchParams({
//           client_id: 'course-tracker',
//           grant_type: 'password',
//           username: username,
//           password: password,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
//       console.log('Login Successful:', response.data);
//       onLogin();
//       navigate('/');
//     } catch (err) {
//       console.error('Login Failed:', err);
//       setError('Login failed. Please check your credentials and try again.');
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
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Nombre de Usuario"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

//17jul funcional
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/realms/master/protocol/openid-connect/token',
//         new URLSearchParams({
//           client_id: 'course-tracker',
//           grant_type: 'password',
//           username: username,
//           password: password,
//           email: email,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
//       console.log('Login Successful:', response.data);
//       onLogin(username);
//       navigate('/');
//     } catch (err) {
//       console.error('Login Failed:', err);
//       setError('Login failed. Please check your credentials and try again.');
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
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Nombre de Usuario"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Correo Electrónico"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;



// 17 jul funcional

// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/realms/master/protocol/openid-connect/token',
//         new URLSearchParams({
//           client_id: 'course-tracker',
//           grant_type: 'password',
//           username: username,
//           password: password,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
//       console.log('Login Successful:', response.data);
//       onLogin(username);
//       navigate('/');
//     } catch (err) {
//       console.error('Login Failed:', err);
//       setError('Login failed. Please check your credentials and try again.');
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
//         <Typography component="h1" variant="h5">
//           Iniciar Sesión
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Nombre de Usuario"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//           />
//           {error && (
//             <Typography color="error" variant="body2">
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;






// //v1 05-08-2024 09:24
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, Avatar } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí es donde manejarás la autenticación, podrías llamar a una API
//     if(email === 'admin@example.com' && password === 'password') {
//       onLogin();
//     } else {
//       alert('Credenciales incorrectas');
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
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Iniciar Sesión
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;


//funcional 05-08-2024
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, Avatar, Link } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Link as RouterLink } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí es donde manejarás la autenticación, podrías llamar a una API
//     if (email === 'admin@example.com' && password === 'password') {
//       onLogin();
//     } else {
//       alert('Credenciales incorrectas');
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
//           />
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




// //funcional 05-08 9:50
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, Avatar, Link } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Link as RouterLink } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Obtener las credenciales almacenadas en localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     // Verificar las credenciales
//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       onLogin();
//     } else {
//       setError(true);
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
//           />
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
  const [error, setError] = useState(false); // Estado para manejar el error

  const handleSubmit = (event) => {
    event.preventDefault();
    // Obtener las credenciales almacenadas en localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verificar las credenciales
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      onLogin();
    } else {
      setError(true); // Mostrar error si las credenciales no son correctas
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
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Las credenciales no son correctas. Por favor, intenta de nuevo.
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
