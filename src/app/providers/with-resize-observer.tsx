import React, { useEffect } from "react"
import { resizeHandlers } from "~shared/hooks"

export const withResizeObserver = (component: () => React.ReactNode) => () => {
  const handleResize = () => {
    resizeHandlers.forEach((handler) =>
      handler({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      })
    )
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <>{component()}</>
}
