import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeRating = (animeUrl: string) =>
  useQuery(`getAnimeUrl-${animeUrl}`, async () => {
    try {
      const { data } = await publicHttp.get<
        { rating: number; count: number }[]
      >(`/anime/${animeUrl}/rating`)
      return data
    } catch (e) {
      console.log(e)
    }
  })
