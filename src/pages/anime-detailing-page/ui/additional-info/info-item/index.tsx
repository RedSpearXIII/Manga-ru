import React from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

type Props = {
  title: string
  value: string | number
  color: string
}

export const InfoItem = ({ title, value, color }: Props) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <div className={clsx(`bg-${color}`, styles.value, `shadow-${color}`)}>
        <p>{value}</p>
      </div>
    </div>
  )
}
