// node modules
import { motion, type Variants } from 'motion/react'
import { useCallback, useRef, useState } from 'react'
import { useNavigation, useParams, useSubmit } from 'react-router'

// components
import { IconButton } from './Button'

// motion variants

const promptFieldVarinats: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      duration: 0.4,
      delay: 0.4,
      ease: [0.05, 0.7, 0.1, 1],
    },
  },
}

const promptFieldChildrenVarinats: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const PromptField = () => {
  const inputFieldRef = useRef<HTMLDivElement>(null)
  const inputFieldContainerRef = useRef<HTMLDivElement>(null)

  // manual form submission
  const submit = useSubmit()
  // nav for checking state
  const navigation = useNavigation()

  const { chatId } = useParams()

  const [placeholderShow, setPlaceholderShow] = useState<boolean>(true)
  const [isMultiline, setMultiline] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = useCallback((): void => {
    if (inputFieldRef.current?.innerText == '\n')
      inputFieldRef.current.innerHTML = ''

    setPlaceholderShow(inputFieldRef.current?.innerText.length == 0)

    if (inputFieldContainerRef.current)
      setMultiline(inputFieldContainerRef.current?.clientHeight > 64)

    if (inputFieldRef.current)
      setInputValue(inputFieldRef.current?.innerText.trim())
  }, [])

  const moveCursorToEnd = useCallback((): void => {
    const editableElement = inputFieldRef.current
    const range = document.createRange()
    const selection = window.getSelection()

    // set the range to the last child of the editable element
    range.selectNodeContents(editableElement as Node)
    range.collapse(false)

    selection?.removeAllRanges()
    selection?.addRange(range)
  }, [])

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLDivElement>): void => {
      event.preventDefault()

      if (inputFieldRef.current)
        inputFieldRef.current.innerText += event.clipboardData.getData('text')

      handleInputChange()
      moveCursorToEnd()
    },
    [handleInputChange, moveCursorToEnd]
  )

  const handleSubmit = useCallback((): void => {
    if (!inputValue || navigation.state === 'submitting') return

    submit(
      {
        user_prompt: inputValue,
        request_type: 'user_prompt',
      },
      {
        method: 'POST',
        encType: 'application/x-www-form-urlencoded',
        action: `/${chatId || ''}`,
      }
    )

    if (inputFieldRef.current) {
      inputFieldRef.current.innerHTML = ''
      handleInputChange()
    }
  }, [handleInputChange, inputValue, navigation.state, submit, chatId])

  return (
    <motion.div
      className={`prompt-field-container ${isMultiline ? 'rounded-large' : ''}`}
      variants={promptFieldVarinats}
      initial='hidden'
      animate='visible'
      ref={inputFieldContainerRef}
    >
      <motion.div
        className={`prompt-field ${placeholderShow ? '' : 'after:hidden'}`}
        contentEditable={true}
        role='textbox'
        aria-multiline={true}
        aria-label='Enter a prompt here'
        data-placeholder='Enter a prompt here'
        variants={promptFieldChildrenVarinats}
        ref={inputFieldRef}
        onInput={handleInputChange}
        onPaste={handlePaste}
        onKeyDown={(e: React.KeyboardEvent) => {
          // Enter
          if (e.key === 'Enter' && !e.shiftKey) {
            if (inputValue) {
              e.preventDefault()
              handleSubmit()
            }
          }
        }}
      ></motion.div>
      <IconButton
        icon='send'
        title='Sumbit'
        size='large'
        classes='ms-auto'
        variants={promptFieldChildrenVarinats}
        onClick={handleSubmit}
      />
      <div className='state-layer'></div>
    </motion.div>
  )
}
