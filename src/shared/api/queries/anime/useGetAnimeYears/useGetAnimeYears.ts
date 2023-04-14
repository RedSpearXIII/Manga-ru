import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

export const useGetAnimeYears = () =>
  useQuery<string[]>(["getAnimeYears"], async () => {
    const {
      data: { data },
    } = await publicApi.get("anime/years")
    return data
  })
