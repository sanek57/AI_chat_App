import GigaChat from 'gigachat'

export const giga = new GigaChat({
  credentials: import.meta.env.VITE_GIGA_CHAT_AUTH_KEY,
  scope: 'GIGACHAT_API_PERS',
  model: 'GigaChat',
  dangerouslyAllowBrowser: true
})
