import { publicHttp } from "~shared/api"
import { createQuery } from "@farfetched/core"

export type AnimeGenre = { id: string; genre: string }

export const getAnimeGenres = createQuery({
  handler: async () => {
    try {
      const { data } = await publicHttp.get<{ data: AnimeGenre[] }>(
        `anime/genres`
      )

      return data.data
    } catch (e) {
      console.log(e)
    }
  },
})
