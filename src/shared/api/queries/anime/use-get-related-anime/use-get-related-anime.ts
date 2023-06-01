import { useQuery } from "@tanstack/react-query"
import { publicHttp, RelatedAnimeResponse } from "~shared/api"
export const useGetRelatedAnime = (animeUrl: string) =>
  useQuery<RelatedAnimeResponse[]>({
    queryKey: [`getRelatedAnime-${animeUrl}`],
    queryFn: async () => {
      try {
        const {
          data: { data },
        } = await publicHttp.get(`/anime/${animeUrl}/related`)
        return data ? data : []
      } catch (e) {
        console.log(e)
      }
    },
  })
