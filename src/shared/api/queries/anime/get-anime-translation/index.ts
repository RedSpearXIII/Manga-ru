import { publicHttp } from "~shared/api"
import { AnimeTranslation } from "./types"
import { createQuery } from "@farfetched/core"

export const getAnimeTranslation = createQuery({
  handler: async () => {
    try {
      const { data } = await publicHttp.get<{ data: AnimeTranslation[] }>(
        `anime/translations`
      )

      return data.data
    } catch (e) {
      console.log(e)
    }
  },
})

export * from "./types"
