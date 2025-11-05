// custom modules
import { redirect, type ActionFunctionArgs } from 'react-router'
import { account } from '../../../../appWriter/src/lib/appwrite'
import type { IResponseMy } from '..'

export const resetPasswordAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<Response | IResponseMy> => {
  const formData = await request.formData()
  const url = new URL(request.url)

  try {
    await account.updateRecovery(
        url.searchParams.get('userId'),
        url.searchParams.get('secret'),
        formData.get('password')
    )
    return redirect('/login')
  } catch (e) {
    return {
      ok: false,
      message: `Error updating password: ${e}`,
    }
  }
}
