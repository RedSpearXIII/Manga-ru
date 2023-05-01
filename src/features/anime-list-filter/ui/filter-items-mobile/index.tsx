import React, { Suspense } from "react"
import styles from "./styles.module.pcss"
import {
  AnimeType,
  Genres,
  Translations,
  MinimalAge,
  Status,
  RatingMpa,
  Season,
  Years,
} from "../filters-selects"
import { useExtraFilterStore } from "~features/anime-list-filter"
import { getUserDeviceType } from "~shared/lib/user"
import clsx from "clsx"

const FilterItemsMobile = () => {
  const userDeviceType = getUserDeviceType()
  const isOpened = useExtraFilterStore((store) => store.isOpened)

  if (!isOpened) return null

  return (
    <Suspense>
      <div
        className={clsx(
          styles.wrapper,
          userDeviceType === "desktop" && "scrollbar"
        )}
      >
        <div className={styles.filterItem}>
          <AnimeType />
        </div>
        <div className={styles.filterItem}>
          <Genres />
        </div>
        <div className={styles.filterItem}>
          <Translations />
        </div>
        <div className={styles.filterItem}>
          <MinimalAge />
        </div>
        <div className={styles.filterItem}>
          <Status />
        </div>
        <div className={styles.filterItem}>
          <RatingMpa />
        </div>
        <div className={styles.filterItem}>
          <Season />
        </div>
        <div className={styles.filterItem}>
          <Years />
        </div>
      </div>
    </Suspense>
  )
}

export default FilterItemsMobile
