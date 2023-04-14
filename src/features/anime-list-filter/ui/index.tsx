import React from "react"
import styles from "./styles.module.pcss"
import { Search } from "./search"
import { FilterTags } from "./filter-tags"
import { Status } from "./status"
import { Season } from "./season"
import { AnimeType } from "./anime-type"
import { MinimalAge } from "./minimal-age"
import { Genres } from "./genres"
import { ExtraFilter } from "./extra-filter"

export const AnimeListFilter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <Search />
          <AnimeType />
          <Status />
          <Season />
          <MinimalAge />
          <Genres />
        </div>
        <div>
          <ExtraFilter />
        </div>
      </div>

      <FilterTags />
    </div>
  )
}
