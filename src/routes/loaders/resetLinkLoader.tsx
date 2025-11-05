// node module
import { redirect } from 'react-router'

// custom modules
import { account } from '../../../../appWriter/src/lib/appwrite'

export const resetLinkLoader = async (): Promise<Response | null> => {
  try {
    await account.get()
  } catch (error) {
    console.log(`Error getting user session: ${error}`)

    return null
  }

  return redirect('/')
}
