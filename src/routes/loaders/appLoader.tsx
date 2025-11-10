import { redirect } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'
import type { IResponseConversation } from '..'

export const appLoader = async (): Promise<
  Response | IResponseConversation
> => {
  const data = {
    user: {},
  }

  try {
    data.user = await account.get()
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return redirect('/login')
  }

  // получаем данные из БД и запихиваем их в data

  return data
}
