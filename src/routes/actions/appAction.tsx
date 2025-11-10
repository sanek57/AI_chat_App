// custom modules
import { type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'

const userPromptAction = async (formData: FormData): Promise<string> => {
  const userPrompt = formData.get('user_prompt')

  try {
    const user = await account.get()

    if (userPrompt) {
      // fetch to ai
      return 'User prompt, generate a concise and informative'
    }
  } catch (error) {
    console.log(`Error fetched user prompt: ${error}`)
  }
  return ''
}

export const appAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<void> => {
  const formData = await request.formData()

  const requestType = formData.get('request_type')

  if (requestType === 'user_prompt') {
    await userPromptAction(formData)
  }

  // сохраняем запрос в БД

  // редирект на страницу чата

}
