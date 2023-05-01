import React, { HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>
const Badge = ({ children, ...other }: Props) => {
  return (
    <div {...other} className={clsx(styles.badge, other.className)}>
      {children}
    </div>
  )
}

export default Badge
