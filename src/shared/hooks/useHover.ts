import { useState, useRef, useEffect } from "react"

function useHover(
  timeout: number = 300
): [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }] {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  function handleMouseEnter() {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsHovered(true)
  }

  function handleMouseLeave() {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, timeout)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return [isHovered, hoverProps]
}

export default useHover
