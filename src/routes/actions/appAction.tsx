// custom modules
import { type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'

// giga chat
import { getCompletions } from '../../api/gigaChatAi'

const userPromptAction = async (formData: FormData): Promise<Response> => {
  const userPrompt = formData.get('user_prompt')

  const user = await account.get()

  if (userPrompt) {
    const completion = await getCompletions(userPrompt.toString())

    console.log(completion.choices[0]?.message.content)
  }
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
