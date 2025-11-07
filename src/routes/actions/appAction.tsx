// custom modules
import { type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'

const userPromptAction = async (formData: FormData): Promise<Response> => {
  const userPrompt = formData.get('user_prompt')

  const user = await account.get()

  return null
}

export const appAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response | void> => {
  const formData = await request.formData()

  const requestType = formData.get('request_type')

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData)
  }

}
