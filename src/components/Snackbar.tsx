import React, { type FC } from 'react'

// components
import type { ISnackbarState } from '../context/SnackbarContext'

interface SnackbarProps {
  snackbar: ISnackbarState
}

export const Snackbar: FC<SnackbarProps> = ({ snackbar }) => {
  return (
    <>
      {snackbar.open && (
        <div className={`snackbar ${snackbar.type}`}>
          <span>{snackbar.message}</span>
        </div>
      )}
    </>
  )
}
