import { useEffect, useState } from "react"

export const usePageOffset = () => {
  const [pageOffset, setPageOffset] = useState({ x: 0, y: 0 })

  const onScroll = () => {
    setPageOffset({ x: window.scrollX, y: window.scrollY })
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return { ...pageOffset }
}
