// node modules
import { createBrowserRouter } from 'react-router'

// components
import App from '../App'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { ResetPassword } from '../pages/ResetPassword'

// actions
import { registerAction } from './actions/registerAction'
import { loginAction } from './actions/loginAction'

// loaders
import { registerLoader } from './loaders/registerLoader'
import { loginLoader } from './loaders/loginLoader'
import { resetPasswordAction } from './actions/resetPasswordAction'

export interface IResponseMy {
  ok?: boolean
  message?: string
}

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/register',
    element: <Register />,
    // loader: registerLoader,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    // loader: loginLoader,
    action: loginAction,
  },
  {
    path: '/reset-link',
    element: <ResetPassword />,
    action: resetPasswordAction,
  },
])
