import React, { FC, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const Badge: FC<BadgeProps> = ({ children, ...other }) => {
  return (
    <div {...other} className={clsx(styles.badge, other.className)}>
      {children}
    </div>
  )
}

export default Badge
