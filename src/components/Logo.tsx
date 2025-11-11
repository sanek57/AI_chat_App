// node modules
import { Link } from 'react-router'

// assets
import { logoLight, logoDark } from '../assets/assets'
import type { FC } from 'react'

interface LogoProps {
  classes?: string
}

export const Logo: FC<LogoProps> = ({ classes }) => {
  return (
    <Link to={'/'} className={`${classes} min-w-max max-w-max h-6`}>
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
  )
}
