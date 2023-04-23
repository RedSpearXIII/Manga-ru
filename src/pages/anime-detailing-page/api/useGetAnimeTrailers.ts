import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

type AnimeTrailer = {
  url: string
  imageUrl: string
  playerUrl: string
  name: string
  kind: string
  hosting: string
}

export const useGetAnimeTrailers = (animeId: string) =>
  useQuery<AnimeTrailer[]>(`getAnimeTrailers-${animeId}`, async () => {
    try {
      const { data } = await publicApi.get(`anime/${animeId}/media`)

      return data.data
    } catch (e) {
      console.log(e)
    }
  })
