import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const resizeHandlers = new Set<
  Dispatch<SetStateAction<{ screenWidth: number; screenHeight: number }>>
>()

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  })

  useEffect(() => {
    resizeHandlers.add(setWindowSize)

    return () => {
      resizeHandlers.delete(setWindowSize)
    }
  }, [])

  return windowSize
}
