import React from "react"
import styles from "./styles.module.pcss"
import UserPanel from "~widgets/user-panel/ui/ui"
import NoticePanel from "~widgets/notice-panel/ui/ui"

export const Header = () => {
  return (
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
  )
}
