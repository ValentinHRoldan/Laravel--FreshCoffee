import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { KioscoProvider } from './context/KioscoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KioscoProvider>
      <RouterProvider router={router}/>
    </KioscoProvider>
  </StrictMode>,
)
