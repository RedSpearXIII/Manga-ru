import React from "react"
import { Search } from "./search"
import styles from "./styles.module.pcss"
import { FilterTags } from "./filter-tags"
import { Status } from "./status"
import Season from "./season"
import RatingMpa from "./rating-mpa"
import AnimeType from "./anime-type"
import MinimalAge from "~features/anime-list-filter/ui/minimal-age"
import { Genres } from "~features/anime-list-filter/ui/genres"

export const AnimeListFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Search />
        <Status />
        <Season />
        <RatingMpa />
        <MinimalAge />
        <AnimeType />
        <Genres />
      </div>
      <div>
        <FilterTags />
      </div>
    </div>
  )
}
