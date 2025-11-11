// node modules
import { motion } from 'motion/react'

// components
import { PageTitle } from '../components/PageTitle'
import { UserPrompt } from '../components/UserPrompt'

// types
import type { IChat, IResponseConversation } from '../routes'

// hooks
import { useLoaderData } from 'react-router'
import { AiResponse } from '../components/AiResponse'

export const Conversation = () => {
  const {
    conversation: { chats },
  } = useLoaderData<IResponseConversation>()

  return (
    <>
      {/* meta */}
      <PageTitle title={`Conversation title | Mavdeep`} />

      {/* content */}
      <motion.div
        className='max-w-[700px] mx-auto will-change-auto!'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
      >
        {chats &&
          chats.map((chat: IChat) => (
            <div key={chat.user_prompt}>
              <UserPrompt text={chat.user_prompt} />
              <AiResponse aiResponse={chat.ai_response}></AiResponse>
            </div>
          ))}
        {!chats && <span>Data not found</span>}
      </motion.div>
    </>
  )
}
