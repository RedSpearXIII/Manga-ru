import React, { FC, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.pcss"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <div className={styles.badge}>
      <p>{children}</p>
    </div>
  )
}

export default Badge
