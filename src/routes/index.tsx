// node modules
import { createBrowserRouter } from 'react-router'

// components
import App from '../App'
import { Register } from '../pages/Register'
import { registerAction } from './actions/registerAction'

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register />, action: registerAction },
])
