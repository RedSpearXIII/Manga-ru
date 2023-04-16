import { AnimeDetailingResponse, GetAnimeByIdParams } from "./types"
import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

export const useGetAnimeById = ({ animeId }: GetAnimeByIdParams) =>
  useQuery<AnimeDetailingResponse>(`getAnimeById-${animeId}`, async () => {
    try {
      const { data } = await publicApi.get(`anime/${animeId}`)

      return data.data[0]
    } catch (e) {
      console.log(e)
    }
  })
