// node module
import { redirect } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'

export const registerLoader = async (): Promise<Response | null> => {
  try {
    await account.get()
  } catch (error) {
    console.log(`3, Error getting user session: ${error}`)

    return null
  }
  return redirect('/')
}
