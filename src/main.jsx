import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CycleProvider } from './context/CycleContext.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CycleProvider>
        <RouterProvider router={router} />
      </CycleProvider>
    </AuthProvider>
  </React.StrictMode>,
)
