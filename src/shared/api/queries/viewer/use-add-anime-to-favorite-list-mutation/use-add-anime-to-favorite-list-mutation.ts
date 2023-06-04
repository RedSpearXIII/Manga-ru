import { useMutation } from "@tanstack/react-query"
import { authHttp } from "~shared/api"
import { AddAnimeToFavoriteListParams } from "./types"

export const useAddAnimeToFavoriteListMutation = () =>
  useMutation({
    mutationFn: async ({ animeUrl, status }: AddAnimeToFavoriteListParams) => {
      try {
        const {
          data: { data },
        } = await authHttp.post(
          `/users/anime/favorite`,
          {},
          { params: { url: animeUrl, status } }
        )
        return data
      } catch (e) {
        console.log(e)
      }
    },
  })
