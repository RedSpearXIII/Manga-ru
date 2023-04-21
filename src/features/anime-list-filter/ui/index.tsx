import React, { lazy, Suspense } from "react"
import styles from "./styles.module.pcss"
import { Search } from "./search"
import { FilterTags } from "./filter-tags"
import { ExtraFilter } from "./extra-filter"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"

const AnimeType = lazy(() => import("./anime-type"))
const Status = lazy(() => import("./status"))
const Season = lazy(() => import("./season"))
const MinimalAge = lazy(() => import("./minimal-age"))
const Genres = lazy(() => import("./genres"))

export const AnimeListFilter = () => {
  const screenSize = useScreenSize()

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <Search />
          {screenSize >= Breakpoints.xxl && (
            <Suspense>
              <AnimeType />
              <Status />
              <Season />
              <MinimalAge />
              <Genres />
            </Suspense>
          )}
        </div>
        <div>
          <ExtraFilter />
        </div>
      </div>

      <FilterTags />
    </div>
  )
}
