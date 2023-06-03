import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export type AnimeGenre = { id: string; genre: string }

export const useGetAnimeGenres = () =>
  useQuery<AnimeGenre[]>({
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
