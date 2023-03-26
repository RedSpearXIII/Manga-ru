import React from "react"
import { Search } from "./search"
import styles from "./styles.module.pcss"
import { FilterTags } from "./filter-tags"

export const MangaListFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Search />
      </div>
      <div>
        <FilterTags />
      </div>
    </div>
  )
}
