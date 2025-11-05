import { redirect } from 'react-router'

// custom modules
import { account } from '../../../../appWriter/src/lib/appwrite'

export const loginLoader = async (): Promise<Response | null> => {
  try {
    const user = await account.get()
    console.log(user)
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return null
  }

  return redirect('/')
}
