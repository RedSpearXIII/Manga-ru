import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeImages = (animeUrl: string) =>
  useQuery<string[]>(`getAnimeImages-${animeUrl}`, async () => {
    try {
      const { data } = await publicHttp.get(`anime/${animeUrl}/screenshots`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
