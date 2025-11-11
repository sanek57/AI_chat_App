// node modules
import { type FC } from 'react'

// components
import { AiResponse } from './AiResponse'
import { UserPrompt } from './UserPrompt'
import { Sceleton } from './Sceleton'

interface PromptPreloaderProps {
  prompt: string
}

export const PromptPreloader: FC<PromptPreloaderProps> = ({ prompt }) => {
  return (
    <div className='msx-w-[700px] mx-auto'>
      <UserPrompt text={prompt} />
      <AiResponse>
        <Sceleton />
      </AiResponse>
    </div>
  )
}
