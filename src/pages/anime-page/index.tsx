import React from "react"
import { AnimeList } from "./ui/anime-list"
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
