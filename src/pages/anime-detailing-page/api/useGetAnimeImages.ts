import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeImages = (animeUrl: string) =>
  useQuery<string[]>({
    queryKey: [`getAnimeImages-${animeUrl}`],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(`anime/${animeUrl}/screenshots`)

        return data.data
      } catch (e) {
        console.log(e)
      }
    },
  })
