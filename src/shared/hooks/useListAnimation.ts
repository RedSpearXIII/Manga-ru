import { stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

export const useListAnimation = (isOpen: boolean, duration?: number) => {
  const staggerMenuItems = stagger(duration || 0.1, {
    startDelay: duration || 0.15,
  })

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
        duration: duration || 0.1,
        delay: isOpen ? staggerMenuItems : 0,
      }
    )
  }, [isOpen])

  return scope
}
