//components
import { Greetings } from './components/Greetings'
import { PageTitle } from './components/PageTitle'
import { Sidebar } from './components/Sidebar'
import { TopAppBar } from './components/TopAppBar'

// node modules
import { motion } from 'motion/react'

// hooks
import { useToggle } from './hooks/useToggle'

function App() {
  const [isSidebarOpen, toggleSideBar] = useToggle()

  return (
    <>
      {/* meta */}
      <PageTitle title='MavDeep - chat to supercharge your ides' />

      <div className='lg:grid lg:grid-cols-[320px_1fr]'>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
        <div className='h-dvh grid grid-rows-[max-content_minmax(0,1fr)_max-content]'>
          <TopAppBar toggleSidebar={toggleSideBar} />

          <div className='px-5 pb-5 flex flex-cols overflow-y-hidden'>
            <div className='max-w-[840px] w-full mx-auto grow'>
              <Greetings />
            </div>
          </div>

          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>
              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: '0px' }}
                transition={{duration: 0.2, delay: 0.8, ease: 'easeOut'}}
                className='text-body-small text-center 
                text-light-on-surface-variant
                dark:text-dark-on-surface-variant
                p-3'
              >
                MavDeep may dispaly inaccurate info, including about people, so
                double-check iss response.
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  className='inline underline ms-1'
                  target='_blank'
                >
                  Your privacy & Gemeni Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
