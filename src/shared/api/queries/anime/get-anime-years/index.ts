import { createQuery, retry } from "@farfetched/core"
import { publicHttp } from "~shared/api"

export const getAnimeYears = createQuery({
  handler: async () => {
    const {
      data: { data },
    } = await publicHttp.get<{ data: string[] }>("anime/years")
    return data
  },
})

retry(getAnimeYears, {
  times: 3,
  delay: 1000,
})
