import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeGenres = () =>
  useQuery<{ id: string; genre: string }[]>(`getAnimeGenres`, async () => {
    try {
      const { data } = await publicHttp.get(`anime/genres`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
