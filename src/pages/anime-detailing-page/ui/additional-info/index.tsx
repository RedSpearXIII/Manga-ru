import React from "react"
import styles from "./styles.module.pcss"
import { StatusDistribution } from "./status-distribution"
import Characteristics from "./characteristics"

export const AdditionalInfo = () => {
  return (
    <div className={styles.additionalInfoContainer}>
      <div className={styles.infoBox}>
        <h3>Дополнительная информация</h3>
        <Characteristics />
      </div>
      <div className={styles.infoBox}>
        <h3>В списках у людей</h3>
        <StatusDistribution />
      </div>
    </div>
  )
}
