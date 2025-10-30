// export const privateRoutes = [
//   { path: '/about', element: About },
//   { path: '/posts', element: Posts },
//   { path: '/postsInf', element: PostsInfinity },
//   { path: '/post/:id', element: PostPage },

import App from '../App'
import { Register } from '../pages/Register'

// ]
export const publicRoutes = [
  { path: '/', element: App },
  { path: '/register', element: Register },
]
