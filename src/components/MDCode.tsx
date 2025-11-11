// node modules
import { type FC, type PropsWithChildren } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

// components
import { IconButton } from './Button'

// custom modules
import { toTitleCase } from '../utils/toTitleCase'

interface CodeBlockProps extends PropsWithChildren {
  className?: string
  theme: string
  handleCopy: (event: React.MouseEvent<HTMLButtonElement>, text: string) => void
}

export const CodeBlock: FC<CodeBlockProps> = ({
  className,
  theme,
  handleCopy,
  children,
  ...rest
}) => {
  const match = className?.match(/language-(\w+)/)

  // console.log(rest);

  return match ? (
    <>
      <div className='code-block'>
        <div className='p-4 pb-0 font-sans'>{toTitleCase(match[1])}</div>
        <SyntaxHighlighter
          PreTag='div'
          {...rest}
          language={match[1]}
          style={theme}
          customStyle={{
            marginBlock: '0',
            padding: '2px',
          }}
          codeTagProps={{
            style: {
              padding: '14px',
              fontWeight: '600',
            },
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>

      <div
        className='bg-light-surface-container
        dark:bg-dark-surface-container
        rounded-t-extra-small rounded-b-medium flex justify-between items-center h-11 font-sans text-body-medium ps-4 pe-2'
      >
        <p>
          Use code
          <a
            className={'link ms-1'}
            href='https://www.npmjs.com/package/react-syntax-highlighter'
            target='_blank'
          >
            with caution.
          </a>
        </p>

        <IconButton
          icon='content_copy'
          size='small'
          title='Copy code'
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleCopy(e, String(children))
          }
        />
      </div>
    </>
  ) : (
    <code className={className}>{children}</code>
  )
}
