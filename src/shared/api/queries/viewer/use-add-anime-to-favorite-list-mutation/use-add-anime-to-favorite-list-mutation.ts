import { useMutation } from "@tanstack/react-query"
import { authHttp } from "~shared/api"
import { SetAnimeStatusParams } from "./types"

export const useSetAnimeStatus = () =>
  useMutation({
    mutationFn: async ({ animeUrl, status }: SetAnimeStatusParams) => {
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
