import React from "react"
import { AnimeList } from "./ui/anime-list"
import { AnimeListFilter } from "~features/anime-list-filter"

export const AnimePage = () => {
  return (
    <div>
      <AnimeListFilter />

      <AnimeList />
    </div>
  )
}

export default AnimePage
