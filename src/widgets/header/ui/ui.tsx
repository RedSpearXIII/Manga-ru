import React from "react"
import styles from "./styles.module.pcss"
import UserPanel from "~widgets/user-panel/ui/ui"
import NoticePanel from "~widgets/notice-panel/ui/ui"
import useSticky from "~widgets/header/hooks/useSticky"
import clsx from "clsx"

export const Header = () => {
  const isSticky = useSticky()

  return (
    <header className={clsx(styles.header, !isSticky && styles.hidden)}>
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
  )
}
