import React from 'react'

// hooks
import { Link, useNavigation, useRouteError } from 'react-router'
import { LinearProgress } from '../components/Progress'

export const RootError = () => {
  const error = useRouteError()
  const navigation = useNavigation()

  console.log(123, error)

  return (
    <>
      <div className='h-dvh grid grid-cols-1 justify-items-center content-center'>
        <p className='text-display-large'>{error?.status}</p>
        <p
          className='text-light-on-surface-variant
       dark:text-dark-on-surface-variant
       mt-1 mb-4'
        >
          We coudn&apos;t find the page you&apos;re looking for.
        </p>
        <Link to={'/'} className='btn filled primary'>
          Back to home
          <div className='state-layer'></div>
        </Link>
      </div>
      {navigation.state === 'loading' && (
        <LinearProgress classes='fixed top-0 left-0 right-0' />
      )}
    </>
  )
}
