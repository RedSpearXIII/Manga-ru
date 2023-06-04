import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeRating = (animeUrl: string) =>
  useQuery({
    queryKey: [`getAnimeRating-${animeUrl}`],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get<
          { rating: number; count: number }[]
        >(`/anime/${animeUrl}/rating`)
        return data
      } catch (e) {
        console.log(e)
      }
    },
  })
