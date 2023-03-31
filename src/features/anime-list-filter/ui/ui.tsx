import React from "react"
import { Search } from "./search"
import styles from "./styles.module.pcss"
import { FilterTags } from "./filter-tags"
import { Status } from "~features/anime-list-filter/ui/status"

export const AnimeListFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Search />
        <Status />
      </div>
      <div>
        <FilterTags />
      </div>
    </div>
  )
}
