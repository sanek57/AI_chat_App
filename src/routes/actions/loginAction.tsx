import type { IResponseMy } from '..'
// custom modules
import { redirect, type ActionFunctionArgs } from 'react-router'
import { account } from '../../../../appWriter/src/lib/appwrite'

export const loginAction = async ({
  request,
}: ActionFunctionArgs<any>): Promise<IResponseMy | Response> => {
  const formData = await request.formData()
  try {
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    )
    return redirect('/')
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      message: `Error creating user session: ${e}`,
    }
  }
}
