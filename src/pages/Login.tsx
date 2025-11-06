// node modules
import { Link, Form, useNavigation, useActionData } from 'react-router'

// components
import { PageTitle } from '../components/PageTitle'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'

// assets
import { banner } from '../assets/assets'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { useEffect } from 'react'
import { useSnackbar } from '../hooks/useSnackbar'
import { AnimatePresence } from 'motion/react'

// custom hooks

export const Login = () => {
  // ошибки с формы
  const error = useActionData()
  // состояние запроса формы
  const navigation = useNavigation()

  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
      })
    }
  }, [error, showSnackbar])

  return (
    <>
      <PageTitle title='Login' />

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0' />

          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-display-small font-semibold text-light-onbackground dark:text-dark-onbackground text-center'>
              Welcome Back to MavDeep
            </h2>
            <p className='text-body-large text-light-on-surface-variant dark:text-dark-on-surface-variant mt-1 text-center px-2'>
              Enter your Mavdeep account details.
            </p>

            <Form method='POST' className='grid grid-cols-1 gap-4'>
              <TextField
                classes=''
                type={'email'}
                name='email'
                label='Email'
                placeholder='Email'
                required={true}
                autoFocus={true}
              />
              <TextField
                classes=''
                type={'password'}
                name='password'
                label='Password'
                placeholder='Enter yout password'
                required={true}
              />

              <div className='text-right'>
                <Link
                  to={'/reset-link'}
                  className='link text-label-large inline-block'
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {navigation.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Sign in'
                )}
              </Button>
            </Form>

            <p className='text-body-medium text-light-on-surface-variant dark:text-dark-on-surface-variant text-center mt-4'>
              Don&apos;t have an account?
              <Link
                to={'/register'}
                className='link text-label-large inline-block ms-1 text-light-on-surface dark:text-dark-on-surface'
              >
                Create an account
              </Link>
            </p>
          </div>

          <p className='mt-auto mx-auto text-light-on-surface-variant dark:text-dark-on-surface-variant text-body-medium lg:mx-0'>
            &copy; 2025 sanekofblack. All right reserved.
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-large lg:overflow-hidden'>
          <img src={banner} alt='banner' className='img-cover' />

          <p className='absolute bottom-10 left-12 z-10 text-display-large font-semibold leading-tight text-right text-light-on-surface drop-shadow-sm 2xl:text-[72px]'>
            Chat with Mavdeep to susercharge your ideas.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  )
}
