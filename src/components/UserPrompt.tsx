// hooks
import { useLoaderData } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { useToggle } from '../hooks/useToggle'

// components
import { Avatar } from './Avatar'
import { IconButton } from './Button'
import type { IResponseConversation } from '../routes'

export const UserPrompt = ({ text }: { text: string }) => {
  const { user } = useLoaderData<IResponseConversation>()

  const [isExpanded, toggleExpanded] = useToggle()

  const textBoxRef = useRef<HTMLParagraphElement>(null)

  const [hasMoreContent, setMorecontent] = useState<boolean>(false)

  useEffect(() => {
    const element = textBoxRef.current
    if (element) {
      setMorecontent(element.scrollHeight > element.clientHeight)
    }
  }, [textBoxRef])

  return (
    <div
      className='grid grid-cols-1 items-start
    py-4 md:grid-cols-[max-content_minmax(0,1fr)_max-content] md:gap-5'
    >
      <Avatar name={user?.name} />
      <p
        ref={textBoxRef}
        className={`text-body-large pt-1 whitespace-pre-wrap ${!isExpanded ? 'line-clamp-4' : ''}`}
      >
        {text}
      </p>

      {hasMoreContent && (
        <IconButton
          icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          onClick={toggleExpanded}
          title={!isExpanded ? 'Collapse text' : 'Expand text'}
        />
      )}
    </div>
  )
}
