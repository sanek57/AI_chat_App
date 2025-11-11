// custom modules
import { redirect, type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'

const userPromptAction = async (formData: FormData): Promise<Response> => {
  const userPrompt = formData.get('user_prompt')

  try {
    const user = await account.get()

    if (userPrompt) {
      // fetch to ai
      return new Response(
        JSON.stringify({
          response: 'User prompt, generate a concise and informative',
        })
      )
    }
  } catch (error) {
    console.log(`Error fetched user prompt: ${error}`)
  }
  // сохраняем запрос в БД

  // редирект на страницу чата
  return redirect(`/${1}`)
}

const conversationAction = async (formData: FormData): Promise<Response> => {
  const id = formData.get('conversation_id')
  const conversationTitle = formData.get('conversation_title')

  try {
    // удаление записи из БД
    return new Response(JSON.stringify({ conversationTitle }))
  } catch (error) {
    console.log(`Error deleting conversation: ${error}`)
  }

  return redirect(`/`)
}

export const appAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response> => {
  const formData = await request.formData()

  const requestType = formData.get('request_type')

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData)
  }

  if (requestType === 'delete_conversation') {
    return await conversationAction(formData)
  }
}
