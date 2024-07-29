// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { ThemeToggleProvider } from './components/dashboard/ThemeToggleProvider.jsx' 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeToggleProvider> <App /></ThemeToggleProvider>
   
//   </React.StrictMode>,
// )


//funcional v3
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { ThemeToggleProvider } from './components/dashboard/ThemeToggleProvider.jsx';
import Login from './components/Login.jsx';

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <React.StrictMode>
      <ThemeToggleProvider>
        <Router>
          <Routes>
            {!isAuthenticated ? (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            ) : (
              <Route path="/*" element={<App />} />
            )}
            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? "/*" : "/"} replace />}
            />
          </Routes>
        </Router>
      </ThemeToggleProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
// import { ThemeToggleProvider } from './components/dashboard/ThemeToggleProvider.jsx';
// import Login from './components/Login.jsx';

// const Main = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState('');

//   const handleLogin = (username) => {
//     setUsername(username);
//     setIsAuthenticated(true);
//   };

//   return (
//     <React.StrictMode>
//       <ThemeToggleProvider>
//         <Router>
//           <Routes>
//             {!isAuthenticated ? (
//               <Route path="/" element={<Login onLogin={handleLogin} />} />
//             ) : (
//               <Route path="/*" element={<App username={username} />} />
//             )}
//             <Route
//               path="*"
//               element={<Navigate to={isAuthenticated ? "/*" : "/"} replace />}
//             />
//           </Routes>
//         </Router>
//       </ThemeToggleProvider>
//     </React.StrictMode>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Main />);