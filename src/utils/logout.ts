// custom modules
import type { NavigateFunction } from 'react-router'
import { account } from '../lib/appwrite'

export const logout = async (navigate: NavigateFunction): Promise<void> => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.log(`Error deleting user session: ${error}`)
  }

  return navigate('/login')
}
