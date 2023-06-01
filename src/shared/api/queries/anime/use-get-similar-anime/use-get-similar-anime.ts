import { useQuery } from "@tanstack/react-query"
import { AnimeResponse, publicHttp } from "~shared/api"

export const useGetSimilarAnime = (animeUrl: string) =>
  useQuery<AnimeResponse[]>({
    queryKey: [`getSimilarAnime-${animeUrl}`],
    queryFn: async () => {
      try {
        const {
          data: { data },
        } = await publicHttp.get(`/anime/${animeUrl}/similar`)

        return data
      } catch (e) {
        console.log(e)
      }
    },
  })
