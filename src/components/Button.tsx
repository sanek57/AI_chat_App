// node modules
import React, { type FC } from 'react'
import { Link } from 'react-router'

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
    <button className={`btn ${variant} ${color} ${classes}`} {...rest}>
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
    <button className={`icon-btn ${size} ${classes}`} {...rest}>
      {children}

      {!children && (
        <span className='material-symbols-rounded icon'>{icon}</span>
      )}
      <div className='state-layer'></div>
    </button>
  )
}

// Extendred fab

interface ExtendedFabProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  classes?: string
  text?: string
  href?: string
}

export const ExtendedFab: FC<ExtendedFabProps> = ({
  classes,
  text,
  href,
  ...rest
}) => {
  return (
    <Link to={href as string} className={`extended-fab ${classes}`} {...rest}>
      <span className='material-symbols-rounded'>add</span>

      <span className="truncate">{text}</span>
      <div className="state-layer"></div>
    </Link>
  )
}
