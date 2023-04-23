import React from "react"
import styles from "./styles.module.pcss"
import { StatusDistribution } from "./status-distribution"
import Characteristics from "./characteristics"

export const AdditionalInfo = () => {
  return (
    <div className={styles.additionalInfoContainer}>
      <div className={styles.infoBox}>
        <h6>Дополнительная информация</h6>
        <Characteristics />
      </div>
      <div className={styles.infoBox}>
        <h6>В списках у людей</h6>
        <StatusDistribution />
      </div>
    </div>
  )
}
