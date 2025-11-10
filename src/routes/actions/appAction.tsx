// custom modules
import { type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'

<<<<<<< HEAD
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
=======
// giga chat
import { getCompletions } from '../../api/gigaChatAi'

const userPromptAction = async (formData: FormData): Promise<Response> => {
  const userPrompt = formData.get('user_prompt')

  const user = await account.get()

  if (userPrompt) {
    const completion = await getCompletions(userPrompt.toString())

    console.log(completion.choices[0]?.message.content)
  }
>>>>>>> origin/dev
}

export const appAction = async ({
  request,
<<<<<<< HEAD
}: ActionFunctionArgs<any>): Promise<void> => {
=======
}: ActionFunctionArgs<any>): Promise<Response | void> => {
>>>>>>> origin/dev
  const formData = await request.formData()

  const requestType = formData.get('request_type')

  if (requestType === 'user_prompt') {
<<<<<<< HEAD
    await userPromptAction(formData)
  }

  // сохраняем запрос в БД

  // редирект на страницу чата

=======
    return await userPromptAction(formData)
  }
>>>>>>> origin/dev
}
