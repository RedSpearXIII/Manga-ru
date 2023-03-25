import { stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

const useListAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("ul", {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? "auto" : 0,
    })

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(5px)" },
      {
        duration: 0.1,
        delay: isOpen ? staggerMenuItems : 0,
      }
    )
  }, [isOpen])

  return scope
}

export default useListAnimation
