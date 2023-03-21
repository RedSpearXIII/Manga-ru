import { useEffect, useState } from "react"

const usePageOffset = () => {
  const [pageOffset, setPageOffset] = useState({ x: 0, y: 0 })

  const onScroll = () => {
    setPageOffset({ x: window.pageXOffset, y: window.pageYOffset })
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return { ...pageOffset }
}

export default usePageOffset
