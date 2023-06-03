import React from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { motion, Variants } from "framer-motion"
import { MenuToggle } from "~widgets/mobile-nav-menu/ui/menu-toggle"
import { mobileNavMenuModel } from "../model"
import { NavItems } from "./nav-items"
import clsx from "clsx"
import { useStore } from "effector-react"

const variants: Variants = {
  open: {
    height: "auto",
  },
  closed: {
    height: 60,
  },
}

export const MobileNavMenu = () => {
  const { isOpened } = useStore(mobileNavMenuModel.$mobileNavMenu)
  return (
    <Portal>
      <nav className={styles.wrapper}>
        <motion.ul
          variants={variants}
          animate={isOpened ? "open" : "closed"}
          className={clsx(styles.menu)}
        >
          <NavItems />
          <MenuToggle />
        </motion.ul>
      </nav>
    </Portal>
  )
}
