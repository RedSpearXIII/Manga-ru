import React from "react"
import { Navigate, Route, RouteProps } from "react-router-dom"

type Props = {
  path: string
  isAuth: boolean
} & RouteProps

// Компонент высшего порядка (HOC), который проверяет авторизацию пользователя
export const PrivateRoute = ({ path, isAuth, ...props }: Props) => {
  return isAuth ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace={true} />
  )
}
