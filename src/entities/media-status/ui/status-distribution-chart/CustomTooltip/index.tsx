import React from "react"
import styles from "./styles.module.pcss"

export const CustomTooltip = ({ payload }: any) => {
  if (payload.length === 0) return null
  const data = payload[0].payload
  console.log(data)
  return (
    <div className={styles.tooltip}>
      <p>{data.name}</p>
    </div>
  )
}
