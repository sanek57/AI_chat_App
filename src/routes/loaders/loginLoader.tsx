import { redirect } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'

export const loginLoader = async (): Promise<Response | null> => {
  try {
    const user = await account.get()
    // console.log(user)
    return redirect('/')
  } catch (error) {
    console.log(`1, Error getting user session: ${error}`)

    return null
  }
}
