// node modules
import {
  createContext,
} from 'react'

export interface ISnackbarState {
  open: boolean
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export interface ISnackbarAction {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  timeout?: number
}

interface ISnackbarContext {
  snackbar: ISnackbarState
  showSnackbar: <T extends ISnackbarAction>(args: T) => void
  hideSnackbar: () => void
}

const defaultContext: ISnackbarContext = {
  snackbar: {
    open: false,
    message: '',
    type: 'info',
  },
  showSnackbar: (args: ISnackbarAction) => {},
  hideSnackbar: () => {},
}

export const SnackbarContext = createContext<ISnackbarContext>(defaultContext)

