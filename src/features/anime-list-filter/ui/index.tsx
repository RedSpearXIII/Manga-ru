import React, { lazy, Suspense } from "react"
import styles from "./styles.module.pcss"
import { Search } from "./filters-selects/search"
import { FilterTags } from "./filter-tags"
import { ExtraFilter } from "./extra-filter"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"
import {
  Status,
  Studios,
  AnimeType,
  Genres,
  MinimalAge,
} from "./filters-selects"

const FilterItemsMobile = lazy(() => import("./filter-items-mobile"))

export const AnimeListFilter = () => {
  const { screenWidth } = useScreenSize()

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <Search />
          {screenWidth >= Breakpoints.xxl && (
            <>
              <AnimeType />
              <Status />
              <Studios />
              <MinimalAge />
              <Genres />
            </>
          )}
        </div>
        <div>
          <ExtraFilter />
        </div>
      </div>

      {screenWidth < Breakpoints.xxl && (
        <Suspense>
          <FilterItemsMobile />
        </Suspense>
      )}

      <FilterTags />
    </div>
  )
}
