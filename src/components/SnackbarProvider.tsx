// node modules
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'

// types
import {
  SnackbarContext,
  type ISnackbarAction,
  type ISnackbarState,
} from '../context/SnackbarContext'

// components
import { Snackbar } from './Snackbar'

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<ISnackbarState>({
    open: false,
    message: '',
    type: 'info',
  })

  // автоскрытие всплывающего окна
  const timeoutRef = useRef<number>(null)

  const showSnackbar = useCallback(
    ({ message, type = 'info', timeout = 500 }: ISnackbarAction) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      setSnackbar({ open: true, message, type })

      timeoutRef.current = setTimeout(() => {
        setSnackbar(prev => ({ ...prev, open: false }))
      }, timeout)
    },
    [],
  )

  const hideSnackbar = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      setSnackbar({ open: false, message: '', type: 'info' })
    }
  }, [])

  const contextValue = useMemo(() => {
    return { snackbar, showSnackbar, hideSnackbar }
  }, [showSnackbar, hideSnackbar, snackbar])

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar snackbar={snackbar} />
    </SnackbarContext.Provider>
  )
}
