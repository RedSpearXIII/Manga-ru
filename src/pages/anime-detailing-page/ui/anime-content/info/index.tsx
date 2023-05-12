import React from "react"
import styles from "./styles.module.pcss"
import { Genres } from "./genres"
import { Studios } from "./studios"

export const Info = () => {
  return (
    <div className={styles.info}>
      <Genres />
      <Studios />
    </div>
  )
}
