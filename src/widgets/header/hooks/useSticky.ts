import { useEffect, useState } from "react"

const useSticky = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setIsSticky(prevScrollPos > currentScrollPos || currentScrollPos < 100)
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, isSticky])

  return isSticky
}

export default useSticky
