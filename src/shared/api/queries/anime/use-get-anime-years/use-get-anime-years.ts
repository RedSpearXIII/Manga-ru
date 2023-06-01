import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeYears = () =>
  useQuery<string[]>({
    queryKey: ["getAnimeYears"],
    queryFn: async () => {
      const {
        data: { data },
      } = await publicHttp.get("anime/years")
      return data
    },
  })
