import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeGenres = () =>
  useQuery<{ id: string; genre: string }[]>({
    queryKey: ["getAnimeGenres"],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(`anime/genres`)

        return data.data
      } catch (e) {
        console.log(e)
      }
    },
  })
