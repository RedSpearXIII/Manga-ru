import React, { lazy, Suspense } from "react"
import styles from "./styles.module.pcss"
import { RatingMpa } from "~features/anime-list-filter/ui/rating-mpa"
import { Years } from "~features/anime-list-filter/ui/years"
import { Translations } from "~features/anime-list-filter/ui/translation"
import { Breakpoints } from "~shared/types"
import { useScreenSize } from "~shared/hooks"
import { motion } from "framer-motion"

const AnimeType = lazy(() => import("../../anime-type"))
const Status = lazy(() => import("../../status"))
const Season = lazy(() => import("../../season"))
const MinimalAge = lazy(() => import("../../minimal-age"))
const Genres = lazy(() => import("../../genres"))

const ExtraFilterDropdown = () => {
  const screenSize = useScreenSize()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className={styles.dropdown}
    >
      <div className={styles.filters}>
        <div className={styles.filter}>
          <RatingMpa />
        </div>
        <div className={styles.filter}>
          <Years />
        </div>
        <div className={styles.filter}>
          <Translations />
        </div>
        {screenSize <= Breakpoints.xxl && (
          <Suspense>
            <div className={styles.filter}>
              <AnimeType inExtraFilter />
            </div>
            <div className={styles.filter}>
              <Status inExtraFilter />
            </div>
            <div className={styles.filter}>
              <Season inExtraFilter />
            </div>
            <div className={styles.filter}>
              <MinimalAge inExtraFilter />
            </div>
            <div className={styles.filter}>
              <Genres inExtraFilter />
            </div>
          </Suspense>
        )}
      </div>
    </motion.div>
  )
}

export default ExtraFilterDropdown
