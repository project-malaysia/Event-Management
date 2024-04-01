import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

/**
* @author Petros Tamboutsiaris W21004471
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/kv6002/website/admin/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
