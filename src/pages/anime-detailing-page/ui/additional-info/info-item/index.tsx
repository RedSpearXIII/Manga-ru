import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  value: string | number
  color: string
}

export const InfoItem = ({ title, value, color, ...other }: Props) => {
  return (
    <div className={clsx(styles.item)} {...other}>
      <p className={styles.title}>{title}</p>
      <div className={clsx(`bg-${color}`, styles.value, `shadow-${color}`)}>
        <p>{value}</p>
      </div>
    </div>
  )
}
