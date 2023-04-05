import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

export const useGetAnimeGenres = () =>
  useQuery<{ id: string; genre: string }[]>(`getAnimeGenres`, async () => {
    try {
      const { data } = await publicApi.get(`anime/genres`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
