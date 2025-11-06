// node modules
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router'
import { AnimatePresence } from 'motion/react'

// components
import { IconButton } from './Button'

// assets
import { logoDark, logoLight } from '../assets/assets'
import { Avatar } from './Avatar'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { LinearProgress } from './Progress'

// hooks
import { useToggle } from '../hooks/useToggle'
import { logout } from '../utils/logout'

export const TopAppBar = () => {
  const navigation = useNavigation()
  const navigate = useNavigate()

  const {user} = useLoaderData()
  console.log(user);

  const isNormalLoading = navigation.state === 'loading' && navigation.formData

  const [showMenu, setShowMenu] = useToggle()

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon='menu'
          classes='lg:hidden'
        />

        <Link
          to={'/'}
          className='min-w-max max-w-max h-6 lg:hidden'
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='mavdeep logo'
            className='dark:hidden'
          />

          <img
            src={logoDark}
            width={133}
            height={24}
            alt='mavdeep logo'
            className='hidden dark:block'
          />
        </Link>
      </div>

      <div className='menu-wrapper'>
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setShowMenu()}
        >
          <Avatar name={user.name} />
        </IconButton>

        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem
            labeltext='Log out'
            onClick={() => logout(navigate)}
          />
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoading && <LinearProgress />}</AnimatePresence>
    </header>
  )
}
