import { useInfiniteQuery } from "react-query"
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
}: GetAnimeParams) =>
  useInfiniteQuery<AnimeResponse[]>(
    [
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
        ...(order && { order }),
        ...(type && { type }),
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
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length
        return lastPage.length !== 0 ? nextPage + 1 : undefined
      },
      refetchOnWindowFocus: false,
    }
  )
