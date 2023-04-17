import React, { FC } from "react"
import styles from "./styles.module.pcss"

interface InfoItemProps {
  title: string
  value: string | number
}

export const InfoItem: FC<InfoItemProps> = ({ title, value }) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <div className={styles.value}>
        <p>{value}</p>
      </div>
    </div>
  )
}
