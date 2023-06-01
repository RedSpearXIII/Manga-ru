import React from "react"
import { AnimeList } from "~widgets/anime-list"
import { AnimeListFilter } from "~features/anime-list-filter"
//юзелес импорты
export const AnimePage = () => {
  return (
    <div className={"px-2"}>
      <AnimeListFilter />
      <AnimeList />
    </div>
  )
}

export default AnimePage
