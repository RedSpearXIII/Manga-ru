import { useMutation } from "@tanstack/react-query"
import { authHttp } from "~shared/api"
import { SetAnimeRatingParams } from "./types"

export const useSetAnimeRatingMutation = () =>
  useMutation({
    mutationFn: async ({ rating, animeUrl }: SetAnimeRatingParams) => {
      try {
        const {
          data: { data },
        } = await authHttp.post(
          `/users/anime/${animeUrl}/rating`,
          {},
          { params: { rating } }
        )
        return data
      } catch (e) {
        console.log(e)
      }
    },
  })
