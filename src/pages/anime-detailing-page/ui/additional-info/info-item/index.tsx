import React, { FC } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

interface InfoItemProps {
  title: string
  value: string | number
  color: string
}

export const InfoItem: FC<InfoItemProps> = ({ title, value, color }) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <div className={clsx(`bg-${color}`, styles.value, `shadow-${color}`)}>
        <p>{value}</p>
      </div>
    </div>
  )
}
