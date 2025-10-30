import React, { type FC } from 'react'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  classes?: string
  variant?: string
  color?: string
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
