import React from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { motion, Variants } from "framer-motion"
import { MenuToggle } from "~widgets/mobile-nav-menu/ui/menu-toggle"
import { useMobileNavMenuStore } from "../model"
import { NavItems } from "./nav-items"
import clsx from "clsx"

const variants: Variants = {
  open: {
    height: "auto",
    width: 60,
  },
  closed: {
    height: 50,
    width: 50,
  },
}

export const MobileNavMenu = () => {
  const { isOpened } = useMobileNavMenuStore()
  return (
    <Portal>
      <nav className={styles.wrapper}>
        <motion.ul
          variants={variants}
          animate={isOpened ? "open" : "closed"}
          className={clsx(styles.menu, isOpened && styles.menuOpened)}
        >
          <NavItems />
          <MenuToggle />
        </motion.ul>
      </nav>
    </Portal>
  )
}
