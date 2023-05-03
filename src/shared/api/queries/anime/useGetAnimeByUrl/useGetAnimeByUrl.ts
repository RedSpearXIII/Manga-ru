import { AnimeDetailingResponse, GetAnimeByIdParams } from "./types"
import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeByUrl = ({ animeUrl }: GetAnimeByIdParams) =>
  useQuery<AnimeDetailingResponse>(`getAnimeById-${animeUrl}`, async () => {
    try {
      const { data } = await publicHttp.get(`anime/${animeUrl}`)

      return data.data[0]
    } catch (e) {
      console.log(e)
    }
  })
