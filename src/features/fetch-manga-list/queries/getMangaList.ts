import { useQuery } from "react-query"
import { publicApi } from "~api/config"

export type MangaResponse = { id: string; title: string; image: string }

export const useGetMangaList = () =>
  useQuery<MangaResponse[]>("getAnimeList", async () => {
    const {
      data: { data },
    } = await publicApi.get("manga/")
    return data
  })
