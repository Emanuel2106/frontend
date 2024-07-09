import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeToggleProvider } from './components/dashboard/ThemeToggleProvider.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeToggleProvider> <App /></ThemeToggleProvider>
   
  </React.StrictMode>,
)