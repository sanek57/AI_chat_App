// custom modules
import { type ActionFunctionArgs } from 'react-router'
import { account } from '../../../../appWriter/src/lib/appwrite'
import type { IResponseMy } from '..'

export const resetLinkAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response | IResponseMy> => {
  const formData = await request.formData()
  try {
    await account.createRecovery(
      formData.get('email'),
      `${location.origin}/reset-password`,
    )
    return {
      ok: true,
      message:
        'You will recive a password reset link shortly. Please check your email and follow the instructions to reset your password.',
    }
  } catch (e) {
    return {
      ok: false,
      message: `Error getting password reset link: ${e}`,
    }
  }
}
