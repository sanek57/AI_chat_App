// custom modules
import { type ActionFunctionArgs, type Params } from 'react-router'
import { account } from '../../lib/appwrite'
import type { IChat } from '..'

export const conversationAction = async ({
  request,
  params,
}: ActionFunctionArgs<any> & Params<string>): Promise<null> => {
  const { chatId } = params

  const formData = await request.formData()

  const userPrompt = formData.get('user_prompt')

  try {
    // получаем всю историю чата из БД - если она есть
    // const response: Response = await fetch(`https://fakeUrl/${chatId}`)
    // const chats: IChat[] = await response.json()
    // const chatHistory: IChat[] = chats.map(({ ai_response, user_prompt }) => ({
    //   user_prompt,
    //   ai_response,
    // }))
  } catch (error) {
    console.log(`Error getting chat: ${error}`)
  }

  try {
    const aiResponse: Response = await fetch(`https://fakeUrl/${userPrompt}`)
  } catch (error) {
    console.log(`Error getting Ai response: ${error}`)
  }

  // сохраняем ответ в БД

  return null
}
