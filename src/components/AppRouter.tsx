import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../routes'

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(route => (
        <Route
          path={route.path}
          element={<route.element />}
        />
      ))}
      {/* <Route
          path='*'
          element={
            <Navigate
              replace
              to='/login'
            />
          }
        /> */}
    </Routes>
  )
}
