import { redirect } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'
<<<<<<< HEAD
import type { IResponseConversation } from '..'

export const appLoader = async (): Promise<
  Response | IResponseConversation
> => {
=======

export const appLoader = async (): Promise<Response | any> => {
>>>>>>> origin/dev
  const data = {
    user: {},
  }

  try {
    data.user = await account.get()
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return redirect('/login')
  }

<<<<<<< HEAD
  // получаем данные из БД и запихиваем их в data

=======
>>>>>>> origin/dev
  return data
}
