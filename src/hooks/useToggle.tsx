// node modules
import { useCallback, useState } from 'react'

export const useToggle = (): readonly [boolean, () => void] => {
  const [isOpen, setToggle] = useState<boolean>(false)

  const toggle = useCallback((): void => setToggle(p => !p), [])

  return [isOpen, toggle]
}
