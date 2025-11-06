import React, { type FC } from 'react'

// custom modules
import { avatars } from '../../../appWriter/src/lib/appwrite'

interface AvatarProps {
  name: string
}

export const Avatar: FC<AvatarProps> = ({ name }) => {
  return (
    <figure className='avatar'>
      <img
        src={avatars.getInitials(name, 48, 48)}
        alt={name}
        width={48}
        height={48}
      />
    </figure>
  )
}
