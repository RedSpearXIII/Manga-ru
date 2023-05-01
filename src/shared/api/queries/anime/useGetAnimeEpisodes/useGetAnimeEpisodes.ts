import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"
import { getAnimeEpisodesParams, getAnimeEpisodesResponse } from "./types"

export const useGetAnimeEpisodes = ({
  animeId,
  translationId,
}: getAnimeEpisodesParams) =>
  useQuery<getAnimeEpisodesResponse>(
    `getAnimeEpisodes-${animeId}`,
    async () => {
      try {
        const { data } = await publicHttp.get(
          `anime/${animeId}/media?translation=${translationId}`
        )

        return data.data
      } catch (e) {
        console.log(e)
      }
    }
  )
