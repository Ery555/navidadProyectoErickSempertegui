import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // <--- ESTA LÍNEA ES VITAL
import './index.css' // (Si te da error borra esta línea, pero suele estar)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)