import React from "react"
import styles from "./styles.module.pcss"
import { InfoItem } from "../info-item"
import { PercentageBar } from "./percentage-bar"
export const StatusDistribution = () => {
  return (
    <div className={styles.statusDistribution}>
      <div className={styles.content}>
        <div className={styles.distributionItem}>
          <InfoItem
            title={"1200 людей"}
            value={"Смотрю"}
            color={"emerald-400"}
          />
        </div>
        <div className={styles.distributionItem}>
          <InfoItem
            title={"625 людей"}
            value={"Просмотренно"}
            color={"blue-400"}
          />
        </div>
        <div className={styles.distributionItem}>
          <InfoItem
            title={"215 людей"}
            value={"Запланированно"}
            color={"orange-300"}
          />
        </div>
        <div className={styles.distributionItem}>
          <InfoItem title={"13 людей"} value={"Отложенно"} color={"red-400"} />
        </div>
        <div className={styles.distributionItem}>
          <InfoItem title={"2 людей"} value={"Брошенно"} color={"rose-500"} />
        </div>
      </div>
      <PercentageBar />
    </div>
  )
}
