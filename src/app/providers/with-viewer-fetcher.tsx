import React, { useEffect } from "react"
import { loginModel } from "~features/auth/login"

export const withViewerFetcher = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      loginModel.getUserFx()
    }
  }, [])

  return <>{component()}</>
}
