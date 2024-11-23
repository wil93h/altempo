import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import './utilities/i18n'; 
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';      

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
