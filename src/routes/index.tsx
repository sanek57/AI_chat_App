// node modules
import { createBrowserRouter } from 'react-router'

// components
import App from '../App'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { ResetLink } from '../pages/ResetLink'
import { ResetPassword } from '../pages/ResetPassword'
import { Conversation } from '../pages/Conversation'

// actions
import { registerAction } from './actions/registerAction'
import { loginAction } from './actions/loginAction'
import { resetLinkAction } from './actions/resetLinkAction'
import { resetPasswordAction } from './actions/resetPasswordAction'
import { conversationAction } from './actions/conversationAction'

// loaders
import { registerLoader } from './loaders/registerLoader'
import { loginLoader } from './loaders/loginLoader'
import { resetLinkLoader } from './loaders/resetLinkLoader'
import { resetPasswordLoader } from './loaders/resetPasswordLoader'
import { appLoader } from './loaders/appLoader'
import { appAction } from './actions/appAction'
import { conversationLoader } from './loaders/conversationLoader'

export interface IResponseMy {
  ok?: boolean
  message?: string
}

export interface IChat {
  user_prompt: string
  ai_response: string
}

export interface IConversation {
  title?: string
  chats?: IChat[]
}

export interface IResponseConversation {
  user: object
  conversation: IConversation
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    action: appAction,
    children: [
      {
        path: '/:chatId',
        element: <Conversation />,
        loader: conversationLoader,
        action: conversationAction,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: '/reset-link',
    element: <ResetLink />,
    loader: resetLinkLoader,
    action: resetLinkAction,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    loader: resetPasswordLoader,
    action: resetPasswordAction,
  },
])
