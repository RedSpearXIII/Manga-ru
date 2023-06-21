import { publicHttp } from "~shared/api"
import { createQuery, retry } from "@farfetched/core"

export type AnimeStudio = {
  id: string
  studio: string
}

export const getAnimeStudios = createQuery({
  handler: async () => {
    const {
      data: { data },
    } = await publicHttp.get<{ data: AnimeStudio[] }>("/anime/studios")
    return data
  },
})

retry(getAnimeStudios, { times: 3, delay: 1000 })
