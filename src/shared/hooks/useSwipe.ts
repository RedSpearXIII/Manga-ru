import { useEffect, useState } from "react"

export const useSwipe = () => {
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [endX, setEndX] = useState(0)
  const [endY, setEndY] = useState(0)

  useEffect(() => {
    // Обработчик события начала свайпа
    const handleStartSwipe = (e: any) => {
      if (e.type === "touchstart") {
        setStartX(e.touches[0].clientX)
        setStartY(e.touches[0].clientY)
      } else if (e.type === "mousedown") {
        setStartX(e.clientX)
        setStartY(e.clientY)
      }
    }

    // Обработчик события движения пальца или мыши
    const handleMoveSwipe = (e: any) => {
      if (e.type === "touchmove") {
        setEndX(e.touches[0].clientX)
        setEndY(e.touches[0].clientY)
      } else if (e.type === "mousemove") {
        setEndX(e.clientX)
        setEndY(e.clientY)
      }
    }

    // Обработчик события окончания свайпа
    const handleEndSwipe = (e: any) => {
      if (e.type === "touchend") {
        setEndX(e.changedTouches[0].clientX)
        setEndY(e.changedTouches[0].clientY)
      } else if (e.type === "mouseup") {
        setEndX(e.clientX)
        setEndY(e.clientY)
      }
    }

    // Добавляем обработчики событий
    document.addEventListener("touchstart", handleStartSwipe, false)
    document.addEventListener("mousedown", handleStartSwipe, false)
    document.addEventListener("touchmove", handleMoveSwipe, false)
    document.addEventListener("mousemove", handleMoveSwipe, false)
    document.addEventListener("touchend", handleEndSwipe, false)
    document.addEventListener("mouseup", handleEndSwipe, false)

    // Убираем обработчики событий при размонтировании компонента
    return () => {
      document.removeEventListener("touchstart", handleStartSwipe, false)
      document.removeEventListener("mousedown", handleStartSwipe, false)
      document.removeEventListener("touchmove", handleMoveSwipe, false)
      document.removeEventListener("mousemove", handleMoveSwipe, false)
      document.removeEventListener("touchend", handleEndSwipe, false)
      document.removeEventListener("mouseup", handleEndSwipe, false)
    }
  }, [])

  return { startX, startY, endX, endY }
}
