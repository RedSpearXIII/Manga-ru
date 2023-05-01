import { AnimeDetailingResponse, GetAnimeByIdParams } from "./types"
import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeById = ({ animeId }: GetAnimeByIdParams) =>
  useQuery<AnimeDetailingResponse>(`getAnimeById-${animeId}`, async () => {
    try {
      const { data } = await publicHttp.get(`anime/${animeId}`)

      return data.data[0]
    } catch (e) {
      console.log(e)
    }
  })
