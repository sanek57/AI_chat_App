import React, { type FC } from 'react'

interface MenuProps extends React.PropsWithChildren {
  classes?: string
}

export const Menu: FC<MenuProps> = ({ classes, children }) => {
  return <div className={`menu ${classes}`}>{children}</div>
}
