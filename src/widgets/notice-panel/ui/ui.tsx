import React from "react"
import styles from "./styles.module.pcss"
import { IoNotificationsSharp } from "react-icons/all"

const NoticePanel = () => {
  return (
    <div>
      <IoNotificationsSharp className={styles.icon} />
    </div>
  )
}

export default NoticePanel
