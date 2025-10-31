import React, { type FC } from 'react'

interface ProgressProps {
  classes?: string
  size: string
}

export const CircularProgress: FC<ProgressProps> = ({
  classes = '',
  size = '',
}) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    ></div>
  )
}
