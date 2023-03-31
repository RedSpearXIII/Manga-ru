import { useInfiniteQuery } from "react-query"
import { publicApi } from "~shared/api"
import { AnimeResponse, GetAnimeParams } from "./types"

export const useGetAnimeList = ({
  pageSize,
  searchQuery,
  status,
  season,
  ratingMpa,
  genres,
  minimalAge,
  order,
}: GetAnimeParams) =>
  useInfiniteQuery<AnimeResponse[]>(
    [
      "getMangaList",
      searchQuery,
      status,
      season,
      ratingMpa,
      genres,
      minimalAge,
      order,
    ],
    async ({ pageParam = 0 }) => {
      const params = {
        pageSize: pageSize ? pageSize : 20,
        pageNum: pageParam,
        ...(searchQuery && { searchQuery }),
        ...(minimalAge && { minimalAge }),
        ...(ratingMpa && { ratingMpa }),
        ...(status && { status }),
        ...(season && { season }),
        ...(genres && { genres }),
        ...(order && { order }),
      }

      const {
        data: { data },
      } = await publicApi.get("anime/", {
        params,
      })
      return data
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length
        return lastPage.length !== 0 ? nextPage + 1 : undefined
      },
      refetchOnWindowFocus: false,
    }
  )
