import React from "react"
import { RouteProps } from "react-router-dom"

type Props = {
  path: string
} & RouteProps

// Компонент высшего порядка (HOC), который проверяет авторизацию пользователя
export const PrivateRoute = ({ path, ...props }: Props) => {
  return <h1></h1>
  // return isUserAuthenticated() ? (
  //   <Route {...props} path={path} />
  // ) : (
  //   <Navigate to="/login" replace={true} />
  // );
}
