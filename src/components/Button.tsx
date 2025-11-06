import React, { type FC } from 'react'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  classes?: string
  variant?: string
  color?: string
  icon?: string
  size?: string
}

export const Button: FC<ButtonProps> = ({
  classes,
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant} ${color} ${classes}`}
      {...rest}
    >
      {children}

      <div className='state-layer'></div>
    </button>
  )
}

export const IconButton: FC<ButtonProps> = ({
  classes,
  icon,
  size,
  children,
  ...rest
}) => {
  return (
    <button
      className={`icon-btn ${size} ${classes}`}
      {...rest}
    >
      {children}

      {!children && (
        <span className='material-symbols-rounded icon'>{icon}</span>
      )}
      <div className='state-layer'></div>
    </button>
  )
}
