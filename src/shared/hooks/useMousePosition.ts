import { useEffect, useState } from "react"

export const useMousePosition = () => {
  const [xPosition, setXPosition] = useState(0)
  const [yPosition, setYPosition] = useState(0)

  const onMouseMove = (e: globalThis.MouseEvent) => {
    setXPosition(e.clientX)
    setYPosition(e.clientY)
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return [xPosition, yPosition]
}
