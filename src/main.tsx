import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { SnackbarProvider } from './components/SnackbarProvider'

createRoot(document.getElementById('root')!).render(
  <SnackbarProvider>
    <RouterProvider router={router} />
  </SnackbarProvider>
)
