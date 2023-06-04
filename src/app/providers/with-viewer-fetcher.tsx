import React, { useEffect } from "react"
import { viewerModel } from "~entities/viewer"

export const withViewerFetcher = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      viewerModel.getUserFx()
    }
  }, [])

  return <>{component()}</>
}
