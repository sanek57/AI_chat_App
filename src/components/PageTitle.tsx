import React, { type FC } from 'react'

interface PageTitleProps {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="">
        <title>{title}</title>
        <meta name='description' content='text' />
    </div>
  )
}
