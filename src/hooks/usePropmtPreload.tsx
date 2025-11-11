// node modules

import { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'

interface PromptPreloadReturneType {
  propmtPreloadValue: string
}

export const usePromtPreloader = (): PromptPreloadReturneType => {
  const navigation = useNavigation()

  const [propmtPreloadValue, setPropmptPreloadValue] = useState<string>('')

  useEffect(() => {
    if (navigation.formData) {
      setPropmptPreloadValue(String(navigation.formData.get('user_prompt')))
    } else {
      setPropmptPreloadValue('')
    }
    // run only if navigation state changes
  }, [navigation])

  return {
    propmtPreloadValue,
  }
}
