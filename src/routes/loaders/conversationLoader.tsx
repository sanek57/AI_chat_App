// node modules
import { redirect, type Params } from 'react-router'

// custom modules
import { account } from '../../lib/appwrite'
import type { IResponseConversation } from '..'

export const conversationLoader = async ({
  params,
}: Params): Promise<Response | IResponseConversation> => {
  const { chatId } = params

  const data: IResponseConversation = {
    user: {},
    conversation: {},
  }

  try {
    data.user = await account.get()
  } catch (error) {
    console.log(`Error getting user account: ${error}`)

    return redirect('/login')
  }

  // получаем данные из БД и запихиваем их в data
  data.conversation = {
    title: 'Chat 1',
    chats: [
      {
        user_prompt: `My something prompt:
         git add .
         git rm --cached vite.config.js
        fatal: pathspec 'vite.config.js did not match any files
         git rm --cached vite.config.ts
        rm 'vite.config.ts'
         git rm --cached vite.config.ts

         npm i axios

        up to date, audited 245 packages in 2s

        58 packages are looking for funding

        found 0 vulnerabilities
         npm uninstall axios

        up to date, audited 245 packages in 1s

        58 packages are looking for funding
        `,
        ai_response: `Fake response from AI service: 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, culpa neque quia nesciunt et vel, accusantium voluptate reprehenderit facilis quas tempore quidem repudiandae blanditiis eveniet sapiente ullam id fugiat voluptatibus voluptas ut iusto, porro ad. Error sint placeat perspiciatis sapiente!`,
      },
    ],
  }

  return data
}
