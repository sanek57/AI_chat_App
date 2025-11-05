// node module
import { redirect, type ActionFunctionArgs } from 'react-router'

// custom modules
import { account } from '../../../../appWriter/src/lib/appwrite'

export const resetPasswordLoader = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response | null> => {
  const url = new URL(request.url)

  try {
    // есть пользователь на сброс пароля
    await account.get()
    return redirect('/')
  } catch (error) {
    console.log(`Error getting user session: ${error}`)
  }

  // если нет активной сесии то перекидываем на страницу сброса пароля
  if (!url.searchParams.get('userId') && !url.searchParams.get('secret')) {
    return redirect('/reset-link')
  }
  return null
}
