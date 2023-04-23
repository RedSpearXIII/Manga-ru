import React from "react"
import { AnimeList } from "./ui"
import { AnimeListFilter } from "~features/anime-list-filter"

export const AnimePage = () => {
  return (
    <div className={"px-2"}>
      <AnimeListFilter />
      <AnimeList />
    </div>
  )
}

export default AnimePage
