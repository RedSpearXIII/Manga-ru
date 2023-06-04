import { useInfiniteQuery } from "@tanstack/react-query"
import { createArrayQueryParam, publicHttp } from "~shared/api"
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
  type,
  years,
  translations,
  studio,
}: GetAnimeParams) =>
  useInfiniteQuery<AnimeResponse[]>({
    queryKey: [
      "getAnimeList",
      searchQuery,
      status,
      season,
      ratingMpa,
      genres,
      minimalAge,
      order,
      type,
      years,
      translations,
      studio,
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const params = {
        pageSize: pageSize ? pageSize : 20,
        pageNum: pageParam,
        ...(searchQuery && { searchQuery }),
        ...(minimalAge && { minimalAge }),
        ...(ratingMpa && { ratingMpa }),
        ...(status && { status }),
        ...(season && { season }),
        ...(order && { order }),
        ...(type && { type }),
        ...(studio && { studio }),
      }

      const {
        data: { data },
      } = await publicHttp.get(
        `anime/${createArrayQueryParam([
          { paramName: "genres", array: genres },
          { paramName: "year", array: years },
          { paramName: "translation", array: translations },
        ])}`,
        {
          params,
        }
      )
      return data
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length - 1
      return lastPage.length !== 0 ? nextPage + 1 : undefined
    },
    refetchOnWindowFocus: false,
  })
