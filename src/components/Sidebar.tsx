// node modules
import { NavLink } from 'react-router'
import { motion } from 'motion/react'

// components
import { ExtendedFab, IconButton } from './Button'
import { Logo } from './Logo'
import type { FC } from 'react'

interface SidebarProps {
  isSidebarOpen: boolean
  toggleSideBar: () => void
}

<<<<<<< HEAD
interface Chat {
  title: string
  id: string
}

const fakeChats: Chat[] = [
  { title: 'Chat 1', id: '1' },
  { title: 'Chat 2', id: '2' },
  { title: 'Chat 3', id: '3' },
  { title: 'Chat 4', id: '4' },
]

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSideBar }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
      >
=======
export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSideBar }) => {
  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2, ease: 'easeOut'}}
      className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
>>>>>>> origin/dev
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo />
          </div>
          <ExtendedFab
            text='New chat'
            href='/'
<<<<<<< HEAD
            classes='mb-4'
=======
            classes=''
>>>>>>> origin/dev
            onClick={toggleSideBar}
          />

          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-title-small h-9 grid items-center px-4'>
              Recent
            </p>

            <nav>
<<<<<<< HEAD
              {fakeChats.map((item: Chat) => (
                <div className='relative group' key={item.title}>
                  <NavLink
                    to={item.id}
                    className='nav-link'
                    title={item.title}
                    onClick={toggleSideBar}
                  >
                    <span className='material-symbols-rounded icon-small'>
                      chat_bubble
                    </span>
                    <span className='truncate'>{item.title}</span>
                    <div className='state-layer'></div>
                  </NavLink>

                  <IconButton
                    icon='delete'
                    size='small'
                    classes='absolute top-1/2 right-1.5 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100 hidden lg:grid'
                    title='Delete'
                  />
                </div>
              ))}
=======
              <div className='relative group'>
                <NavLink
                  to={''}
                  className='nav-link'
                  title=''
                  onClick={toggleSideBar}
                >
                  <span className='material-symbols-rounded icon-small'>
                    chat_bubble
                  </span>
                  <span className='truncate'>New conversation</span>
                  <div className='state-layer'></div>
                </NavLink>

                <IconButton
                  icon='delete'
                  size='small'
                  classes='absolute top-1/2 right-1.5 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100 hidden lg:grid'
                  title='Delete'
                />
              </div>
>>>>>>> origin/dev
            </nav>
          </div>

          <div className='mt-4 h-14 px-4 grid items-center text-label-large text-light-on-surface-variant dark:text-dark-on-surface-variant border-t border-light-surface-container-high dark:border-dark-surface-container-high truncate'>
            &copy; 2025 sanekofblack
          </div>
        </div>
      </motion.div>

      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSideBar}
      ></div>
    </>
  )
}
