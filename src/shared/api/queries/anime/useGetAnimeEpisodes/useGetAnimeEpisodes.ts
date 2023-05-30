import { useQuery } from "@tanstack/react-query"
import { publicHttp } from "~shared/api"
import { getAnimeEpisodesParams, getAnimeEpisodesResponse } from "./types"

export const useGetAnimeEpisodes = ({
  animeUrl,
  translationId,
}: getAnimeEpisodesParams) =>
  useQuery<getAnimeEpisodesResponse>({
    queryKey: [`getAnimeEpisodes-${animeUrl}`],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(
          `anime/${animeUrl}/media?translation=${translationId}`
        )

        return data.data
      } catch (e) {
        console.log(e)
      }
    },
  })
