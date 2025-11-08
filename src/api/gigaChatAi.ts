import type { ChatCompletion } from 'gigachat/src/interfaces/index.js'
import { giga } from '../lib/gigaChatAi'

export const getCompletions = async (
  userPrompt: string
): Promise<ChatCompletion> => {
  try {
    const response = await giga.chat({
      messages: [
        {
          role: 'user',
          content: userPrompt,
          // content: 'Расскажи о себе в двух словах?'
        },
      ],
    })

    return response
  } catch (error) {
    console.log(`Error generation content: ${error}`)
  }
}
