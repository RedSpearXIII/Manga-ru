import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeImages = (animeId: string) =>
  useQuery<string[]>(`getAnimeImages-${animeId}`, async () => {
    try {
      const { data } = await publicHttp.get(`anime/${animeId}/screenshots`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
