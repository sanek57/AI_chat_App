// node modules
import {
  useCallback,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

// assets
import { iconLogo } from '../assets/assets'

// components
import { CodeBlock } from './MDCode'
import { useSnackbar } from '../hooks/useSnackbar'

// custom hooks

interface AiResponseProps extends PropsWithChildren {
  aiResponse?: string
}

export const AiResponse: FC<AiResponseProps> = ({ aiResponse, children }) => {
  // init code them
  const [codeTheme, setCodeTheme] = useState<string>('')

  const { showSnackbar, hideSnackbar } = useSnackbar()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    setCodeTheme(mediaQuery.matches ? hopscotch : coy)

    const handleThemeChange: (e: MediaQueryListEvent) => void = e => {
      setCodeTheme(e.matches ? hopscotch : coy)
    }

    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  const handleCopy = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
      hideSnackbar()
      try {
        await navigator.clipboard.writeText(text)

        showSnackbar({
          message: 'Copied to clipboard',
          timeout: 2500,
        })
      } catch (error) {
        showSnackbar({
          message: String(error),
          timeout: 2500,
        })
        console.log(`Error copying text to clipboard: ${error}`)
      }
    },
    [showSnackbar, hideSnackbar]
  )

  return (
    <div
      className='grid grid-cols-1 items-start gap-1 py-4
     md:grid-cols-[max-content_minmax(0,1fr)] md:gap-5'
    >
      <figure className='w-8 h-8 grid place-items-center'>
        <img src={iconLogo} width={32} height={32} alt='' />
      </figure>

      {children}

      <div className='markdown-content'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: props => {
              //   console.log(props)
              return (
                <CodeBlock
                  {...props}
                  theme={codeTheme}
                  handleCopy={handleCopy}
                />
              )
            },
          }}
        >
          {aiResponse}
        </Markdown>
      </div>
    </div>
  )
}
