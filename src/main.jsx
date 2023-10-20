import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'


import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto overflow-hidden">
    <React.StrictMode>
     
        <RouterProvider router={router} />
     
    </React.StrictMode>
  </div>
)
