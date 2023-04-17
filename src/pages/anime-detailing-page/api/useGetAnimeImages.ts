import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

export const useGetAnimeImages = (animeId: string) =>
  useQuery<string[]>(`getAnimeImages-${animeId}`, async () => {
    try {
      const { data } = await publicApi.get(`anime/${animeId}/screenshots`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
