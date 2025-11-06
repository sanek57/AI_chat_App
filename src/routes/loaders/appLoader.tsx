import { redirect } from 'react-router'

// custom modules
import { account } from '../../../../appWriter/src/lib/appWriter'

export const appLoader = async (): Promise<Response | any> => {
  const data = {
    user: {},
  }

  try {
    data.user = await account.get()
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return redirect('/login')
  }

  return data
}
