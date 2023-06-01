import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"
import { AnimeTranslation } from "./types"

export const useGetAnimeTranslation = () =>
  useQuery<AnimeTranslation[]>({
    queryKey: ["getAnimeTranslation"],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(`anime/translations`)

        return data.data
      } catch (e) {
        console.log(e)
      }
    },
  })
