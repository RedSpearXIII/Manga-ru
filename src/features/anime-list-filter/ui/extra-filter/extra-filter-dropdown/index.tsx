import React from "react"
import styles from "./styles.module.pcss"
import { Translations, RatingMpa, Years, Season } from "../../filters-selects"
import { motion } from "framer-motion"

export const ExtraFilterDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className={styles.dropdown}
    >
      <div className={styles.filters}>
        <div className={styles.filter}>
          <RatingMpa inExtraFilter />
        </div>
        <div className={styles.filter}>
          <Years inExtraFilter />
        </div>
        <div className={styles.filter}>
          <Season inExtraFilter />
        </div>
        <div className={styles.filter}>
          <Translations inExtraFilter />
        </div>
      </div>
    </motion.div>
  )
}
