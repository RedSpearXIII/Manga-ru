import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeYears = () =>
  useQuery<string[]>(["getAnimeYears"], async () => {
    const {
      data: { data },
    } = await publicHttp.get("anime/years")
    return data
  })
