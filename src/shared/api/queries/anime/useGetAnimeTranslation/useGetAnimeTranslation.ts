import { useQuery } from "react-query"
import { publicApi } from "~shared/api"
import { AnimeTranslation } from "./types"

export const useGetAnimeTranslation = () =>
  useQuery<AnimeTranslation[]>(`getAnimeTranslation`, async () => {
    try {
      const { data } = await publicApi.get(`anime/translations`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
