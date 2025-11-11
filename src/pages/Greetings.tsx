// node modules
import { motion } from 'motion/react'
import type { IResponseConversation } from '../routes'

// components
import { PromptPreloader } from '../components/PromptPreloader'

// hooks
import { useLoaderData } from 'react-router'
import { usePromtPreloader } from '../hooks/usePropmtPreload'

export const Greetings = () => {
  const { user } = useLoaderData<IResponseConversation>()

  const { propmtPreloadValue } = usePromtPreloader()

  return (
    <>
      {propmtPreloadValue ? (
        <PromptPreloader prompt={propmtPreloadValue} />
      ) : (
        <div className='grid place-content-center h-full'>
          <h2
            className='text-headline-large font-semibold 
      text-center tracking-tight
      text-light-on-surface-variant
      dark:text-dark-on-surface-variant
      '
          >
            <motion.span
              initial={{ backgroundPositionX: '100%' }}
              animate={{ backgroundPositionX: '0%' }}
              transition={{ duration: 4, ease: [0.05, 0.7, 0.1, 1] }}
              className='
        bg-linear-to-r 
        from-teal-400 from-0%
        via-cyan-500 via-56%
        to-transparent to-75%
        bg-size-[350%_100%]
        bg-[100%_0] 
        bg-clip-text
        text-transparent'
            >
              Hello, {user.name.split(' ').at()}
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className='dark:font-medium'
            >
              How can I help?
            </motion.span>
          </h2>
        </div>
      )}
    </>
  )
}
