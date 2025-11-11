import React from 'react'

// hooks
import { Link, useRouteError } from 'react-router'

export const ConversationError = () => {
  const error = useRouteError()

  return (
    <div className='h-full grid grid-cols-1 justify-items-center content-center'>
      <p className='text-display-medium font-semibold'>{404}</p>
      <p
        className='text-light-on-surface-variant
       dark:text-dark-on-surface-variant
       mt-2 mb-4'
      >
        {error?.message}
      </p>
      <Link className='btn filled primary' to={'/'}>
        Create new chat
        <div className='state-layer'></div>
      </Link>
    </div>
  )
}
