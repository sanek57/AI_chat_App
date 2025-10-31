// custom modules
import { redirect, type ActionFunctionArgs } from 'react-router'
import { account } from '../../../../appWriter/src/lib/appwrite'
import { generateID } from '../../utils/generateId'

interface User {
  userId: number
  name: string
  email: string
  password: string
}

export const registerAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response> => {
  const formData = await request.formData()
  try {
    await account.create(
      generateID(),
      formData.get('email'),
      formData.get('password'),
      formData.get('name'),
    )
  } catch (e) {
    console.log(`Error creating user: ${e}`)
  }

  // после успешной аутентифкации - делаем сессию пользователю по почте и паролю
  try {
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    )
  } catch (e) {
    console.log(`Error creating email session: ${e}`)
    return redirect('/login')
  }
  return redirect('/')
}
