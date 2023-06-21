import React from "react"
import styles from "./styles.module.pcss"

type Props = {
  data: { name: string; value: number; fill: string }[]
}

export const CustomLegend = ({ data }: Props) => {
  return (
    <div className={styles.legend}>
      {data.map((item) => (
        <div className={styles.legendItem}>
          <div className={styles.leftSide}>
            <div
              style={{ backgroundColor: item.fill }}
              className={styles.color}
            />
            <p>{item.name}</p>
          </div>

          <div className={styles.whiteBox}>{item.value}</div>
        </div>
      ))}
    </div>
  )
}
