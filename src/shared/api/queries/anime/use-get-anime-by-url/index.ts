import { AnimeDetailingResponse, GetAnimeByIdParams } from "./types"
import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"

export const useGetAnimeByUrl = ({ animeUrl }: GetAnimeByIdParams) =>
  useQuery<AnimeDetailingResponse>({
    queryKey: [`getAnimeById-${animeUrl}`],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(`anime/${animeUrl}`)

        return data.data[0]
      } catch (e) {
        console.log(e)
      }
    },
  })

export * from "./types"
