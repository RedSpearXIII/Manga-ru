import { useQuery } from "@tanstack/react-query"
import { AnimeTrackStatuses, publicHttp } from "~shared/api"

export type FavoriteListDistributionResponse = {
  [status in AnimeTrackStatuses]: number
}

export const FAVORITE_LIST_DISTRIBUTION_QUERY_KEY = (animeUrl: string) =>
  `favorite-list-distribution-${animeUrl}`

export const useGetFavoriteListDistribution = (animeUrl: string) =>
  useQuery<FavoriteListDistributionResponse>({
    queryKey: [FAVORITE_LIST_DISTRIBUTION_QUERY_KEY(animeUrl)],
    queryFn: async () => {
      try {
        const { data } = await publicHttp.get(`/anime/${animeUrl}/status`)
        return data
      } catch (e) {}
    },
  })
