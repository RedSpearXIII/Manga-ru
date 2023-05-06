import React, { useEffect } from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { motion, stagger, useAnimate, Variants } from "framer-motion"
import { useMobileNavButtonStore } from "../model"
import { NavItems } from "./nav-items"
import { Dots } from "./dots"

const staggerItems = stagger(0.05, {
  startDelay: 0,
})

const variants: Variants = {
  closed: {
    width: 50,
    height: 50,
  },
  opened: {
    width: 200,
    height: 200,
  },
}

export const MobileNavButton = () => {
  const { isOpened, setIsOpen } = useMobileNavButtonStore()

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("span", isOpened ? { display: "none" } : { display: "block" }, {
      duration: 0.15,
      delay: isOpened ? staggerItems : 0,
    })
    animate(
      "li",
      isOpened
        ? { scale: 1, opacity: 1, display: "flex" }
        : { scale: 0, opacity: 0, display: "none" },
      {
        duration: 0.15,
        delay: isOpened ? staggerItems : 0,
      }
    )
  }, [isOpened])

  const openNavButton = () => {
    setIsOpen(true)
  }
  return (
    <Portal>
      <motion.div ref={scope}>
        <motion.nav
          onClick={openNavButton}
          variants={variants}
          transition={{ duration: 0.15 }}
          animate={isOpened ? "opened" : "closed"}
          className={styles.wrapper}
        >
          <ul
            onClick={(e) => isOpened && e.stopPropagation()}
            className={styles.navBtn}
          >
            <NavItems />
            <Dots />
          </ul>
        </motion.nav>
      </motion.div>
    </Portal>
  )
}
