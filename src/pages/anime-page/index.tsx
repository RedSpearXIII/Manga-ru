import React from "react"
import { AnimeList } from "./anime-list"
import { AnimeListFilter } from "~features/anime-list-filter"

export const AnimePage = () => {
  return (
    <div>
      <div className={"container mx-auto"}>
        <AnimeListFilter />
      </div>
      <AnimeList />
    </div>
  )
}

export default AnimePage
