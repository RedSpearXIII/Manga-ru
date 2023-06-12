import React, { HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

type Props = {
  children: ReactNode
  title?: string
} & HTMLAttributes<HTMLDivElement>
const Badge = ({ children, title, ...other }: Props) => {
  return (
    <div>
      {title && <p className={styles.title}>{title}</p>}
      <div {...other} className={clsx(styles.badge, other.className)}>
        {children}
      </div>
    </div>
  )
}

export default Badge
