import React, { ReactNode } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

const Tabs = ({ children }: { children: ReactNode }) => {
  return <div className={styles.tabs}>{children}</div>
}

type TabProps = {
  value: string
  icon?: ReactNode
  active?: boolean
}

const TabItem = ({ value, icon, active }: TabProps) => {
  return (
    <div className={clsx(styles.tab, active && styles.tabActive)}>
      {icon && <div className={styles.tabIcon}>icon</div>}
      <p className={styles.tabText}>{value}</p>
    </div>
  )
}

Tabs.TabItem = TabItem

export default Tabs
