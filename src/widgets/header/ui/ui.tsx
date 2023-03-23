import React from "react"
import styles from "./styles.module.pcss"
import UserPanel from "~widgets/user-panel/ui/ui"
import NoticePanel from "~widgets/notice-panel/ui/ui"
import useSticky from "~widgets/header/hooks/useSticky"
import { motion } from "framer-motion"

const variants = {
  sticky: {
    y: -0,
  },
  hidden: {
    y: -300,
  },
}

export const Header = () => {
  const isSticky = useSticky()

  return (
    <motion.div
      transition={{ type: "just" }}
      animate={isSticky ? "sticky" : "hidden"}
      variants={variants}
      className={styles.wrapper}
    >
      <header className={styles.header}>
        <h3></h3>

        <div className={styles.rightBlock}>
          <div className={styles.rightItem}>
            <NoticePanel />
          </div>
          <div className={styles.rightItem}>
            <UserPanel />
          </div>
        </div>
      </header>
    </motion.div>
  )
}
