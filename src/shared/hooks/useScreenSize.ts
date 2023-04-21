import { useEffect, useState } from "react"

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize() // получаем начальную ширину экрана

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
