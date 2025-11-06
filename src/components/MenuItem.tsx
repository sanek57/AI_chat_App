import React, { type FC } from 'react'

interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string
  labeltext?: string
}

export const MenuItem: FC<MenuItemProps> = ({
  classes,
  labeltext,
  ...rest
}) => {
  return (
    <button
      className={`menu-item ${classes}`}
      {...rest}
    >
      <span>{labeltext}</span>
      <div className='state-layer'></div>
    </button>
  )
}
