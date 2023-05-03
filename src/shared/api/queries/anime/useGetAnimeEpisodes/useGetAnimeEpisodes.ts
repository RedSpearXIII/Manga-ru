import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"
import { getAnimeEpisodesParams, getAnimeEpisodesResponse } from "./types"

export const useGetAnimeEpisodes = ({
  animeUrl,
  translationId,
}: getAnimeEpisodesParams) =>
  useQuery<getAnimeEpisodesResponse>(
    `getAnimeEpisodes-${animeUrl}`,
    async () => {
      try {
        const { data } = await publicHttp.get(
          `anime/${animeUrl}/media?translation=${translationId}`
        )

        return data.data
      } catch (e) {
        console.log(e)
      }
    }
  )
