// node modules
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from 'react-router'
import { AnimatePresence } from 'motion/react'
import type { IChat, IResponseConversation } from '../routes'

// components
import { IconButton } from './Button'
import { Logo } from './Logo'

// assets
import { Avatar } from './Avatar'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { LinearProgress } from './Progress'

// hooks
import { useToggle } from '../hooks/useToggle'
import { logout } from '../utils/logout'
import type { FC } from 'react'
import { deleteConversation } from '../utils/deleteConversation'

interface TopAppBarProps {
  toggleSidebar: () => void
}

export const TopAppBar: FC<TopAppBarProps> = ({ toggleSidebar }) => {
  const navigation = useNavigation()
  const navigate = useNavigate()

  const { user, conversation } = useLoaderData<IResponseConversation>()

  const params = useParams()

  const submit = useSubmit()

  const isNormalLoading = navigation.state === 'loading'

  const [showMenu, setShowMenu] = useToggle()

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton icon='menu' classes='lg:hidden' onClick={toggleSidebar} />

        <Logo classes='lg:hidden' />
      </div>

      {params.chatId && (
        <IconButton
          icon='delete'
          classes='ms-auto me-1 lg:hidden'
          onClick={() => {
            if (conversation.chats) {
              const { title }: string = conversation.chats.find(
                (chat: IChat) => +params.chatId === chat.id
              )
              deleteConversation({ id: +params.chatId, title, submit })
            }
          }}
        />
      )}

      <div className='menu-wrapper'>
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setShowMenu()}
        >
          <Avatar name={user.name} />
        </IconButton>

        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem labeltext='Log out' onClick={() => logout(navigate)} />
        </Menu>
      </div>

      <AnimatePresence>
        {isNormalLoading && (
          <LinearProgress classes='absolute top-full left-0 right-0 z-10' />
        )}
      </AnimatePresence>
    </header>
  )
}
