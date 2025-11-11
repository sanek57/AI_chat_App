import type { SubmitFunction } from 'react-router'

interface IDeleteConversationArgs {
  id: number
  title: string
  submit: SubmitFunction
}

export const deleteConversation = ({
  id,
  title,
  submit,
}: IDeleteConversationArgs): void => {
  const deleteConfirm = confirm(
    `Delete chat: "${title}"? \n\nYou'll no longer this chat here. This will also delete related activity like prompts, responses.`
  )

  if (!deleteConfirm) return

  submit(
    {
      request_type: 'delete_conversation',
      conversation_id: id,
      conversation_title: title,
    },
    {
      method: 'DELETE',
      encType: 'application/x-www-form-urlencoded',
      action: '/',
    }
  )
}
