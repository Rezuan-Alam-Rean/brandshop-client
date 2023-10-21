import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import './index.css'
import router from './pages/router/route/router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto overflow-hidden">
    <React.StrictMode>
    <Toaster/>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
     
    </React.StrictMode>
  </div>
)
