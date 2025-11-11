import type { IResponseMy } from '..'
// custom modules
import { redirect, type ActionFunctionArgs } from 'react-router'
import { account } from '../../lib/appwrite'
import { generateID } from '../../utils/generateId'

export const registerAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<IResponseMy | Response> => {
  const formData = await request.formData()
  try {
    await account.create(
      generateID(),
      formData.get('email'),
      formData.get('password'),
      formData.get('name'),
    )
  } catch (e) {
    return {
      ok: false,
      message: `Error creating user: ${e}`,
    }
  }

  // // после успешной аутентифкации - делаем сессию пользователю по почте и паролю
  // try {
  //   await account.createEmailPasswordSession(
  //     formData.get('email'),
  //     formData.get('password'),
  //   )
  //   return redirect('/login')
  // } catch (e) {
  //   return {
  //     ok: false,
  //     message: `Error creating user session: ${e}`,
  //   }
  // }
}
