import { AnimeDetailingResponse, GetAnimeByIdParams } from "./types"
import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

export const useGetAnimeById = ({ id }: GetAnimeByIdParams) =>
  useQuery<AnimeDetailingResponse>(`getAnimeById-${id}`, async () => {
    try {
      const { data } = await publicApi.get(`anime/${id}`)

      return data.data[0]
    } catch (e) {
      console.log(e)
    }
  })
