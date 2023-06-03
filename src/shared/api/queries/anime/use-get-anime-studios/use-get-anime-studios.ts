import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export type AnimeStudio = {
  id: string
  studio: string
}

export const useGetAnimeStudios = () =>
  useQuery<AnimeStudio[]>({
    queryKey: ["get-anime-studios"],
    queryFn: async () => {
      const {
        data: { data },
      } = await publicHttp.get("/anime/studios")
      return data
    },
  })
