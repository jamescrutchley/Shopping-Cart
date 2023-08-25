import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './pages/Router.jsx'
// import './styles/globalStyles.css'
import './styles/Root.module.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
